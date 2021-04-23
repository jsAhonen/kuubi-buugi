import { Button as ChakraButton } from "@chakra-ui/button";
import React from "react";

export default function Button({ label = "Submit", ...props }) {
  return (
    <ChakraButton
      variant="outline"
      borderColor="#30adb4"
      color="#30adb4"
      borderRadius="unset"
      padding="12px 24px"
      alignItems="baseline"
      lineHeight="1.1"
      {...props}
    >
      {label}
    </ChakraButton>
  );
}
