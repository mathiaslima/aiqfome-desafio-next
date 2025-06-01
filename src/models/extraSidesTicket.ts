export type extraSidesTicket = {
  sizes: Item[];
  anythingElse: side;
  drinks: Item[];
  extraSides: side;
  cutlery: Item[];
};

type side = {
  max: number;
  items: Item[];
};

export type Item = {
  name: string;
  id: string;
  price?: string;
  originalPrice?: string;
  discount?: boolean;
};
