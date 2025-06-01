import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ButtonShowTicket from "@/components/ButtonShowTicket";
import { TicketProvider } from "@/contexts/TicketContext";

export const metadata: Metadata = {
  title: "Ai q fome",
  description: "Ai que fome é um projeto de um desafio de programação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col max-w-screen-sm mx-auto bg-neutrals-0">
        <TicketProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <ButtonShowTicket />
          <Footer />
        </TicketProvider>
      </body>
    </html>
  );
}
