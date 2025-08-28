"use client";
import Image from "next/image";
import deleteSvg from "../../public/trash-xmark-alt-svgrepo-com.svg";
import { RemoveButtonPropsType } from "./RemoveButtonTypes";

export default function RemoveButton({ action }: RemoveButtonPropsType) {
  return (
    <button
      className="p-2 bg-red-500 rounded-md cursor-pointer flex justify-center sm:p-4"
      onClick={() => action()}
    >
      <Image
        src={deleteSvg}
        className="w-7"
        alt="Icone de deletar página"
      ></Image>
    </button>
  );
}
