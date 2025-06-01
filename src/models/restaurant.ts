type Details = {
  time: string;
  distance: string;
  dateClosed: string;
  amountFreeDelivery: string;
  minOrder: string;
};

export type TRestaurant = {
  id: string;
  name: string;
  deliveryFee: string;
  rating: number;
  image: string;
  category: string;
  isOpen: boolean;
  details: Details;
};
