import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import theme from "../../theme";

export default function Checkbox({ children, checked = false, onClick }) {
  return (
    <Flex align="center" m="8px 0">
      <Flex
        justify="center"
        align="center"
        border="1px solid #d3d3d3"
        height="40px"
        width="40px"
        mr="8px"
        onClick={onClick}
      >
        {checked && <CheckIcon color="primary" />}
      </Flex>
      {children}
    </Flex>
  );
}
