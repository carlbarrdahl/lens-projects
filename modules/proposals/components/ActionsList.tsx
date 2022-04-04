import React from "react";
import {
  Box,
  Text,
  Flex,
  Tag,
  Icon,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
} from "@chakra-ui/react";

import Avatar from "boring-avatars";
import { FiPlusCircle } from "react-icons/fi";
import { MdArrowRightAlt } from "react-icons/md";

export default function ActionsList({ actions }) {
  return (
    <Accordion mt={2}>
      {actions.map((action, i) => (
        <AccordionItem key={i} mb={2}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Flex alignItems={"center"}>
                <Icon w={6} h={6} mr={2} as={FiPlusCircle} />
                {action.method} {action.amount}
                <Icon w={6} h={6} mx={1} as={MdArrowRightAlt} />
                <Avatar size={20} name={action.to} />
                <Text mx={2}>{action.to}</Text>
                <Tag hidden={!action.result} variant={"subtle"} size="md">
                  {action.result}
                </Tag>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>Action details</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
