"use client";
import { API } from "@/lib/api";
import useErrorHandler from "@/lib/hooks/useErrorHandler";
import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";
import React, { FormEvent, useEffect, useRef, useState } from "react";

interface SelectPlanProps {
  placeholder?: string;
  onChange: SelectProps["onChange"];
  name?: SelectProps["name"];
  variant?: "floating" | "none";
}

const SelectPlan = ({
  placeholder,
  onChange,
  name,
  variant,
}: SelectPlanProps) => {
  const ref = useRef(true);
  const { handleError } = useErrorHandler();

  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      fetchData();
    }
  }, []);

  async function fetchData() {
    try {
      const res = await API.adminGetPlans();
      setData(res.data);
    } catch (error) {
      handleError({
        title: "Could not get plans",
        error: error,
      });
    }
  }

  return (
    <>
      <FormControl maxW={["full", "xs"]} variant={variant || "floating"}>
        {variant == "none" ? <FormLabel>Select Plan</FormLabel> : null}
        <Select
          name={name}
          placeholder={placeholder || "Please select"}
          onChange={onChange}
        >
          {data?.map((item: any, key: number) => (
            <option value={item?.id} key={key}>
              {item?.name} - {item?.account_number}
            </option>
          ))}
        </Select>
        {variant == "floating" ? <FormLabel>Select Plan</FormLabel> : null}
      </FormControl>
    </>
  );
};

export default SelectPlan;
