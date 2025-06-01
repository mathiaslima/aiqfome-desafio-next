"use client";

import { useExtraSidesTicket } from "@/controllers/useExtraSidesTicket";
import { useMenus } from "@/controllers/useMenus";
import Button from "../Button";
import { useParams } from "next/navigation";
import DrinkSelect from "./DrinkSelect";
import RequestSelect from "./RadioSelect";

import NumberSteppe from "../NumberSteppe";
import { generanteUUID } from "@/utils/generate";
import { useTicket } from "@/contexts/TicketContext";
import { Item } from "@/models/extraSidesTicket";
import { Drink } from "@/models/ticket";
import { useEffect } from "react";

type props = {
  nameRequest: string;
  productId: string;
  restaurantId: string;
};

export default function PlaceOrder() {
  const params = useParams() as props;
  const { nameRequest, restaurantId, productId } = params;
  const { findProductByIdRestaurantByIdProductByNameByIndex } = useMenus();

  const request = findProductByIdRestaurantByIdProductByNameByIndex(
    restaurantId,
    productId,
    nameRequest
  );

  const { options } = useExtraSidesTicket();
  const { ticket, setTicket } = useTicket();
  const { sizes, cutlery, extraSides, drinks, anythingElse } = options;

  const setInitialTicket = () => {
    setTicket({
      ...ticket,
      amount: 1,
      restaurantId,
      productId,
      id: generanteUUID(),
      name: request.name,
      price: request.price,
    });
  };

  const setExtraSides = (option: Item) => {
    const list = ticket.extraSides;

    if (list.find((item) => item.id === option.id)) {
      const updatedList = list.filter((item) => item.id !== option.id);
      setTicket({ ...ticket, extraSides: updatedList });
    } else {
      setTicket({ ...ticket, extraSides: [...list, option] });
    }
  };

  const setAnythingElse = (option: Item) => {
    const list = ticket.anythingElse;

    if (list.find((item) => item.id === option.id)) {
      const updatedList = list.filter((item) => item.id !== option.id);
      setTicket({ ...ticket, anythingElse: updatedList });
    } else {
      setTicket({ ...ticket, anythingElse: [...list, option] });
    }
  };

  const setDrinks = (option: Drink) => {
    const list = ticket.drinks;

    if (list.find((item) => item.id === option.id)) {
      const updatedList = list.map((item) =>
        item.id === option.id
          ? { ...item, amount: (item.amount || 1) + 1 }
          : item
      );
      setTicket({ ...ticket, drinks: updatedList });
    } else {
      setTicket({ ...ticket, drinks: [...list, option] });
    }
  };

  useEffect(() => {
    return () => {
      // Reset the ticket when the component unmounts
      setTicket({
        id: "",
        restaurantId: "",
        productId: "",
        amount: 0,
        price: "",
        name: "",
        size: {} as Item,
        anythingElse: [],
        drinks: [],
        extraSides: [],
        cutlery: {} as Item,
        info: "",
      });
    };
  }, [setTicket]);

  return (
    <section className=" bg-neutrals-100 flex flex-col gap-1 ">
      <section className="flex flex-row items-center justify-between p-4 bg-neutrals-0">
        <div className="flex flex-col ">
          <span className="text-neutrals-700 font-bold text-base">
            quantos?
          </span>
          <span className="text-neutrals-500 font-semibold text-sm">
            total{" "}
            <span className="text-neutrals-700 font-bold text-sm">
              {request?.price}
            </span>
          </span>
        </div>
        <div className="flex flex-col ">
          {ticket.amount === 0 && (
            <Button
              onClick={setInitialTicket}
              className="bg-neutrals-500 px-4 py-2 rounded-lg hover:bg-neutrals-200 transition-colors duration-200 cursor-pointer"
            >
              adicionar
            </Button>
          )}
          {ticket.amount > 0 && (
            <NumberSteppe
              value={ticket.amount}
              onChange={(value) => {
                console.log(value);
                setTicket({
                  ...ticket,
                  amount: value,
                });
              }}
            />
          )}
        </div>
      </section>
      {/* Tamanho */}
      <RequestSelect
        title="qual o tamanho?"
        subtitle="escolha até 1"
        mandatory={true}
        type="radio"
        onChange={(option) => setTicket({ ...ticket, size: option })}
        options={sizes}
        request="size"
      />
      {/* Acompanhamentos */}
      <RequestSelect
        title="acompanhamentos"
        subtitle={`escolha de 1 a ${extraSides?.max}`}
        mandatory={true}
        type="checkbox"
        onChange={setExtraSides}
        options={extraSides?.items}
        request="extraSides"
      />

      {/* Bebida */}
      <DrinkSelect drinks={drinks} onChange={setDrinks} />
      {/* Talheres */}

      <RequestSelect
        title="precisa de talher?"
        subtitle="escolha até 1"
        mandatory={false}
        type="radio"
        onChange={(option) => setTicket({ ...ticket, cutlery: option })}
        options={cutlery}
        request="cutlery"
      />
      <RequestSelect
        title="mais alguma coisa?"
        subtitle={`escolha de 1 a ${anythingElse?.max}`}
        mandatory={false}
        type="checkbox"
        onChange={setAnythingElse}
        options={anythingElse?.items}
        request="anythingElse"
      />

      <div className="flex flex-col items-center justify-between p-4 bg-neutrals-0">
        <textarea
          rows={2}
          onChange={(event) =>
            setTicket({ ...ticket, info: event.target.value })
          }
          placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
          className="w-full  p-2 border border-neutrals-200  rounded-lg text-sm text-neutrals-500 text-semibold focus:outline-none focus:border-purple-500 "
        />
      </div>
    </section>
  );
}
