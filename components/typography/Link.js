import { Link as ChakraLink } from "@chakra-ui/layout";
import React from "react";
import theme from "../../theme";

export default function Link({ children, ...props }) {
  return (
    <ChakraLink color={theme.colors.primary} {...props}>
      {children}
    </ChakraLink>
  );
}