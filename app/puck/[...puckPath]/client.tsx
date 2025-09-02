"use client";

import type { Data } from "@measured/puck";
import { Puck, useGetPuck } from "@measured/puck";
import config from "../../../puck.config";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowSvg from "../../../public/up-chevron-svgrepo-com.svg";
import Image from "next/image";

import IframeGuard from "./IframeGuard";
import Link from "next/link";
import UpdateRoot from "./UpdateRoot";
import TextInput from "./TextInput";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const [selectedOption, setSelectedOption] = useState("components");
  const [isEditorUp, setIsEditorUp] = useState(false);

  const rootTitle = data.root?.props.title;

  useEffect(() => {
    setTimeout(() => setIsEditorUp(true), 50);
  }, []);

  function SaveButton({ path }: { path: string }) {
    const getPuck = useGetPuck();

    const publish = async () => {
      const { appState } = getPuck();
      await axios.post("/puck/api", { data: appState.data, path });
    };

    return (
      <button
        className="px-6 py-3 rounded-md text-lg font-mono cursor-pointer transition-colors duration-300 delay-50 bg-green-600/40 hover:bg-green-500"
        onClick={publish}
      >
        Salvar
      </button>
    );
  }

  const MyFieldLabel = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <label className="flex flex-col mb-1.5">
      <div className="text-lg  font-mono pl-0.5 text-green-500">{label}</div>
      {children}
    </label>
  );

  return (
    <Puck
      config={config}
      data={data}
      overrides={{
        drawerItem: ({ name }) => (
          <div className="border border-gray-700  rounded-sm bg-gray-100  hover:bg-[var(--gray)] hover:text-green-500 p-3 cursor-grab">
            {name}
          </div>
        ),

        iframe: ({ document, children }) => (
          <IframeGuard doc={document}>{children}</IframeGuard>
        ),

        fieldLabel: ({ children, label }) => (
          <MyFieldLabel label={label}>{children}</MyFieldLabel>
        ),
        fieldTypes: {
          text: ({ value, onChange, field, name }) => (
            <MyFieldLabel label={(field as any)?.label ?? name}>
              <TextInput value={value} onChange={onChange} name={name} />
            </MyFieldLabel>
          ),
          number: ({ name, value, onChange, field }) => (
            <MyFieldLabel label={(field as any)?.label ?? name}>
              <TextInput value={value} onChange={onChange} name={name} />
            </MyFieldLabel>
          ),
        },
      }}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    >
      <div className="w-full pb-10 rounded-2xl flex items-center flex-col">
        <div className="flex justify-between items-center  w-full p-4 md:px-6 ">
          <h1 className="text-3xl font-mono">{`Título: ${path.replace(
            "/",
            ""
          )}`}</h1>
          <div className="flex justify-center gap-2.5">
            <Link
              href={"/"}
              className="p-4 transition-colors duration-300 delay-50 text-lg bg-gray-400/15 hover:bg-gray-400/20  rounded-md font-mono"
            >
              Dashboard
            </Link>
            <SaveButton path={path} />
          </div>
        </div>

        <div className="w-full h-0.5 bg-[var(--gray)] mb-6"></div>
        <div className="w-[99lvw] border h-dvh">
          <Puck.Preview />
        </div>
        <div className="fixed w-full bottom-0 z-20 overflow-hidden bg-transparent">
          <div
            className={`flex flex-col w-full z-30 border-t border-[var(--gray)] bg-white transition-all duration-300 ${
              isEditorUp ? "translate-y-0" : "translate-y-[194px]"
            }`}
          >
            <div className="flex p-4 gap-6 ">
              <button
                className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
                onClick={() => {
                  setSelectedOption("components");
                  if (!isEditorUp) {
                    setIsEditorUp(true);
                  }
                }}
              >
                Componentes
              </button>
              <button
                className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
                onClick={() => {
                  setSelectedOption("fields");
                  if (!isEditorUp) {
                    setIsEditorUp(true);
                  }
                }}
              >
                Propriedades
              </button>
              <button
                className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
                onClick={() => {
                  setSelectedOption("outline");
                  if (!isEditorUp) {
                    setIsEditorUp(true);
                  }
                }}
              >
                Estrutura
              </button>
              <button
                className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
                onClick={() => {
                  setSelectedOption("root");
                  if (!isEditorUp) {
                    setIsEditorUp(true);
                  }
                }}
              >
                Raiz da página
              </button>

              <button
                className="ml-auto"
                onClick={() => setIsEditorUp(!isEditorUp)}
              >
                <Image
                  className={`w-6 ${isEditorUp ? "rotate-180" : "rotate-0"}`}
                  src={arrowSvg}
                  alt="up/down icon"
                />
              </button>
            </div>
            {selectedOption === "components" ? (
              <div className="px-4 pb-4 min-h-48 max-h-48 overflow-y-auto">
                <Puck.Components />
              </div>
            ) : selectedOption === "fields" ? (
              <div className="px-4 pb-4 min-h-48 max-h-48 overflow-y-auto">
                <Puck.Fields wrapFields={false} />
              </div>
            ) : selectedOption === "outline" ? (
              <div className="px-4 pb-4 min-h-48 max-h-48 overflow-y-auto puckOutline">
                <Puck.Outline />
              </div>
            ) : (
              <div className="px-4 pb-4 min-h-48 max-h-48 overflow-y-auto">
                <MyFieldLabel label="Título da página">
                  <UpdateRoot prop="title" name="Título da página"></UpdateRoot>
                </MyFieldLabel>
              </div>
            )}
          </div>
        </div>
      </div>
    </Puck>
  );
}
