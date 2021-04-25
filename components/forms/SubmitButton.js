import { Input } from "@chakra-ui/input";
import React from "react";

export default function SubmitButton({ label = "Submit", ...props }) {
  return (
    <Input
      type="submit"
      variant="outline"
      borderColor="primary"
      color="primary"
      borderRadius="unset"
      padding="12px 24px"
      alignItems="baseline"
      lineHeight="1.1"
      width="auto"
      value={label}
      {...props}
    />
  );
}
