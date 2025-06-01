import CardRequest from "@/components/Request/CardRequest";
import PlaceOrder from "@/components/Request/PlaceOrder";

export default async function RequestPage() {
  return (
    <div className="min-h-full">
      <CardRequest />
      <PlaceOrder />
    </div>
  );
}
