"use client";

import { useTicket } from "@/contexts/TicketContext";
import ItemSumary from "./ItemSumary";

export default function ListSumary() {
  const { tickets } = useTicket();

  return (
    <section className="flex flex-col gap-1 bg-neutrals-100">
      {tickets.map((ticket) => (
        <ItemSumary key={ticket.id} {...ticket} />
      ))}
    </section>
  );
}
