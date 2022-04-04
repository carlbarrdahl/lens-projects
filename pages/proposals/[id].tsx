import ProposalView from "modules/proposals/components/ProposalView";
import { useRouter } from "next/router";
import Layout from "layouts/Layout";

const ProposalPage = (props) => {
  const { query } = useRouter();
  return <ProposalView id={query.id} />;
};

export default ProposalPage;

ProposalPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
