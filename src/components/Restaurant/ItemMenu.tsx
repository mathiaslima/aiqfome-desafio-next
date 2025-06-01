import { product } from "@/models/menu";
import Image from "next/image";
import { useState } from "react";
import Product from "./product";
import { useParams } from "next/navigation";

export default function ItemMenu({
  name,
  description,
  highPrice,
  items,
  id,
}: product) {
  const [showItems, setShowItems] = useState(false);

  const params = useParams();

  return (
    <details className="flex flex-col bg-neutrals-0  ">
      <summary
        onClick={() => setShowItems(!showItems)}
        className="flex flex-col bg-neutrals-0 px-4 py-4 cursor-pointer hover:bg-neutrals-50 transition-colors duration-200"
      >
        <div className="flex flex-row items-center justify-between ">
          <span className="text-base font-bold text-neutrals-900 flex flexp-row items-center gap-2">
            {name}
            {highPrice && (
              <Image
                src="/icons/dolar.svg"
                width={18}
                height={18}
                alt="icone de dolar"
              />
            )}
          </span>
          <Image
            src={
              showItems ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"
            }
            width={14}
            height={18}
            alt="icone de seta para baixo"
          />
        </div>

        {description && (
          <span className="text-xs text-neutrals-500 pr-2">{description}</span>
        )}
      </summary>
      <Product
        items={items}
        productId={id}
        restaurantId={params.restaurantId as string}
      />
    </details>
  );
}
