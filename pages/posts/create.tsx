import type { NextPage } from "next";

import { useCurrentProfile } from "modules/profile/hooks/useCurrentProfile";
import Layout from "layouts/Layout";

import PostCreate from "modules/posts/components/PostCreate";

const CreatePostPage: NextPage = (props) => {
  const { data, loading, error } = useCurrentProfile();

  return (
    <Layout>
      {loading ? (
        <div>loading current profile...</div>
      ) : (
        <PostCreate profileId={data?.id} />
      )}
    </Layout>
  );
};

export default CreatePostPage;
