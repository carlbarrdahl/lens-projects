import ProposalCreate from "modules/proposals/components/ProposalCreate";
import { useRouter } from "next/router";
import Layout from "layouts/Layout";

const CreateProposalPage = (props) => {
  const { query } = useRouter();
  // @ts-ignore
  return <ProposalCreate type={query.type} />;
};

export default CreateProposalPage;

CreateProposalPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
