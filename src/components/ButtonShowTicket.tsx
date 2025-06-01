"use client";

import { useTicket } from "@/contexts/TicketContext";
import Link from "next/link";

export default function ButtonShowTicket() {
  const { tickets } = useTicket();
  if (tickets.length === 0) return null;
  return (
    <section className="flex flex-col items-center justify-center py-4 px-6 bg-neutrals-100 fixed z-50 bottom-0 left-0 max-w-screen-sm w-full mx-auto left-1/2 translate-x-[-50%]">
      <Link href="/sumary" className=" w-full">
        <button className="bg-purple-500 text-neutrals-0 px-2 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 w-full cursor-pointer">
          ver ticket
        </button>
      </Link>
    </section>
  );
}
