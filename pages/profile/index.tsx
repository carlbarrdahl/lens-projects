import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import { useCreateProfileMutation, useProfileQuery } from "generated/graphql";
import Layout from "layouts/Layout";

const ErrorMessage = ({ error }) =>
  error ? (
    <Alert status="error">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  ) : null;

const Profile = () => {
  const [{ data: account = {} }, disconnect] = useAccount();
  const { data: profile } = useProfileQuery({
    // @ts-ignore
    variables: { request: { ownedBy: account?.address } },
    // @ts-ignore
    skip: !account?.address,
  });

  console.log("profile", profile);

  return <div>Profile</div>;
};

const ProfilePage: NextPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: { handle: "" },
  });

  const [{ data: address }, disconnect] = useAccount();

  console.log("account", address);

  const [create, data] = useCreateProfileMutation();
  console.log(data);
  return (
    <Layout>
      <form
        onSubmit={handleSubmit((form) => {
          console.log(form);
          create({ variables: { request: form } }).then(({ data }) => {
            console.log("createProfile", data);
          });
        })}
      >
        <ErrorMessage error={data.error} />
        <Input {...register("handle")} />
        <Button>Create Profile</Button>
      </form>

      <Profile />
    </Layout>
  );
};

export default ProfilePage;
