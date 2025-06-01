"use client";

import { useEffect, useState } from "react";
import { TRestaurant } from "@/models/restaurant";
import restaurantData from "@/data/restaurants.json";

export function useRestaurants() {
  const [restaurantsClosed, setRestaurantsClosed] = useState<TRestaurant[]>([]);
  const [restaurantsOpen, setRestaurantsOpen] = useState<TRestaurant[]>([]);

  const onSearch = (searchTerm: string) => {
    const filteredOpen = restaurantData.filter(
      (restaurant) =>
        restaurant.isOpen &&
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredClosed = restaurantData.filter(
      (restaurant) =>
        !restaurant.isOpen &&
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setRestaurantsOpen(filteredOpen);
    setRestaurantsClosed(filteredClosed);
  };

  const findRestaurantById = (id: string) => {
    return restaurantData.find((restaurant) => restaurant.id === id);
  };

  useEffect(() => {
    const open = restaurantData.filter((restaurant) => restaurant.isOpen);
    const closed = restaurantData.filter((restaurant) => !restaurant.isOpen);

    setRestaurantsOpen(open);
    setRestaurantsClosed(closed);
  }, []);

  return { restaurantsClosed, restaurantsOpen, onSearch, findRestaurantById };
}
