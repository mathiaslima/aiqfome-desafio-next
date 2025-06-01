"use client";

import { useTicket } from "@/contexts/TicketContext";
import { useRestaurants } from "@/controllers/useRestaurants";
import { TRestaurant } from "@/models/restaurant";
import Image from "next/image";

export default function HeaderSumary() {
  const { findRestaurantById } = useRestaurants();
  const { tickets } = useTicket();

  if (tickets.length === 0) {
    window.location.href = "/";
    return null; // ou retornar um componente de carregamento
  }

  const { name, image } = findRestaurantById(
    tickets[0].restaurantId
  ) as TRestaurant;
  return (
    <div className="flex flex-row items-center gap-2 p-4">
      <Image
        src={image}
        alt={`"Imagem do restaurante ${name}`}
        height={32}
        width={32}
        className="rounded-md"
      />
      <div className="flex flex-col ">
        <span className="text-neutrals-500 font-bold text-sm">
          {" "}
          seus itens em
        </span>
        <span className="text-neutrals-900 font-bold text-base">{name}</span>
      </div>
    </div>
  );
}
