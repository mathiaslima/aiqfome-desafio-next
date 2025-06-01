import { Item } from "@/models/extraSidesTicket";
import Image from "next/image";

type props = {
  options: Item[];
  title: string;
  subtitle: string;
  mandatory: boolean;
  type: string;
  max?: number;
  request: "size" | "cutlery" | "extraSides" | "anythingElse";
  onChange: (value: Item) => void;
};

export default function RequestSelect({
  options,
  title,
  subtitle,
  mandatory,
  type,
  request,
  onChange,
}: props) {
  return (
    <section className="flex flex-col items-center justify-between p-4 bg-neutrals-0">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col ">
          <span className="text-neutrals-700 font-bold text-base">{title}</span>
          <span className="text-neutrals-500 font-semibold text-sm">
            {subtitle}
          </span>
        </div>
        {mandatory && (
          <div className="flex flex-col ">
            <span className="bg-neutrals-700 px-2 py-2 rounded-lg text-neutrals-0 text-xs">
              obrigatório
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col w-full gap-4 mt-4">
        {!!options &&
          options.map((option) => (
            <div
              key={option.id + option.name}
              className="flex flex-row items-center justify-between w-full"
            >
              <label className="flex flex-row items-center gap-2 text-neutrals-500 text-sm">
                <input
                  type={type}
                  onChange={() => onChange(option)}
                  name={request}
                  className=" w-4 h-4 border-1 border-neutrals-400 rounded-full checked:border-neutrals-500 checked:bg-purple-500 "
                  value={option.name}
                />
                {option.discount && (
                  <Image
                    src="/icons/dolar.svg"
                    width={18}
                    height={18}
                    alt="icone de dolar"
                  />
                )}
                {option.name}
              </label>

              {option.price && (
                <>
                  {option.discount ? (
                    <span className="text-green-500 text-sm font-bold">
                      {option.discount && (
                        <span className="text-neutrals-500 text-xs font-bold">
                          {`de ${option.originalPrice} por `}
                        </span>
                      )}
                      {option.price}
                    </span>
                  ) : (
                    <span className="text-purple-500 text-sm font-bold">
                      {option.price}
                    </span>
                  )}
                </>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
