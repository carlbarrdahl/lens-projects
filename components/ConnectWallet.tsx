import { Button, Flex, Spinner } from "@chakra-ui/react";
import { useAccount, useConnect, useSignMessage } from "wagmi";
import Avatar from "boring-avatars";

import {
  useChallengeLazyQuery,
  useAuthenticationMutation,
  useVerifyQuery,
  useRefreshMutation,
} from "generated/graphql";
import { useEffect } from "react";
import { useLocalStorage } from "react-use";
import { truncate } from "utils/format";

// How can this be made neater?
function useLensAuth(address) {
  const [
    { accessToken, refreshToken } = { accessToken: "", refreshToken: "" },
    setToken,
    remove,
  ] = useLocalStorage("lens.tokens");

  const [, signMessage] = useSignMessage();

  const [challenge, { called }] = useChallengeLazyQuery();
  const [refresh, refreshData] = useRefreshMutation();
  const verify = useVerifyQuery({
    variables: { request: { accessToken } },
    skip: !accessToken,
  });

  const [auth] = useAuthenticationMutation();

  // Challenge, signMessage and authenticate
  useEffect(() => {
    async function lensAuth() {
      console.log("lensAuth");
      await challenge({ variables: { request: { address } } })
        .then(({ data }) => signMessage({ message: data?.challenge.text }))
        .then(({ data: signature }) =>
          auth({ variables: { request: { address, signature } } })
        )
        .then(({ data }) => setToken(data?.authenticate))
        .catch((err) => {
          console.log("error", err);
        });
    }
    if (!called && !accessToken) {
      lensAuth();
    }
  }, [address, auth, challenge, called, signMessage, accessToken, setToken]);

  // Verify token
  useEffect(() => {
    console.log("valid token", verify.data, refreshToken);
    if (
      // Verify should have been called and refresh is not underway
      verify.called &&
      !refreshData.called &&
      verify.data?.verify === false
    ) {
      // Try refresh token or clear storage
      refresh({ variables: { request: { refreshToken } } })
        .then(({ data }) => setToken(data?.refresh))
        .catch(
          () => remove()
          // window.location.reload()
        );
    }
  }, [verify, refreshToken, refresh, remove, refreshData, setToken]);
}

function ConnectedAccount({ address, onDisconnect }) {
  useLensAuth(address);
  return (
    <Button
      variant="outline"
      onClick={onDisconnect}
      leftIcon={<Avatar size={20} name={address} />}
    >
      {truncate(address)}
    </Button>
  );
}

export default function ConnectWallet() {
  const [{ data: account }, disconnect] = useAccount();
  const [{ data, error, loading }, connect] = useConnect();

  if (loading) {
    return (
      <Flex
        width={"40px"}
        height="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size={"md"} />
      </Flex>
    );
  }
  const { address } = account || {};

  return address ? (
    <ConnectedAccount address={address} onDisconnect={disconnect} />
  ) : (
    <Button onClick={() => connect(data.connectors[0])}>Connect</Button>
  );
}
