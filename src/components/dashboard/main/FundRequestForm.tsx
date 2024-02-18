"use client";
import FileDropzone from "@/components/misc/FileDropzone";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import { FormAxios } from "@/lib/utils/axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { FC, useState } from "react";

interface FormProps {
  onClose: () => void;
}

const FundRequestForm: FC<FormProps> = ({ onClose }) => {
  const {handleError} = useErrorHandler()
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: object) {
    setIsLoading(true);
    try {
      await FormAxios.post("/user/fund-requests", values)
      setIsLoading(false);
      onClose();
    } catch (error) {
      setIsLoading(false);
      handleError({title: "Couldn't post your fund request", error: error})
    }
  }

  return (
    <>
      <Formik
        initialValues={{
          amount: "",
          transaction_id: "",
          transaction_date: "",
          requested_bank: "",
          user_remarks: "",
          receipt: null,
          channel: "",
        }}
        onSubmit={values => console.log(values)}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Stack direction={["column", "row"]} gap={8} mb={8}>
              <FormControl maxW={["full", "xs"]} variant={"floating"}>
                <Input name="amount" type="number" placeholder="₹" onChange={handleChange} />
                <FormLabel>Amount</FormLabel>
              </FormControl>
              <FormControl maxW={["full", "xs"]} variant={"floating"}>
                <Input name="transaction_id" type="text" placeholder=" " onChange={handleChange} />
                <FormLabel>Transaction ID</FormLabel>
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} gap={8} mb={8}>
              <FormControl maxW={["full", "xs"]}>
                <FormLabel fontSize={"xs"}>Transaction Date</FormLabel>
                <Input
                  name="transaction_date"
                  type="date"
                  placeholder="Transaction Date"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl maxW={["full", "xs"]}>
                <FormLabel fontSize={"xs"}>Requested Bank</FormLabel>
                <Select name="requested_bank" placeholder="Please select" onChange={handleChange}>
                  <option value="1234567890">State Bank of India</option>
                </Select>
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} gap={8} mb={8}>
              <Box w={["full"]}>
                <FileDropzone
                  onUpload={(files) => setFieldValue("receipt", files)}
                  accept="image/*,application/pdf"
                  label="Upload payment receipt"
                  height={32}
                />
              </Box>
              <FormControl maxW={["full", "xs"]} variant={"floating"}>
                <Textarea
                  name="user_remarks"
                  resize={"none"}
                  w={"full"}
                  h={"32"}
                  placeholder=" "
                  onChange={handleChange}
                />
                <FormLabel>Remarks</FormLabel>
              </FormControl>
            </Stack>
            <HStack w={"full"} justifyContent={"flex-end"} gap={6} mt={16}>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                bgColor={"brand.primary"}
                _hover={{
                  bgColor: "brand.hover",
                }}
                color={"#FFF"}
                isLoading={isLoading}
                onClick={() => onSubmit(values)}
              >
                Send
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FundRequestForm;
