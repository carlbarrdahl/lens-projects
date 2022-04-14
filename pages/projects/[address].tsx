import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import PostView from "modules/posts/components/PostView";
import { useRouter } from "next/router";
import Layout from "layouts/Layout";

const PostPage: NextPage = (props) => {
  const { query } = useRouter();
  return (
    <Layout>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </Layout>
  );
};

export default PostPage;
