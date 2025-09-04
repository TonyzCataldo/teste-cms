"use client";
import { PaperPropsType } from "./PaperTypes";

export default function Paper({ children, w, maxw }: PaperPropsType) {
  return (
    <section
      className="flex flex-col p-6 sm:p-8 bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18),0_-16px_32px_-12px_rgba(0,0,0,0.12)] rounded-2xl"
      style={{ width: w, maxWidth: maxw }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </section>
  );
}
