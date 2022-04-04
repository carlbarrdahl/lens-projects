import { BigNumber } from "ethers";
import type { NextPage } from "next";
import {
  PublicationSortCriteria,
  PublicationTypes,
  useExplorePublicationsQuery,
  usePublicationQuery,
  usePublicationsQuery,
} from "../generated/graphql";

const Home: NextPage = () => {
  const { data } = useExplorePublicationsQuery({
    variables: {
      request: {
        sortCriteria: PublicationSortCriteria.TopCommented,
        limit: 10,
      },
    },
  });

  const { data: publications } = usePublicationsQuery({
    variables: {
      request: {
        profileId: "0x04eb",
        publicationTypes: [
          PublicationTypes.Post,
          PublicationTypes.Mirror,
          PublicationTypes.Comment,
        ],
      },
    },
  });

  console.log(BigNumber.from("0x0d").toHexString());
  const { data: publication } = usePublicationQuery({
    variables: {
      request: {
        publicationId: "0x04eb-0x0f",
        // publicationTypes: [PublicationTypes.Post],
      },
    },
  });

  console.log(data, publications);
  console.log(publication);
  return <div>main</div>;
};

export default Home;
