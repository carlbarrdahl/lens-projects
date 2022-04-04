import React from "react";
import { Heading, HStack, VStack, StackDivider } from "@chakra-ui/react";

export default function Panel({
  title,
  rightAction = null,
  children,
}: {
  title: string;
  rightAction?: React.ReactElement | null;
  children: React.ReactNode;
}) {
  return (
    <VStack
      mb={4}
      border="1px solid"
      borderColor="gray.100"
      borderRadius={12}
      divider={
        <StackDivider
          style={{ marginLeft: -17, marginRight: -17, marginBottom: 16 }}
          borderColor="gray.100"
        />
      }
      p={4}
      align="stretch"
    >
      <HStack justify={"space-between"} mb={1}>
        <Heading fontSize={"md"}>{title}</Heading>
        {rightAction}
      </HStack>
      {children}
    </VStack>
  );
}
