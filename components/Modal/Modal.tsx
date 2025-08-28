"use client";

import { useRef } from "react";
import Paper from "../Paper/Paper";
import { ModalPropsType } from "./ModalTypes";
import React from "react";

export default function Modal({
  children,
  open,
  setOpen,
  title,
}: ModalPropsType) {
  const screen = useRef<HTMLDivElement>(null);

  const childrenArray = React.Children.toArray(children);
  const firtsChildren = childrenArray[0] ?? null;
  const secondChildren = childrenArray[1] ?? null;

  return (
    <div className="w-full flex justify-center">
      {firtsChildren}
      {open && (
        <div
          ref={screen}
          onClick={() => setOpen(false)}
          className="fixed w-full h-full min-h-dvh top-0 left-0 flex justify-center bg-black/70"
        >
          <div className="w-full px-4 flex flex-col items-center absolute top-1/6 ">
            <Paper w="100%" maxw="965px">
              <div className="flex flex-col gap-7">
                <h2 className="text-center text-2xl sm:text-3xl">{title}</h2>
                {secondChildren}
              </div>
            </Paper>
          </div>
        </div>
      )}
    </div>
  );
}
