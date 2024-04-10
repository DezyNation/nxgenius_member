"use client";
import CustomButton from "@/components/misc/CustomButton";
import Pagination from "@/components/misc/Pagination";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Badge,
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
import React, { useState, useEffect, useRef } from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import ExportButtons from "@/components/dashboard/misc/ExportButtons";
import { format } from "date-fns";

const page = () => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  const [selectedDates, setSelectedDates] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getData();
    }
  }, []);

  async function getData(url?: string, query?: object) {
    setIsLoading(true);
    try {
      const from = format(selectedDates[0], "yyyy-MM-dd");
      const to = format(selectedDates[1], "yyyy-MM-dd");
      setFormData({ ...query, from: from, to: to });
      const res = await API.reportFundTransfers(url, {
        ...query,
        from: from,
        to: to,
      });
      setData(res?.data);
      setPages(res?.meta?.links);
      setIsLoading(false);
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
        Fund Transfer Report
      </Heading>

      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>

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
              </Stack>
              <HStack justifyContent={"flex-end"}>
                <CustomButton
                  onClick={() => getData("", {})}
                  isLoading={isLoading}
                >
                  Search
                </CustomButton>
              </HStack>
      </Box>
      <br />
      <br />
      <Box mb={8} p={6} bgColor={"#FFF"} boxShadow={"base"} rounded={4}>
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <ExportButtons
            fileName={"FundTransfer"}
            service="fund-transfer"
            query={formData}
          />
          <Pagination
            pages={pages}
            onClick={(value: string) => getData(value, {})}
          />
        </HStack>

        <TableContainer maxH={"sm"} overflowY={"scroll"}>
          <Table size={"md"} variant={"striped"}>
            <Thead>
              <Tr>
                <Th color={"gray.600"}>ID</Th>
                <Th color={"gray.600"}>Admin</Th>
                <Th color={"gray.600"}>Debit Amount</Th>
                <Th color={"gray.600"}>Credit Amount</Th>
                <Th color={"gray.600"}>Admin Remarks</Th>
                <Th color={"gray.600"}>Created At</Th>
                <Th color={"gray.600"}>Updated At</Th>
              </Tr>
            </Thead>
            <Tbody fontSize={"xs"}>
              {data?.map((item: any, key) => (
                <Tr key={key}>
                  <Td borderBottom={0}>{item?.reference_id}</Td>
                  <Td borderBottom={0}>{item?.admin?.name}</Td>
                  <Td borderBottom={0}>
                    ₹{Number(item?.debit_amount)?.toLocaleString("en-IN") ?? 0}
                  </Td>
                  <Td borderBottom={0}>
                    ₹{Number(item?.credit_amount)?.toLocaleString("en-IN") ?? 0}
                  </Td>
                  <Td>{item?.admin_remarks}</Td>
                  <Td borderBottom={0}>
                    {new Date(item?.created_at)?.toLocaleString("en-GB")}
                  </Td>
                  <Td borderBottom={0}>
                    {new Date(item?.updated_at)?.toLocaleString("en-GB")}
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