"use client";

import { useMenus } from "@/controllers/useMenus";
import Image from "next/image";
import { useParams } from "next/navigation";

type props = {
  nameRequest: string;
  productId: string;
  restaurantId: string;
};

export default function CardRequest() {
  const params = useParams() as props;
  const { nameRequest, restaurantId, productId } = params;
  const { findProductByIdRestaurantByIdProductByNameByIndex } = useMenus();

  const request = findProductByIdRestaurantByIdProductByNameByIndex(
    restaurantId,
    productId,
    nameRequest
  );
  return (
    <section className="flex flex-col gap-2">
      <div className="relative w-full h-[195px]">
        <Image
          src="/images/request.png"
          fill
          className="object-cover"
          alt="imagem do pedido"
        />
      </div>
      <div className="flex flex-col px-4 gap-1">
        <span className="text-xl text-neutrals-700 font-bold flex flex-row items-center gap-2">
          {request?.name}
          {request?.vegan && (
            <Image
              src="/icons/cardapio-vegan.svg"
              width={20}
              height={20}
              alt="icone de vegano"
            />
          )}
          {request?.hot && (
            <Image
              src="/icons/hot.svg"
              width={18}
              height={18}
              alt="icone de vegano"
            />
          )}
        </span>
        <span className="text-lg text-purple-500 font-extrabold">
          {request?.priceFrom && (
            <span className="text-sm text-neutrals-500 font-extrabold">
              a partir de{" "}
            </span>
          )}{" "}
          {request?.price}
        </span>
        <p className="text-sm text-neutrals-500 font-semibold">
          {request?.description}
        </p>
      </div>
    </section>
  );
}
