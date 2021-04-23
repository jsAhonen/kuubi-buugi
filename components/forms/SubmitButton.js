import { Input } from "@chakra-ui/input";
import React from "react";

export default function SubmitButton({ label = "Submit", ...props }) {
  return (
    <Input
      type="submit"
      variant="outline"
      borderColor="#30adb4"
      color="#30adb4"
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
