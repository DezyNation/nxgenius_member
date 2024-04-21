"use client";
import CustomButton from "@/components/misc/CustomButton";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Hide,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { API } from "../api";
import useErrorHandler from "./useErrorHandler";
import Receipt from "@/components/dashboard/misc/receipt/Receipt";
import Loader from "@/components/global/Loader";
import { ReceiptProps } from "../commons/types";

interface TransactionHandlerParams {
  type:
    | "payout"
    | "cw"
    | "ms"
    | "be"
    | "bbps"
    | "cms"
    | "dmt"
    | "lic"
    | "matm"
    | "wallet-transfer"
    | "fund-transfer";
  formData?: object | null;
}

const useAdminTransactionHandler = () => {
  const { handleError } = useErrorHandler();
  const Toast = useToast();

  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [receiptData, setReceiptData] = useState<ReceiptProps>();

  async function processTransaction({
    type,
    formData,
  }: TransactionHandlerParams) {
    setIsLoading(true);
    if (type == "fund-transfer") {
      try {
        const res = await API.adminDoFundTransfer({ ...formData, pin: pin });
        setIsLoading(false);
        Toast({
          status: "success",
          title: "Fund transferred successfully!",
        });
      } catch (error) {
        setIsLoading(false);
        handleError({
          title: "Error while processing payout",
          error: error,
        });
      }
    }
  }
  return {
    processTransaction,
    isLoading,
    receiptData,
    setPin,
    setReceiptData,
  };
};

export default useAdminTransactionHandler;
