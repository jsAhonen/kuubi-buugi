import { Text } from "@chakra-ui/layout";
import React from "react";
import theme from "../../theme";

export default function Title({ children, ...props }) {
  return (
    <Text
      fontSize="6xl"
      sx={{
        "& strong": {
          color: theme.colors.primary,
        },
      }}
      {...props}
    >
      {children}
    </Text>
  );
}
