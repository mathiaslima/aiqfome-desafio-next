"use client";

import { useEffect, useState } from "react";
import { TMenu } from "@/models/menu";
import menusData from "@/data/menus.json";
import { formatStringToRoute } from "@/utils/format";

export function useMenus() {
  const [, setMenu] = useState<TMenu[]>([]);

  const findMenuByIdRestaurant = (id: string) => {
    return menusData.find((menu) => menu.restaurantId === id);
  };

  const findProductByIdRestaurantByIdProductByNameByIndex = (
    restaurantId: string,
    productId: string,
    nameIndex: string
  ) => {
    const menu = menusData.find(
      (menu) => menu.restaurantId === restaurantId
    ) as TMenu;
    const product = menu.products.find(
      (product) => product.id === productId
    ) as TMenu["products"][number];

    console.log(nameIndex, "<<<< nameIndex");

    return product?.items.find(
      (item, index) => formatStringToRoute(item.name + index) === nameIndex
    ) as (typeof product.items)[0];
  };

  useEffect(() => {
    setMenu(menusData);
  }, []);

  return {
    findMenuByIdRestaurant,
    findProductByIdRestaurantByIdProductByNameByIndex,
  };
}
