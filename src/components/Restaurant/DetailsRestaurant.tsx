"use client";

import { useRestaurants } from "@/controllers/useRestaurants";
import { TRestaurant } from "@/models/restaurant";
import Image from "next/image";

export default function DetailsRestaurant({ id }: { id: string }) {
  const { findRestaurantById } = useRestaurants();
  const { name, image, details, rating } = findRestaurantById(
    id as string
  ) as TRestaurant;

  const { minOrder, time, distance, amountFreeDelivery, dateClosed } = details;

  return (
    <header className="flex flex-col  gap-2 py-6 px-4 ">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={image}
          alt={`"Imagem do restaurante ${name}`}
          height={36}
          width={36}
          className="rounded-lg"
        />
        <span className="text-neutrals-900 font-extrabold text-xl">{name}</span>
      </div>
      <div className="flex flex-row items-center gap-2 justify-between">
        <div className="flex flex-row items-center gap-4 justify-between">
          <Image
            src="/icons/share.svg"
            width={32}
            height={32}
            alt="icone de compartilhar"
          />
          <Image
            src="/icons/heart.svg"
            width={32}
            height={32}
            alt="icone de compartilhar"
          />
        </div>

        <span className="text-teal-400 font-bold text-xs flex flexp-row items-center gap-1">
          mais infos ›
        </span>
      </div>

      <section className="flex flex-col gap-2">
        <div className="flex flexp-row items-center gap-2">
          <span className="text-purple-500 text-xs font-bold flex flexp-row items-center gap-1">
            <Image
              src="/icons/delivery.svg"
              width={24}
              height={24}
              alt="icone de seta para direita"
            />
            {`${minOrder} ›`}
            <span className="text-neutrals-500 text-xs font-bold  ">
              {`• hoje, ${time} • ${distance}`}
            </span>
          </span>
        </div>
      </section>
      <div>
        <span className="text-teal-600 font-bold text-xs px-1 py-2 bg-teal-50 rounded-sm">
          entrega grátis acima de {amountFreeDelivery}
        </span>
      </div>

      <div className="flex flex-row items-center gap-2">
        <span className="text-neutrals-500 text-xs font-bold  flex flexp-row items-center gap-1">
          <Image
            src="/icons/star.svg"
            width={16}
            height={16}
            alt="icone de seta para direita"
          />
          {rating} de 5 › •
          <span className="text-green-500 text-xs font-bold ">
            fecha às {dateClosed}
          </span>
        </span>
      </div>

      <span className="text-neutrals-500 text-xs font-bold ">
        pedido mínimo: {minOrder}
      </span>
    </header>
  );
}
