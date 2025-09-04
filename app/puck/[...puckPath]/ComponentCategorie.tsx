import Image from "next/image";

export default function ComponentCategorie({
  name,
  svg,
  state,
}: {
  name: string;
  svg: any;
  state: boolean;
}) {
  return (
    <div className="flex group justify-between py-2 cursor-pointer  rounded-md hover:bg-[var(--gray)]">
      <p className="group-hover:text-green-500 text-3xl">{name}</p>
      <Image
        src={svg}
        alt="cima/baixo icone"
        className={`w-5 ${state ? "rotate-0" : "rotate-180"}`}
      />
    </div>
  );
}
