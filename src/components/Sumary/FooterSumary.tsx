"use client";
import { useTicket } from "@/contexts/TicketContext";
import { formatCurrency } from "@/utils/format";

export default function FooterSumary() {
  const { sum } = useTicket();

  return (
    <section className="flex flex-row items-center shadow-xl justify-between  py-4 px-6 bg-neutrals-0 fixed z-100 bottom-0 left-0 border-t border-gray-300 drop-shadow-md w-full max-w-screen-sm  mx-auto left-1/2 translate-x-[-50%]">
      <div className="flex flex-col">
        <span className="text-neutrals-900 font-bold text-sm">subtotal</span>
        <span className="text-xl text-purple-500 font-bold">
          {formatCurrency(sum)}
        </span>
      </div>

      <button className="bg-purple-500 text-neutrals-0 px-10 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 cursor-pointer ">
        ir para pagamento
      </button>
    </section>
  );
}
