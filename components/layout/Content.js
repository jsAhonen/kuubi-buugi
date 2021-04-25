import { Box } from "@chakra-ui/layout";
import React from "react";

export default function Content({ children }) {
  return (
    <Box maxWidth="840px" margin="120px auto 0 auto">
      {children}
    </Box>
  );
}
