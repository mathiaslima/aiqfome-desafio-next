import Image from "next/image";
import { FormEvent } from "react";

export default function Search({
  onChange,
}: {
  onChange: (searchTerm: string) => void;
}) {
  const handleSearchChange = (event: FormEvent<HTMLImageElement>) => {
    const inputElement = event.currentTarget
      .nextElementSibling as HTMLInputElement;
    const searchTerm = inputElement.value.trim().toLowerCase();
    onChange(searchTerm);
  };

  return (
    <section className="w-full p-4 pt-0  bg-purple-500 flex items-center flex-col">
      <div className="w-full h-12 rounded-lg bg-neutrals-0 flex items-center flex-row border-decorative-dividers border-1 px-4">
        <Image
          src="icons/search.svg"
          alt="Icone de pesquisa"
          height={24}
          onChange={(e) => handleSearchChange(e)}
          width={24}
        />
        <input
          className="w-full rounded-lg px-4  text-text-light  placeholder:text-text-light focus:outline-none "
          type="text"
          placeholder="busque pela loja ou culinária"
        />
      </div>
    </section>
  );
}
