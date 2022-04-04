import { useProfileQuery } from "generated/graphql";
import { useAccount } from "wagmi";

export function useCurrentProfile() {
  const [{ data }] = useAccount();
  const { data: profile, ...rest } = useProfileQuery({
    // @ts-ignore
    variables: { request: { ownedBy: data?.address } },
    skip: !data?.address,
  });

  return { ...rest, data: profile?.profiles.items[0] };
}
