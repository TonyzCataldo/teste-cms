"use client";

import type { Data } from "@measured/puck";
import { Drawer, FieldLabel, Puck, useGetPuck } from "@measured/puck";
import config from "../../../puck.config";
import { useState } from "react";
import axios from "axios";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const [selectedOption, setSelectedOption] = useState("componentes");

  function SaveButton({ path }: { path: string }) {
    const getPuck = useGetPuck();

    const publish = async () => {
      const { appState } = getPuck(); // ← estado ATUAL
      await axios.post("/puck/api", { data: appState.data, path });
    };

    return (
      <button
        className="px-4 py-3 rounded-md text-lg font-mono cursor-pointer bg-green-600/40 hover:bg-green-500"
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
        // Render a custom element for each item in the component list
        drawerItem: ({ name }) => (
          <div className="border border-gray-700 dark:border-gray-100 rounded-sm bg-gray-100 dark:bg-gray-700 hover:bg-[var(--gray)] hover:text-green-500 p-3 cursor-grab">
            {name}
          </div>
        ),

        fieldLabel: ({ children, label }) => (
          <MyFieldLabel label={label}>{children}</MyFieldLabel>
        ),
        fieldTypes: {
          text: ({ value, onChange, field, name }) => (
            <MyFieldLabel label={(field as any)?.label ?? name}>
              <input
                className="bg-white dark:bg-gray-700 w-full placeholder:text-[var(--txt)] rounded-md border font-sans text-[var(--txt)] focus:border-green-500 border-gray-700 outline-0 dark:border-white p-3"
                type="text"
                value={value ?? ""}
                placeholder={name}
                onChange={(e) => onChange(e.currentTarget.value)}
              />
            </MyFieldLabel>
          ),
          number: ({ name, value, onChange, field }) => (
            <MyFieldLabel label={(field as any)?.label ?? name}>
              <input
                className="bg-white dark:bg-gray-700 w-full rounded-md border font-sans text-[var(--txt)] focus:border-green-500 border-gray-700 outline-0 dark:border-white p-3"
                type="text"
                value={value ?? ""}
                onChange={(e) => onChange(e.currentTarget.value)}
              />
            </MyFieldLabel>
          ),
        },
        // outline: ({ children }) => <div>{children}</div>,
      }}
      onPublish={async (data) => {
        await fetch("/puck/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    >
      <div className="w-full pt-2 pb-10 rounded-2xl flex items-center flex-col">
        <div className="flex justify-between items-center w-full p-5">
          <h1 className="text-4xl font-mono">{`Título: ${path.replace(
            "/",
            ""
          )}`}</h1>
          <SaveButton path={path} />
        </div>
        <div className="w-full p-5 bg-black dark:bg-white h-[600px] ">
          <Puck.Preview />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex p-4 gap-6 ">
            <button
              className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
              onClick={() => setSelectedOption("componentes")}
            >
              Componentes
            </button>
            <button
              className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
              onClick={() => setSelectedOption("propriedades")}
            >
              Propriedades
            </button>
            <button
              className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 "
              onClick={() => setSelectedOption("estrutura")}
            >
              Estrutura
            </button>
            {/* <button className="text-2xl cursor-pointer hover:underline decoration-green-500 underline-offset-8 ">
              Títulos
            </button> */}
          </div>
          {selectedOption === "componentes" ? (
            <div className="px-4 max-h-48 overflow-y-auto">
              <Puck.Components />
              {/* <Drawer>
                <Drawer.Item name="HeadingBlock"></Drawer.Item>
              </Drawer> */}
            </div>
          ) : selectedOption === "propriedades" ? (
            <div className="px-4 max-h-48 overflow-y-auto">
              <Puck.Fields wrapFields={false} />
            </div>
          ) : (
            <div className="px-4 max-h-48 overflow-y-auto puckOutline">
              <Puck.Outline />
            </div>
          )}
        </div>
      </div>
    </Puck>
  );
}
