"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AddButton from "../AddButton/AddButton";

export default function CreatePageForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [addFormError, setAddFormError] = useState("");
  const router = useRouter();

  function createPage(e: React.FormEvent) {
    e.preventDefault();
    const value = (inputRef.current?.value ?? "").trim().replace(/\s+/g, "-");
    if (value.length < 4) return setAddFormError("Mínimo de 4 caracteres.");
    if (value.length > 20) return setAddFormError("Máximo de 20 caracteres.");

    setAddFormError(null);
    router.push(`/${value}/edit`);
  }

  return (
    <form
      onSubmit={createPage}
      className="w-full flex flex-col gap-8 sm:gap-10"
    >
      <div className="flex flex-col gap-1.5 sm:gap-2.5">
        <label htmlFor="nameInput" className="cursor-pointer sm:text-[1.3rem]">
          Nome da página
        </label>
        <input
          type="text"
          id="nameInput"
          ref={inputRef}
          className="bg-[var(--bg)] rounded-sm text-[var(--txt)] outline-0 border-2 focus:border-green-500 border-[var(--gray)] p-2.5 sm:p-3.5 sm:text-[1.3rem]"
        ></input>

        {addFormError && (
          <p className="text-sm text-red-600 sm:text-base">{addFormError}</p>
        )}
      </div>
      <AddButton w="100%" radius="8px" text={false} />
    </form>
  );
}
