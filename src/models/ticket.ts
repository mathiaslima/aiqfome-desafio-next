import { Item } from "./extraSidesTicket";

export type TTicket = {
  id: string;
  restaurantId: string;
  productId: string;
  amount: number;
  price: string;
  name: string;
  size: Item;
  anythingElse: Item[];
  drinks: Drink[];
  extraSides: Item[];
  cutlery: Item;
  info: string;
};

export interface Drink extends Item {
  amount?: number;
}
