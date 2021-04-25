import { Box } from "@chakra-ui/layout";
import React from "react";

export default function Content({ children }) {
  return (
    <Box maxWidth="840px" margin="0 auto" p={["8px", "64px 0 0 0"]}>
      {children}
    </Box>
  );
}
