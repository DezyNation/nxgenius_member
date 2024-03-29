"use client";
import CustomModal from "@/components/misc/CustomModal";
import Pagination from "@/components/misc/Pagination";
import { API } from "@/lib/api";
import useAuth from "@/lib/hooks/useAuth";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import {
  Avatar,
  HStack,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface RecentFundRequestsProps {
  showPagination?: boolean;
}

const RecentFundRequests = ({
  showPagination = true,
}: RecentFundRequestsProps) => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      getMyRequests();
    }
  }, []);

  async function getMyRequests(url?: string) {
    try {
      const res = await API.fundRequests(url);
      setData(res?.data);
      setPages(res?.links);
    } catch (error) {
      handleError({ title: "Couldn't fetch fund requests", error: error });
    }
  }

  return (
    <>
      {showPagination ? (
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <Pagination
            pages={pages}
            onClick={(value: string) => getMyRequests(value)}
          />
        </HStack>
      ) : null}
      <TableContainer maxH={"sm"} overflowY={"scroll"}>
        <Table size={"md"} variant={"striped"}>
          <Thead>
            <Tr>
              <Th color={"gray.600"}>ID</Th>
              <Th color={"gray.600"}>Amount</Th>
              <Th color={"gray.600"}>Admin</Th>
              <Th color={"gray.600"}>Req. At</Th>
              <Th color={"gray.600"}>Status</Th>
            </Tr>
          </Thead>
          <Tbody fontSize={"xs"}>
            {data?.map((item: any, key) => (
              <Tr key={key}>
                <Td borderBottom={0}>{item?.id}</Td>
                <Td borderBottom={0}>
                  ₹{Number(item?.amount)?.toLocaleString("en-IN") ?? 0}
                </Td>
                <Td>
                  {item?.status != "pending" && item?.approved_by?.id ? (
                    <HStack alignItems={"flex-start"}>
                      <Avatar size={"xs"} name={item?.approved_by?.name} />
                      <Text>{item?.approved_by?.name}</Text>
                    </HStack>
                  ) : null}
                </Td>
                <Td borderBottom={0}>
                  {new Date(item?.created_at)?.toLocaleString("en-GB")}
                </Td>
                <Td borderBottom={0}>
                  <HStack gap={4} w={"full"} justifyContent={"center"}>
                    {item?.status == "approved" ? (
                      <IconButton
                        aria-label="approved"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaCheck />}
                        colorScheme="whatsapp"
                      />
                    ) : item?.status == "rejected" ? (
                      <IconButton
                        aria-label="rejected"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaXmark />}
                        colorScheme="red"
                      />
                    ) : item?.status == "pending" ? (
                      <IconButton
                        aria-label="pending"
                        size={"xs"}
                        rounded={"full"}
                        icon={<FaClock />}
                        colorScheme="twitter"
                      />
                    ) : null}
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {showPagination ? (
        <HStack
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={8}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          <Pagination
            pages={pages}
            onClick={(value: string) => getMyRequests(value)}
          />
        </HStack>
      ) : null}
    </>
  );
};

export default RecentFundRequests;
