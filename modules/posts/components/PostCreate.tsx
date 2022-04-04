import {
  Box,
  Flex,
  Button,
  Input,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useContract, useSigner, useSignTypedData } from "wagmi";
import {
  useCreatePublicPostMutation,
  useHasTxHashBeenIndexedLazyQuery,
} from "generated/graphql";
import { BigNumber, utils } from "ethers";
import { v4 as uuidv4 } from "uuid";

import { LENS_HUB_CONTRACT, LENS_HUB_ABI } from "contracts/lensHub";
import AsideLayout from "layouts/Aside";
import Panel from "components/Panel";
import { store } from "lib/ipfs";
import { useCurrentProfile } from "modules/profile/hooks/useCurrentProfile";
import { useEffect } from "react";

function createMetadata({ name, description, content, external_url = null }) {
  return {
    version: "1.0.0",
    metadata_id: uuidv4(),
    // metadata_id: Math.random().toString(),
    description,
    content,
    external_url,
    image: null,
    imageMimeType: null,
    name,
    attributes: [],
    media: [
      // {
      //   item: 'https://scx2.b-cdn.net/gfx/news/hires/2018/lion.jpg',
      //   // item: 'https://assets-global.website-files.com/5c38aa850637d1e7198ea850/5f4e173f16b537984687e39e_AAVE%20ARTICLE%20website%20main%201600x800.png',
      //   type: 'image/jpeg',
      // },
    ],
    appId: "lensprojects",
  };
}

function createPostData({ typedData, r, v, s }) {
  return {
    profileId: typedData.value.profileId,
    contentURI: typedData.value.contentURI,
    collectModule: typedData.value.collectModule,
    collectModuleData: typedData.value.collectModuleData,
    referenceModule: typedData.value.referenceModule,
    referenceModuleData: typedData.value.referenceModuleData,
    sig: { r, v, s, deadline: typedData.value.deadline },
  };
}

export default function PostCreate({ profileId }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      content: "",
      description: "Lens Projects",
    },
  });

  const [{ data: signer }] = useSigner();
  const [create, { loading, ...data }] = useCreatePublicPostMutation();
  const [checkTx, tx] = useHasTxHashBeenIndexedLazyQuery();

  const [, signTypedData] = useSignTypedData();

  const lensHub = useContract({
    addressOrName: LENS_HUB_CONTRACT,
    contractInterface: LENS_HUB_ABI,
    signerOrProvider: signer,
  });

  console.log("poll tx", tx);

  useEffect(() => {
    if (tx?.data?.hasTxHashBeenIndexed?.txReceipt) {
      console.log("Transaction indexed!", tx.data.hasTxHashBeenIndexed);
      tx.stopPolling();
      const topicId = utils.id(
        "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)"
      );
      console.log("topicid we care about", topicId);

      const profileCreatedEventLog =
        tx.data.hasTxHashBeenIndexed.txReceipt?.logs.find(
          (log) => log.topics[0] === topicId
        );

      console.log("create post: created event logs", profileCreatedEventLog);

      const publicationId = utils.defaultAbiCoder.decode(
        ["uint256"],
        // @ts-ignore
        profileCreatedEventLog.topics[2]
      )[0];

      console.log("create post: contract publication id", publicationId);

      console.log(
        "create post: internal publication id",
        profileId + "-" + BigNumber.from(publicationId).toHexString()
      );
    }
    console.log("tx", tx);
  }, [tx]);

  const isLoading = loading;
  return (
    <AsideLayout
      header={null}
      aside={
        <>
          <Panel title="Configure project">
            <Box>configure here</Box>
          </Panel>
        </>
      }
    >
      <form
        onSubmit={handleSubmit(async (form) => {
          console.log("form", form);
          try {
            console.log("Upload metadata to IPFS");
            const contentURI = await store(
              // @ts-ignore
              createMetadata(form.content),
              "metadata.json"
            );

            console.log("Creating post in Lens...", contentURI);
            const { data } = await create({
              variables: {
                request: {
                  profileId,
                  contentURI,
                  collectModule: {
                    revertCollectModule: true,
                    // emptyCollectModule: true,
                  },
                  referenceModule: {
                    followerOnlyReferenceModule: false,
                  },
                },
              },
            });
            // @ts-ignore
            const { typedData } = data?.createPostTypedData;
            console.log(
              "Signing TypedData",
              typedData,
              data?.createPostTypedData
            );
            let { domain, types, value } = typedData;
            delete domain.__typename;
            delete types.__typename;
            delete value.__typename;
            const { r, v, s } = await signTypedData({
              domain,
              types,
              value,
            }).then(({ data = "" }) => utils.splitSignature(data));

            console.log("Posting to LensHub with sig");
            const { hash, ...rest } = await lensHub.postWithSig(
              createPostData({ typedData, r, s, v })
            );
            console.log(rest);

            console.log("Checking if transaction has been indexed");
            await checkTx({
              variables: { request: { txHash: hash } },
              // @ts-ignore
              pollInterval: 1500,
            });
          } catch (error) {
            console.log("create post error", error);
          }
        })}
      >
        <Text>Author: {profileId}</Text>
        <Wrap mb={6}>
          <WrapItem>
            <Image
              alt="Project logo"
              src="https://via.placeholder.com/150"
              boxSize={32}
              fallbackSrc="https://via.placeholder.com/150"
            />
          </WrapItem>
          <WrapItem>
            <Input
              autoFocus
              fontSize={"3xl"}
              variant={"unstyled"}
              placeholder={"Untitled project"}
              {...register("name")}
            />
          </WrapItem>
        </Wrap>
        <Textarea width={"100%"} rows={10} mb={4} {...register("content")} />
        <Flex justify={"flex-end"}>
          <Button isLoading={isLoading} type="submit" colorScheme={"blue"}>
            Create project
          </Button>
        </Flex>
      </form>
    </AsideLayout>
  );
}
