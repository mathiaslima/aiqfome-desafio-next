import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex p-4 gap-4 flex-row items-center justify-between w-full bg-purple-500">
      <Link href="/">
        <Image
          src="/icons/aiqfome.svg"
          width={32}
          height={32}
          alt="icone principal do site ai que fome"
        />
      </Link>

      <section className="flex flex-row items-center gap-3">
        <Image
          src="/icons/location.svg"
          width={16}
          height={16}
          alt="icone de localização"
        />
        <section className="flex flex-col">
          <span className="text-purple-200 text-sm font-bold ">
            entregando em
          </span>

          <span className="text-neutrals-0 font-bold text-base flex flexp-row items-center gap-1">
            Rua Mandaguari, 198
            <Image
              src="/icons/arrows-right.svg"
              width={16}
              height={16}
              alt="icone de seta para direita"
            />
          </span>
        </section>
      </section>

      <Image
        src="/icons/user.svg"
        width={24}
        height={24}
        alt="icone de usuário"
      />
    </header>
  );
}
