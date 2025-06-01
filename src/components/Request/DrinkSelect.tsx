import { extraSidesTicket } from "@/models/extraSidesTicket";
import NumberSteppe from "../NumberSteppe";
import { Drink } from "@/models/ticket";

type props = {
  drinks: extraSidesTicket["drinks"];
  onChange: (value: Drink) => void;
};

export default function DrinkSelect({ drinks, onChange }: props) {
  return (
    <section className="flex flex-col items-center justify-between p-4 bg-neutrals-0">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col ">
          <span className="text-neutrals-700 font-bold text-base">
            vai querer bebida?
          </span>
          <span className="text-neutrals-500 font-semibold text-sm">
            escolha quantos quiser
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 mt-4">
        {!!drinks &&
          drinks.map((drink) => (
            <div
              key={drink.id}
              className="flex flex-row items-center justify-between w-full"
            >
              <NumberSteppe
                name={drink.name}
                onChange={(value) => onChange({ ...drink, amount: value })}
              />

              <span className="text-purple-500 text-sm font-bold">
                +{drink.price}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
}
