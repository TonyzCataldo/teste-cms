"use client";
import { PaperPropsType } from "./PaperTypes";

export default function Paper({ children, w, maxw }: PaperPropsType) {
  return (
    <section
      className="flex flex-col p-6 sm:p-8 bg-[var(--gray)] rounded-2xl"
      style={{ width: w, maxWidth: maxw }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </section>
  );
}
