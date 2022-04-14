import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import NetworkSelector from "components/NetworkSelector";
import ConnectWallet from "components/ConnectWallet";
import Head from "next/head";

export default function Layout({ children }) {
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      <Head>
        <title>Lens Projects</title>
        <meta name="description" content="..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="header" borderBottom={"1px solid"} borderColor={borderColor}>
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
