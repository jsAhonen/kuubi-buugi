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
import ImageInput from "../components/forms/AvatarInput";
import { Spacer } from "@chakra-ui/layout";
import avatarData from "../avatar-data";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kuubi Buugi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
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
            avatar: avatarData[0],
            description: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Vaadittu kenttä"),
            email: Yup.string()
              .email("That's not an email, right?")
              .required("You need to give an email."),
            phone: Yup.string().required("Vaadittu kenttä"),
          })}
          onSubmit={(values) => {
            console.log({ values });
          }}
        >
          <Form>
            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
            >
              <Flex direction="column" flex={1} mr="16px">
                <Flex justify="space-between">
                  <Text fontSize="xl" fontWeight="bold">
                    Create profile
                  </Text>
                  <Text color="gray">* required</Text>
                </Flex>
                <Field name="name" label="Name*" />
                <Field name="email" label="Email*" />
                <Field name="phone" label="Phone*" />
              </Flex>
              <Box flex={1}>
                <Text fontSize="xl" fontWeight="bold">
                  Choose Your Avatar
                </Text>
                <ImageInput name="avatar" options={avatarData} />
              </Box>
            </Flex>
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
      </Content>
    </>
  );
}
