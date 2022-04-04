import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Text,
  Heading,
  Flex,
  HStack,
  Tag,
  Skeleton,
  Textarea,
} from "@chakra-ui/react";

import Avatar from "boring-avatars";
import Panel from "components/Panel";
import AsideLayout from "layouts/Aside";
import React from "react";
import ActionsList from "./ActionsList";
import PanelInformation from "./PanelInformation";

export default function ProposalCreate({ id }) {
  return (
    <AsideLayout
      isLoading={false}
      header={
        <>
          <Button variant="outline" leftIcon={<ChevronLeftIcon />}>
            Back to proposals
          </Button>
        </>
      }
      aside={
        <>
          <PanelInformation />
        </>
      }
    >
      <Box>
        <Input fontSize={"2xl"} mb={3} placeholder="Untitled proposal" />

        <Textarea mb={6} placeholder="Description"></Textarea>
        <Panel title="Actions">
          <Box>
            <HStack justify={"space-between"}>
              <Tag size="lg" colorScheme={"blue"}>
                For
              </Tag>
              <Text>1 on-chain action</Text>
            </HStack>

            <div>1. Select contract</div>
            <div>2. Select method</div>
            <div>3. Configure arguments</div>
            {/* <ActionsList actions={actions} /> */}
          </Box>

          <HStack justify={"space-between"}>
            <Tag size="lg" colorScheme={"red"}>
              Against
            </Tag>
            <Text>No on-chain action</Text>
          </HStack>
        </Panel>
      </Box>
    </AsideLayout>
  );
}
