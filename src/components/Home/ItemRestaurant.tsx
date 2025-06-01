import { TRestaurant } from "@/models/restaurant";
import Image from "next/image";

export default function ItemRestaurant({
  image,
  name,
  rating,
  deliveryFee,
  isOpen,
}: TRestaurant) {
  return (
    <section className="flex flex-row items-center gap-4 pr-2 rounded-lg bg-neutrals-50 hover:bg-neutrals-100 transition-colors duration-200">
      {isOpen ? (
        <Image
          src={image}
          alt={`"Imagem do restaurante ${name}`}
          height={72}
          width={72}
          className="rounded-l-lg"
        />
      ) : (
        <Image
          src={image}
          alt={`"Imagem do restaurante ${name}`}
          height={72}
          width={72}
          className="rounded-l-lg opacity-50"
        />
      )}
      <section className="flex flex-col gap-2">
        <span className="text-neutrals-700 font-bold text-base">{name}</span>
        <div className="flex flexp-row items-center gap-2">
          {deliveryFee === "free" ? (
            <span className="text-teal-600 text-sm font-bold text-base flex flexp-row items-center gap-1">
              <Image
                src="/icons/moto.svg"
                width={24}
                height={24}
                alt="icone de seta para direita"
              />
              {deliveryFee}
            </span>
          ) : (
            <span className="text-purple-500 text-sm font-bold text-base flex flexp-row items-center gap-1">
              <Image
                src="/icons/delivery.svg"
                width={24}
                height={24}
                alt="icone de seta para direita"
              />
              {deliveryFee}
            </span>
          )}

          <span className="text-neutrals-500 text-sm font-bold text-base flex flexp-row items-center gap-1">
            <Image
              src="/icons/star.svg"
              width={24}
              height={24}
              alt="icone de seta para direita"
            />
            {rating}
          </span>
        </div>
      </section>
    </section>
  );
}
