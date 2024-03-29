"use client";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomPinInput from "../misc/CustomPinInput";

const PasswordUpdateForm = () => {
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);

  async function handlePasswordChange(values: object) {
    setIsLoading(true);
    try {
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      handleError({ title: "Couldn't change your password", error: error });
    }
  }
  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Change Your Password
      </Heading>
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_password: "",
          }}
          onSubmit={(values) => handlePasswordChange(values)}
        >
          {({ values, handleChange, handleSubmit, errors, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Stack
                w={"full"}
                direction={["column", "row"]}
                gap={8}
                mb={8}
                mt={4}
              >
                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input
                    type="password"
                    name="old_password"
                    onChange={handleChange}
                    value={values?.old_password}
                    placeholder=" "
                  />
                  <FormLabel>Old Password</FormLabel>
                </FormControl>

                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input
                    type="password"
                    name="new_password"
                    onChange={handleChange}
                    value={values?.new_password}
                    placeholder=" "
                  />
                  <FormLabel>New Password</FormLabel>
                </FormControl>

                <FormControl w={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="confirm_password"
                    onChange={handleChange}
                    value={values?.confirm_password}
                    placeholder=" "
                  />
                  <FormLabel>Confirm New Password</FormLabel>
                </FormControl>
              </Stack>

              <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={16}>
                <Button
                  bgColor={"brand.primary"}
                  _hover={{
                    bgColor: "brand.hover",
                  }}
                  color={"#FFF"}
                  isLoading={isLoading}
                  type="submit"
                >
                  Save
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default PasswordUpdateForm;
