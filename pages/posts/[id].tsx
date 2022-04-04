import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import PostView from "modules/posts/components/PostView";
import { useRouter } from "next/router";

const PostPage: NextPage = (props) => {
  const { query } = useRouter();
  return (
    <Container>
      <PostView id={query.id} />
    </Container>
  );
};

export default PostPage;
