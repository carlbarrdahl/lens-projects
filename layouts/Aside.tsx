import { Box, Grid, Flex, Skeleton } from "@chakra-ui/react";

export default function AsideLayout({
  aside,
  header,
  children,
  isLoading = false,
}) {
  return (
    <Grid templateColumns={["auto", "auto", "auto 18rem"]} gap={8}>
      <Box>
        <Skeleton
          isLoaded={!isLoading}
          as={Flex}
          justify={"space-between"}
          mb={6}
        >
          {header}
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>{children}</Skeleton>
      </Box>
      <Skeleton isLoaded={!isLoading} as="aside">
        {aside}
      </Skeleton>
    </Grid>
  );
}
