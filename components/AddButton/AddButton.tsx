"use client";

import { AddButtonPropsType } from "./AddButtonTypes";
import svg from "../../public/plus-svgrepo-com.svg";
import Image from "next/image";

export default function AddButton({
  w,
  radius,
  action,
  text,
}: AddButtonPropsType) {
  return (
    <button
      className="p-4 bg-green-500 flex items-center text-white justify-evenly cursor-pointer font-mono"
      style={{ width: w, borderRadius: radius }}
      onClick={action}
    >
      <Image src={svg} className="w-6" alt="icone de adicionar"></Image>
      {text && "Nova página"}
    </button>
  );
}
