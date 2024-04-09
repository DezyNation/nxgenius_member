"use client";
import ExportButtons from "@/components/dashboard/misc/ExportButtons";
import CustomButton from "@/components/misc/CustomButton";
import Pagination from "@/components/misc/Pagination";
import { API } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { format } from "date-fns";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();
  const { user, authUser } = useAuth();

  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>({});
  const [pages, setPages] = useState([]);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    (async () => {
      if (ref.current && user?.id) {
        ref.current = false;
        await getData();
      } else if (!user?.id) {
        await authUser();
      }
    })();
    console.log(user?.id);
  }, [user]);

  async function getData(url?: string, query?: object) {
    setIsLoading(true);
    try {
      const from = format(selectedDates[0], "yyyy-MM-dd");
      const to = format(selectedDates[1], "yyyy-MM-dd");
      setFormData({ ...query, from: from, to: to });
      const res = await API.adminReportDailySales(url, {
        ...query,
        from: from,
        to: to,
      });
      setData(res?.data);
      setPages(res?.meta?.links);
      setIsLoading(false);
      console.log("User ID", user?.id);
      console.log(
        res?.data[user?.id]?.payout?.debit_amount -
          res?.data[user?.id]?.payout?.credit_amount
      );
    } catch (error) {
      setIsLoading(false);
      handleError({
        title: "Could not fetch data",
        error: error,
      });
    }
  }

  return (
    <>
      <Heading as={"h1"} fontSize={"xl"} mb={8}>
        Daily Sales
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <Formik
          initialValues={{
            receiver_id: "",
          }}
          onSubmit={console.log}
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Stack
                direction={["column", "row"]}
                alignItems={"flex-end"}
                gap={8}
                mb={8}
                flexWrap={"wrap"}
              >
                <FormControl maxW={["full", "xs"]}>
                  <FormLabel>Dates</FormLabel>
                  <RangeDatepicker
                    selectedDates={selectedDates}
                    onDateChange={setSelectedDates}
                  />
                </FormControl>
                <FormControl maxW={["full", "xs"]} variant={"floating"}>
                  <Input
                    name="receiver_id"
                    type="text"
                    placeholder=" "
                    onChange={handleChange}
                  />
                  <FormLabel>Transaction ID</FormLabel>
                </FormControl>
              </Stack>
              <HStack justifyContent={"flex-end"}>
                <CustomButton
                  onClick={() => getData("", values)}
                  isLoading={isLoading}
                >
                  Search
                </CustomButton>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <Pagination
            pages={pages}
            onClick={(value: string) => getData(value, {})}
          />
        </HStack>

        <TableContainer maxH={"sm"} overflowY={"scroll"} overflowX={"scroll"}>
          <Table size={"md"} variant={"striped"}>
            <Thead>
              <Tr>
                <Th color={"gray.600"}>User</Th>
                <Th color={"gray.600"}>Payout</Th>
                <Th color={"gray.600"}>Payout Fees</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"xs"}>
              {Object?.entries(data)?.map((item: any, key) => (
                <Tr key={key}>
                  <Td>User Name</Td>
                  <Td borderBottom={0}>
                    ₹
                    {(
                      item[1]?.payout?.debit_amount -
                        item[1]?.payout?.credit_amount || 0
                    )?.toLocaleString("en-IN") || 0}
                  </Td>
                  <Td borderBottom={0}>
                    ₹
                    {(
                      item[1]?.payout_commission?.debit_amount -
                        item[1]?.payout_commission?.credit_amount || 0
                    )?.toLocaleString("en-IN") || 0}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default page;
