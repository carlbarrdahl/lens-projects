import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import GraphQLProvider from "../providers/graphql";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

const connectors = ({ chainId }) => {
  return [
    new InjectedConnector({
      chains: defaultChains.concat({
        id: 80001,
        name: "Mumbai",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      }),
      options: { shimDisconnect: true },
    }),
  ];
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  styles: {
    global: {
      "*": {
        // outline: "1px solid rgba(0, 0, 200,.1)",
      },
    },
  },
  components: {
    Accordion: {
      baseStyle: {
        container: {
          border: "none",
        },
        button: {
          borderRadius: "full",
          border: "1px solid",
          borderColor: "gray.100",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: 20,
      },
    },
    Tag: {
      defaultProps: {
        variant: "outline",
      },
    },
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      {/* @ts-ignore */}
      <Provider autoConnect connectors={connectors}>
        <GraphQLProvider>
          {getLayout(<Component {...pageProps} />)}
        </GraphQLProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
