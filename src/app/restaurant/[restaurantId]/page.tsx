import DetailsRestaurant from "@/components/Restaurant/DetailsRestaurant";
import Menu from "@/components/Restaurant/Menu";

type props = {
  params: {
    restaurantId: string;
  };
};

export default function RestaurantPage({ params }: props) {
  return (
    <div className="min-h-full">
      <DetailsRestaurant id={params.restaurantId} />
      <Menu restaurantId={params.restaurantId} />
    </div>
  );
}
