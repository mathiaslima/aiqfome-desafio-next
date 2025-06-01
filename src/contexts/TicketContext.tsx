"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TTicket } from "@/models/ticket";
import { removeCurrencySymbol } from "@/utils/format";

const STORAGE_KEY = "tickets";

type TicketContextType = {
  tickets: TTicket[];
  setTickets: React.Dispatch<React.SetStateAction<TTicket[]>>;
  ticket: TTicket;
  setTicket: React.Dispatch<React.SetStateAction<TTicket>>;
  sum: number;
};

const defaultTicket: TTicket = {
  id: "",
  restaurantId: "",
  productId: "",
  amount: 0,
  price: "",
  name: "",
  size: {} as TTicket["size"],
  anythingElse: [],
  drinks: [],
  extraSides: [],
  cutlery: {} as TTicket["cutlery"],
  info: "",
};

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export function TicketProvider({ children }: { children: React.ReactNode }) {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  const [sum, setSum] = useState<number>(0.0);

  const [ticket, setTicket] = useState<TTicket>(defaultTicket);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (ticket.amount >= 1) {
      const updated = tickets.filter((t) => t.id !== ticket.id);

      const sortedTickets = [...updated, ticket].sort((a, b) =>
        a.id.localeCompare(b.id)
      );
      setTickets(sortedTickets);
    } else {
      const updated = tickets.filter((t) => t.id !== ticket.id);
      setTickets(updated);
    }
  }, [ticket]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    let sumAll = 0;
    tickets.forEach((ticket) => {
      const priceTicket = !!ticket.size?.price
        ? removeCurrencySymbol(ticket.size.price as string)
        : removeCurrencySymbol(ticket.price);

      sumAll += priceTicket * ticket.amount;

      if (ticket.drinks.length > 0) {
        ticket.drinks.forEach((drink) => {
          if (drink.price) {
            const priceDrink = removeCurrencySymbol(drink.price as string);
            sumAll += priceDrink * (drink.amount || 1) * ticket.amount;
          }
        });
      }

      if (ticket.extraSides.length > 0) {
        ticket.extraSides.forEach((extra) => {
          if (extra.price) {
            const priceExtra = removeCurrencySymbol(extra.price as string);
            sumAll += priceExtra * ticket.amount;
          }
        });
      }

      if (ticket.cutlery && ticket.cutlery.price) {
        const priceCutlery = removeCurrencySymbol(
          ticket.cutlery.price as string
        );
        sumAll += priceCutlery * ticket.amount;
      }

      if (ticket.anythingElse.length > 0) {
        ticket.anythingElse.forEach((anything) => {
          if (anything.price) {
            const priceAnything = removeCurrencySymbol(
              anything.price as string
            );
            sumAll += priceAnything * ticket.amount;
          }
        });
      }
    });

    setSum(Number(sumAll.toFixed(2)));
  }, [tickets]);

  return (
    <TicketContext.Provider
      value={{ tickets, setTickets, ticket, setTicket, sum }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return context;
}
