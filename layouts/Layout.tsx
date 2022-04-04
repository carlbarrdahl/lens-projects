import { Box, Container, Flex, Heading, HStack } from "@chakra-ui/react";
import NetworkSelector from "components/NetworkSelector";
import ConnectWallet from "components/ConnectWallet";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <Box>
      <Head>
        <title>Lens Projects</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="header" borderBottom={"1px solid"} borderColor="gray.100">
        <Flex as={Container} maxW="container.lg" justify="space-between" py={4}>
          <Heading>Project</Heading>
          <HStack>
            <NetworkSelector />
            <ConnectWallet />
          </HStack>
        </Flex>
      </Flex>
      <Container maxW={"container.lg"} pt={14}>
        {children}
      </Container>
    </Box>
  );
}
