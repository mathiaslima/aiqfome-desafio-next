"use client";

import { useRestaurants } from "@/controllers/useRestaurants";
import ItemRestaurant from "./ItemRestaurant";
import Search from "./Search";
import Link from "next/link";
import Image from "next/image";

export default function ListRestaurants() {
  const { restaurantsOpen, restaurantsClosed, onSearch } = useRestaurants();
  return (
    <div>
      <Search onChange={onSearch} />
      <div className="relative w-full h-[130px]">
        <Image
          src="/images/promo.png"
          fill
          className="object-cover"
          alt="imagem do pedido"
        />
      </div>
      <section className="flex flex-col gap-4 pt-6 px-4 pb-6 w-full">
        <h2 className="text-purple-500 font-bold text-xl">abertos</h2>
        {restaurantsOpen.map((restaurant) => (
          <Link key={restaurant.id} href={`restaurant/${restaurant.id}`}>
            <ItemRestaurant {...restaurant} />
          </Link>
        ))}

        <h2 className="text-purple-500 font-bold text-xl">fechados</h2>
        {restaurantsClosed.map((restaurant) => (
          <ItemRestaurant key={restaurant.id} {...restaurant} />
        ))}
      </section>
    </div>
  );
}
