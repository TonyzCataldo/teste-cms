import Image from "next/image";
import editSvg from "../../public/edit-svgrepo-com.svg";
import Link from "next/link";

export default function EditButton({ page }: { page: string }) {
  return (
    <Link
      href={`/${page}/edit`}
      className="p-2 bg-amber-400 rounded-md cursor-pointer sm:p-4"
    >
      <Image
        src={editSvg}
        className="w-7 "
        alt="Icone de editar página"
      ></Image>
    </Link>
  );
}
