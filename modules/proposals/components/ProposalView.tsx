import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Text, Heading, HStack, Tag } from "@chakra-ui/react";

import Avatar from "boring-avatars";
import Panel from "components/Panel";
import AsideLayout from "layouts/Aside";
import React from "react";
import ActionsList from "./ActionsList";
import PanelInformation from "./PanelInformation";
import PanelVote from "./PanelVote";

const actions = [
  {
    method: "mint",
    amount: "0.16% REP",
    to: "user.eth",
    result: "5.54%",
  },
  {
    method: "transfer",
    amount: "0.1 ETH",
    to: "another.eth",
    result: "",
  },
];

export default function ProposalView({ id }) {
  return (
    <AsideLayout
      isLoading={false}
      header={
        <>
          <Button variant="outline" leftIcon={<ChevronLeftIcon />}>
            Back to proposals
          </Button>
          <HStack>
            <Tag size="lg" colorScheme={"green"}>
              Passed
            </Tag>
            <Button colorScheme={"blue"}>Execute</Button>
          </HStack>
        </>
      }
      aside={
        <>
          <PanelVote status={"active"} />
          <PanelInformation />
        </>
      }
    >
      <Box>
        <Heading fontSize={"2xl"} mb={3}>
          DXD Buyback Program Extension #3 Proposal
        </Heading>

        <Button
          mb={3}
          variant="outline"
          leftIcon={<Avatar size={20} name="user.eth" />}
        >
          user.eth
        </Button>

        <Text mb={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo quam,
          blandit eu sapien eu, commodo dapibus nisl. Phasellus id risus in
          mauris pharetra tristique. Pellentesque euismod at velit a auctor.
          Quisque ipsum odio, molestie maximus dignissim sit amet, rutrum id
          tortor. Mauris non dolor turpis. Duis ut pharetra ex. Pellentesque
          dignissim quis tellus eget mattis. Nunc tellus augue, dignissim nec
          fermentum ac, euismod vel nunc. Fusce mi justo, facilisis eu dui
          tincidunt, tristique aliquet dolor. Ut rhoncus velit a orci maximus
          dapibus. Proin vulputate sem et ipsum sagittis, in fermentum lacus
          auctor. Mauris dictum mi ante, sed condimentum leo tincidunt non. Ut
          gravida libero accumsan magna dapibus tristique ut convallis ipsum.
          Mauris congue odio et imperdiet ullamcorper.
        </Text>
        <Panel title="Actions">
          <Box>
            <HStack justify={"space-between"}>
              <Tag size="lg" colorScheme={"blue"}>
                For
              </Tag>
              <Text>1 on-chain action</Text>
            </HStack>

            <ActionsList actions={actions} />
          </Box>

          <HStack justify={"space-between"}>
            <Tag size="lg" colorScheme={"red"}>
              Against
            </Tag>
            <Text>No on-chain action</Text>
          </HStack>
        </Panel>
      </Box>
    </AsideLayout>
  );
}
