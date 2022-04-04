import { Box, Text, HStack, IconButton, useDisclosure } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

import Panel from "components/Panel";

const information = [
  {
    label: "Consensus System",
    value: "Guild",
  },
  {
    label: "Proposal Duration",
    value: "8 days",
  },
  {
    label: "Quorum",
    value: "40%",
  },
  {
    label: "Proposal History",
    value: "",
    children: ["history"],
  },
];

export default function PanelInformation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Panel title="Information">
      <Box>
        {information.map((info, i) => (
          <Box key={i}>
            <HStack justify="space-between" mb={2}>
              <Text fontWeight={"bold"}>{info.label}</Text>
              <Text>
                {info.value || (
                  <IconButton
                    onClick={() => (isOpen ? onClose() : onOpen())}
                    size="sm"
                    variant={"outline"}
                    aria-label="Proposal history"
                    icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  />
                )}
              </Text>
            </HStack>
            {isOpen
              ? info.children?.map((item) => <Text key={item}>{item}</Text>)
              : null}
          </Box>
        ))}
      </Box>
    </Panel>
  );
}
