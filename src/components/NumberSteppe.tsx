import Image from "next/image";
import { useState } from "react";

type props = {
  name?: string;
  value?: number;
  onChange: (value: number) => void;
};

export default function NumberSteppe({ name, onChange, value = 0 }: props) {
  const [count, setCount] = useState(value);
  const handleIncrement = () => {
    setCount(count + 1);
    onChange(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    onChange(count - 1);
  };

  const SIZE_BUTTON = name ? 22 : 26;

  return (
    <div className="flex flex-row items-center gap-4 text-neutrals-500 text-sm">
      <button
        onClick={handleDecrement}
        disabled={count <= 0}
        className="cursor-pointer"
      >
        {count === 1 && (
          <Image
            src="/icons/delete.svg"
            width={SIZE_BUTTON}
            height={SIZE_BUTTON}
            alt="icone de menos"
          />
        )}
        {count > 1 && (
          <Image
            src="/icons/less.svg"
            width={SIZE_BUTTON}
            height={SIZE_BUTTON}
            alt="icone de menos"
          />
        )}
        {count === 0 && (
          <Image
            src="/icons/less-off.svg"
            width={SIZE_BUTTON}
            height={SIZE_BUTTON}
            alt="icone de menos"
          />
        )}
      </button>
      {count}
      <button onClick={handleIncrement} className="cursor-pointer">
        <Image
          src="/icons/more.svg"
          width={SIZE_BUTTON}
          height={SIZE_BUTTON}
          alt="icone de menos"
        />
      </button>
      {!!name && name}
    </div>
  );
}
