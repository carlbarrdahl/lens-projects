import { Box } from "@chakra-ui/react";

export default function PostView({ id }) {
  console.log("PostView", id);

  return <Box>Post {id}</Box>;
}
