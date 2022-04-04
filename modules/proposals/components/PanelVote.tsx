import React from "react";
import { Box, Button, Tag, VStack, FormLabel } from "@chakra-ui/react";

import Panel from "components/Panel";

export default function PanelVote({ status }) {
  return (
    <Panel title="Cast your vote" rightAction={<Tag>DXD</Tag>}>
      <Box>
        <FormLabel>Options</FormLabel>
        <VStack>
          <Button isFullWidth>For</Button>
          <Button isFullWidth>Against</Button>
          <Button variant={"outline"} isFullWidth>
            Vote
          </Button>
        </VStack>
      </Box>
    </Panel>
  );
}
