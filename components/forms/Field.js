import { Field as FormikField, useField } from "formik";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { InputGroup } from "@chakra-ui/input";
import { InputRightElement } from "@chakra-ui/input";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Field(props) {
  const [{ value }, { error, touched }] = useField(props.name);
  const themeColor = touched && error ? "error" : "primary";
  return (
    <FormControl margin="8px 0">
      <InputGroup alignItems="center">
        <FormikField
          as={Input}
          margin="8px 0"
          variant="flushed"
          borderColor={themeColor}
          errorBorderColor="error"
          placeholder=""
          sx={{
            "&:focus": {
              borderBottomColor: themeColor,
            },
            "& ~ span": {
              position: "absolute",
              transition: "top font-size 1s ease",
              top: value ? "-5%" : "20%",
              fontSize: value ? ".8em" : "1em",
              color: themeColor,
            },
            "&:focus ~ span": {
              top: "-5%",
              fontSize: ".8em",
            },
          }}
          {...props}
        />
        <FormLabel as="span">{props.label}</FormLabel>
        {touched && !props.noIcon && (
          <InputRightElement
            children={
              error ? (
                <CloseIcon color="error" />
              ) : (
                <CheckIcon color="primary" />
              )
            }
          />
        )}
      </InputGroup>
    </FormControl>
  );
}
