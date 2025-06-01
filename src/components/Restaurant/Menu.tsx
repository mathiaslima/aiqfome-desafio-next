"use client";

import { TMenu } from "@/models/menu";

import { useMenus } from "@/controllers/useMenus";
import ItemMenu from "./ItemMenu";

export default function Menu({ restaurantId }: { restaurantId: string }) {
  const { findMenuByIdRestaurant } = useMenus();

  const { products } = findMenuByIdRestaurant(restaurantId as string) as TMenu;
  return (
    <div>
      <section className="flex flex-col gap-1 bg-neutrals-100 w-full">
        {products.map((product) => (
          <ItemMenu key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}
