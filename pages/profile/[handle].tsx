import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Container,
  Input,
} from "@chakra-ui/react";
import ProfileDetails from "modules/profile/components/ProfileDetails";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const ProfilePage: NextPage = (props) => {
  const { query } = useRouter();

  return (
    <Container>
      <ProfileDetails handle={query.handle} />
    </Container>
  );
};

export default ProfilePage;
