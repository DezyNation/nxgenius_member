"use client";
import {
  Avatar,
  HStack,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const RecentFundRequests = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
    { id: 1, name: "John Doe", amount: "50" },
  ]);
  return (
    <>
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr>
              <Th color={"gray.600"}>ID</Th>
              <Th color={"gray.600"}>Amount</Th>
              <Th color={"gray.600"}>Admin</Th>
              <Th color={"gray.600"}>Status</Th>
              <Th color={"gray.600"}>Requested At</Th>
              <Th color={"gray.600"}>Updated At</Th>
              <Th color={"gray.600"}>Member Remarks</Th>
              <Th color={"gray.600"}>Admin Remarks</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item, key) => (
              <Tr key={key}>
                <Td borderBottom={0}>FND234</Td>
                <Td borderBottom={0}>
                  ₹{Number(50000)?.toLocaleString("en-IN") ?? 0}
                </Td>
                <Td>
                  <HStack alignItems={"flex-start"}>
                    <Avatar size={"xs"} name="Sangam Kumar" />
                    <Text>Sangam Kumar</Text>
                  </HStack>
                </Td>
                <Td borderBottom={0}>
                  <HStack gap={4} w={"full"} justifyContent={"center"}>
                    <IconButton
                      aria-label="approve"
                      size={"xs"}
                      rounded={"full"}
                      icon={<FaCheck />}
                      colorScheme="whatsapp"
                    />
                    {/* <IconButton
                      aria-label="reject"
                      size={"xs"}
                      rounded={"full"}
                      icon={<FaXmark />}
                      colorScheme="red"
                    /> */}
                  </HStack>
                </Td>
                <Td borderBottom={0}>13-02-2024 19:34</Td>
                <Td borderBottom={0}>13-02-2024 19:54</Td>
                <Td borderBottom={0}>-</Td>
                <Td borderBottom={0}>-</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecentFundRequests;
