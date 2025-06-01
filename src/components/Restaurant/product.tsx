import { product } from "@/models/menu";
import { formatStringToRoute } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";

export default function Product({
  items,
  restaurantId,
  productId,
}: {
  items: product["items"];
  restaurantId: string;
  productId: string;
}) {
  return (
    <section className="flex flex-col bg-neutrals-0 pl-6 pr-4 pb-6 gap-4 ">
      {items.map(
        (
          { name, price, description, originalPrice, vegan, priceFrom, hot },
          index
        ) => (
          <Link
            key={name + index}
            href={`${restaurantId}/product/${productId}/request/${formatStringToRoute(
              name + index
            )}`}
          >
            <section className="flex flex-row items-center justify-between cursor-pointer hover:bg-neutrals-50 transition-colors duration-200 ">
              <div className="flex flex-col pr-1 ">
                <span className="text-neutrals-900 text-sm font-semibold flex flexp-row items-center gap-1">
                  {name}{" "}
                  {vegan && (
                    <Image
                      src="/icons/cardapio-vegan.svg"
                      width={16}
                      height={16}
                      alt="icone de vegano"
                    />
                  )}
                  {hot && (
                    <Image
                      src="/icons/hot.svg"
                      width={13}
                      height={13}
                      alt="icone de vegano"
                    />
                  )}
                </span>
                <span className="text-neutrals-500 text-xs font-normal line-clamp-2 ">
                  {description}
                </span>
              </div>

              <div className="flex flex-col  items-end">
                {originalPrice ? (
                  <>
                    <span className="text-xs text-neutrals-500 line-through">
                      {originalPrice}
                    </span>
                    <span className="text-sm font-bold text-green-500 flex flexp-row items-center gap-1 text-nowrap">
                      <Image
                        src="/icons/dolar.svg"
                        width={16}
                        height={16}
                        alt="icone de dolar"
                      />
                      {price}
                    </span>
                  </>
                ) : (
                  <>
                    {priceFrom && (
                      <span className="text-xs text-neutrals-500 text-nowrap">
                        a partir de
                      </span>
                    )}
                    <span className="text-sm font-bold text-purple-500 flex flexp-row items-center gap-1 text-nowrap">
                      {price}
                    </span>
                  </>
                )}
              </div>
            </section>
          </Link>
        )
      )}
    </section>
  );
}
