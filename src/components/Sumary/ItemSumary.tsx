import { TTicket } from "@/models/ticket";
import NumberSteppe from "../NumberSteppe";
import Image from "next/image";
import { useTicket } from "@/contexts/TicketContext";

export default function ItemSumary({
  name,
  price,
  amount,
  size,
  extraSides,
  drinks,
  anythingElse,
  info,
  cutlery,
  ...rest
}: TTicket) {
  const { setTicket } = useTicket();

  return (
    <section className="flex flex-col  p-4 bg-neutrals-0 gap-2">
      <div className="flex flex-row items-center justify-between w-full">
        <span className="text-neutrals-900 font-bold text-sm">{name}</span>
        <span className="text-purple-500 font-bold text-sm">
          {!!size.price ? size.price : price}
        </span>
      </div>

      <div className="flex flex-row items-center justify-end w-full gap-4">
        <Image
          src="/icons/pencil.svg"
          width={18}
          height={18}
          alt="icone de dolar"
        />{" "}
        <span className="text-teal-400 font-bold text-sm">editar</span>{" "}
        <NumberSteppe
          value={amount}
          onChange={(value) => {
            setTicket({
              ...rest,
              name,
              price,
              size,
              extraSides,
              drinks,
              anythingElse,
              info,
              cutlery,
              amount: value,
            });
          }}
        />
      </div>

      {size.name && (
        <div className="flex flex-col gap-1">
          <span className="text-neutrals-500 font-bold text-xs">• tamanho</span>
          <span className="text-neutrals-500 font-semibold text-xs">
            {size.name}
          </span>
        </div>
      )}
      {!!drinks.length && (
        <div className="flex flex-col gap-1">
          <span className="text-neutrals-500 font-bold text-xs">
            • vai querer bebida?
          </span>
          {drinks.map((drink) => (
            <span
              className="text-neutrals-500 font-semibold text-xs"
              key={drink.id}
            >
              {drink.name}{" "}
              <span className="text-teal-400 font-bold text-xs">
                +{drink.price}x{drink.amount}
              </span>
            </span>
          ))}
          {}
        </div>
      )}
      {!!extraSides.length && (
        <div className="flex flex-col gap-1">
          <span className="text-neutrals-500 font-bold text-xs">
            • acompanhamentos
          </span>
          {extraSides.map((side) => (
            <span
              className="text-neutrals-500 font-semibold text-xs"
              key={side.id}
            >
              {side.name}{" "}
              {side.price && (
                <span className="text-teal-400 font-bold text-xs">
                  +{side.price}
                </span>
              )}
            </span>
          ))}
          {}
        </div>
      )}
      {!!anythingElse.length && (
        <div className="flex flex-col gap-1">
          <span className="text-neutrals-500 font-bold text-xs">
            • mais alguma coisa?
          </span>
          {anythingElse.map((item) => (
            <span
              className="text-neutrals-500 font-semibold text-xs"
              key={item.id}
            >
              {item.name}{" "}
              {item.price && (
                <span className="text-teal-400 font-bold text-xs">
                  +{item.price}
                </span>
              )}
            </span>
          ))}
          {}
        </div>
      )}
      {cutlery.name && (
        <div className="flex flex-col gap-1">
          <span className="text-neutrals-500 font-bold text-xs">
            • precisa de talher?
          </span>
          <span className="text-neutrals-500 font-semibold text-xs">
            {cutlery.name}{" "}
            {cutlery.price && (
              <span className="text-teal-400 font-bold text-xs">
                +{cutlery.price}
              </span>
            )}
          </span>
        </div>
      )}

      {info && (
        <div className="bg-neutrals-50 p-2 rounded-lg text-neutrals-700 text-xs">
          <span className="text-neutrals-500 font-bold text-xs">
            observação:
          </span>{" "}
          {info}
        </div>
      )}
    </section>
  );
}
