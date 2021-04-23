import { Field as FormikField, useField } from "formik";
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import theme from "../../theme";

export default function Field(props) {
  const [field] = useField(props.name);
  const { value } = field;
  return (
    <FormControl>
      <FormikField
        as={Input}
        margin="8px 0"
        variant="flushed"
        borderColor={theme.colors.primary}
        errorBorderColor="#d42222"
        placeholder=""
        sx={{
          "&:focus": {
            borderBottomColor: theme.colors.primary,
          },
          "& ~ span": {
            position: "absolute",
            transition: "top font-size 1s ease",
            top: value ? "0" : "40%",
            fontSize: value ? ".8em" : "1em",
            color: theme.colors.primary,
          },
          "&:focus ~ span": {
            top: "0",
            fontSize: ".8em",
          },
        }}
        {...props}
      />
      <FormLabel as="span" mb="4px">
        {props.label}
      </FormLabel>
    </FormControl>
  );
}
