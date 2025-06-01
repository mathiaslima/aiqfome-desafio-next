import { TRestaurant } from "./restaurant";

export type TMenu = {
  restaurantId: TRestaurant["id"];
  products: product[];
};

export type product = {
  id: string;
  name: string;
  highPrice?: boolean;
  description?: string;
  items: Item[];
};

type Item = {
  name: string;
  description: string;
  price: string;
  vegan?: boolean;
  hot?: boolean;
  priceFrom?: boolean;
  originalPrice?: string;
  discount?: boolean;
  image?: string;
};
