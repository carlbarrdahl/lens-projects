import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Container,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  PublicationTypes,
  useProfileQuery,
  usePublicationsQuery,
  useTimelineQuery,
} from "generated/graphql";

export default function ProfileDetails({ handle }) {
  console.log("ProfileDetails", handle);

  const { data, loading, error } = useProfileQuery({
    variables: { request: { handles: [handle] } },
    skip: !Boolean(handle),
  });

  const profileId = data?.profiles.items[0]?.id;
  const publications = usePublicationsQuery({
    variables: {
      request: {
        profileId,
        publicationTypes: [PublicationTypes.Post, PublicationTypes.Mirror],
      },
    },
    skip: !Boolean(profileId),
  });

  const timeline = useTimelineQuery({
    variables: {
      request: {
        profileId,
        // publicationTypes: [PublicationTypes.Post, PublicationTypes.Mirror],
      },
    },
    skip: !Boolean(profileId),
  });

  console.log(profileId, publications.data);
  console.log("timeline", timeline.data);
  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  console.log(data?.profiles.items);

  const [profile] = data?.profiles.items || [];
  if (!profile) {
    return <div>Not found</div>;
  }
  return (
    <Box>
      Profile {handle}
      <Text>Owned by: {profile.ownedBy}</Text>
      <Stat>
        <StatLabel>Total collects</StatLabel>
        <StatNumber>{profile.stats.totalCollects}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total comments</StatLabel>
        <StatNumber>{profile.stats.totalComments}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total followers</StatLabel>
        <StatNumber>{profile.stats.totalFollowers}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total following</StatLabel>
        <StatNumber>{profile.stats.totalFollowing}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total mirrors</StatLabel>
        <StatNumber>{profile.stats.totalMirrors}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total posts</StatLabel>
        <StatNumber>{profile.stats.totalPosts}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total publications</StatLabel>
        <StatNumber>{profile.stats.totalPublications}</StatNumber>
      </Stat>
    </Box>
  );
}
