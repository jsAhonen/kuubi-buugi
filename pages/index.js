import { Form, Formik } from "formik";
import Head from "next/head";
import * as Yup from "yup";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import Field from "../components/forms/Field";
import Content from "../components/layout/Content";
import SubmitButton from "../components/forms/SubmitButton";
import { StylesProvider } from "@chakra-ui/system";
import Title from "../components/typography/Title";

export default function Home() {
  return (
    <Content>
      <Head>
        <title>Kuubi Buugi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column">
        <Title>
          Kuubi{" "}
          <strong>
            Super <br /> Elite
          </strong>{" "}
          Dev Team
        </Title>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            avatar: "",
            description: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Vaadittu kenttä"),
            email: Yup.string()
              .email("That's not an email, right?")
              .required("You need to give an email."),
            phone: Yup.string().required("Vaadittu kenttä"),
            description: Yup.string().required("Vaadittu kenttä"),
          })}
          onSubmit={(values) => {
            console.log({ values });
          }}
        >
          <Form>
            <Box d="flex" justifyContent="space-between">
              <Box d={"flex"} flexDirection="column">
                <Field name="name" label="Name*" />
                <Field name="email" label="Email*" />
                <Field name="phone" label="Phone*" />
              </Box>
            </Box>
            <Box>
              <Field
                as={Textarea}
                variant="outline"
                rows={8}
                name="description"
              />
            </Box>
            <SubmitButton />
          </Form>
        </Formik>
      </Flex>
    </Content>
  );
}
