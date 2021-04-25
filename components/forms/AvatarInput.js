import { Image } from "@chakra-ui/image";
import { SimpleGrid } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { useRadio } from "@chakra-ui/radio";
import { useRadioGroup } from "@chakra-ui/radio";
import { useField } from "formik";
import React from "react";
import theme from "../../theme";

export default function AvatarInput({ name, options }) {
  const [{ value }, _, { setValue }] = useField(name);
  const radioGroup = useRadioGroup({
    name: name,
    defaultValue: value,
    onChange: setValue,
  });
  const group = radioGroup.getRootProps();

  if (!options.length) {
    return <Text>No options</Text>;
  }

  return (
    <Flex justify="center" align="center" direction={["column", "row"]}>
      <Image src={value} alt="" width="160px" height="160px" m="6px" />
      <SimpleGrid {...group} columns={3}>
        {options.map((option) => {
          const radio = radioGroup.getRadioProps({ value: option });
          return <AvatarOption key={option} {...radio} src={option} />;
        })}
      </SimpleGrid>
    </Flex>
  );
}

function AvatarOption({ src, ...props }) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Image
        {...checkbox}
        src={src}
        width="80px"
        height="80px"
        alt=""
        boxSizing="border-box"
        border={`6px solid transparent`}
        borderRadius={`4px`}
        _checked={{
          borderColor: "primary",
        }}
      />
    </Box>
  );
}
