import { Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../../theme";

export default function Title({ children, ...props }) {
  return (
    <Text
      fontSize="6xl"
      fontWeight="black"
      lineHeight={1.1}
      mb="24px"
      sx={{
        "& strong": {
          color: "primary",
        },
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
