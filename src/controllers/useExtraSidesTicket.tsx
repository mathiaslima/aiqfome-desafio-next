"use client";

import { useEffect, useState } from "react";

import extraSidesTicketData from "@/data/extraSidesTicket.json";

import { extraSidesTicket } from "@/models/extraSidesTicket";

export function useExtraSidesTicket() {
  const [options, setOptions] = useState<extraSidesTicket>(
    {} as extraSidesTicket
  );

  useEffect(() => {
    setOptions(extraSidesTicketData);
  }, []);

  return {
    options,
  };
}
