"use client";

import type { Data } from "@measured/puck";
import { Puck, useGetPuck, Drawer } from "@measured/puck";
import config from "../../../puck.config";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowSvg from "../../../public/up-chevron-svgrepo-com.svg";
import Image from "next/image";

import IframeGuard from "./IframeGuard";
import Link from "next/link";
import UpdateRoot from "./UpdateRoot";
import TextInput from "./TextInput";
import PuckComponent from "./PuckComponent";
import ComponentCategorie from "./ComponentCategorie";
import FieldLabel from "./FieldLabel";
import SaveButton from "./SaveButton";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const [selectedOption, setSelectedOption] = useState("components");
  const [isEditorUp, setIsEditorUp] = useState(false);
  const [categorieTextUp, setCategorieTextUp] = useState(false);
  const [categorieContainerUp, setCategorieContainerUp] = useState(false);
  const [categoriePremadeUp, setCategoriePremadeUp] = useState(false);
  const [categorieOtherUp, setCategorieOtherUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsEditorUp(true), 50);
  }, []);

  return (
    <Puck
      config={config}
      data={data}
      overrides={{
        drawerItem: ({ name }) => (
          <div className="border border-gray-700 rounded-sm bg-gray-100  hover:bg-[var(--gray)] hover:text-green-500 p-3 cursor-grab">
            {name}
          </div>
        ),

        iframe: ({ document, children }) => (
          <IframeGuard doc={document}>{children}</IframeGuard>
        ),

        fieldLabel: ({ children, label }) => (
          <FieldLabel label={label}>{children}</FieldLabel>
        ),
        fieldTypes: {
          text: ({ value, onChange, field, name }) => (
            <FieldLabel label={field.label ?? name}>
              <TextInput
                value={value}
                onChange={onChange}
                name={name}
                type="text"
              />
            </FieldLabel>
          ),
          number: ({ name, value, onChange, field }) => (
            <FieldLabel label={field.label ?? name}>
              <TextInput
                value={value}
                onChange={onChange}
                name={name}
                type="number"
              />
            </FieldLabel>
          ),
          radio: ({ name, value, onChange, field }) => (
            <FieldLabel label={field.label ?? name} radio>
              <div className="flex justify-center my-2 gap-2.5">
                {(field.options ?? []).map((opt, i) => {
                  const checked = value === opt.value;

                  return (
                    <button
                      className={`flex-1 py-2 border rounded-sm cursor-pointer aria-checked:bg-green-500 hover:bg-green-100 text-gray-700 border-gray-300`}
                      key={i}
                      type="button"
                      role="radio"
                      name={name}
                      aria-checked={checked}
                      onClick={() => onChange(opt.value)}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </FieldLabel>
          ),
          select: ({ name, value, onChange, field }) => (
            <FieldLabel label={field.label ?? name}>
              <select
                name={name}
                className="border rounded-md p-3 cursor-pointer border-gray-300 outline-0"
                value={value ?? ""}
                onChange={(e) => onChange(e.target.value || undefined)}
              >
                {(field.options ?? []).map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </FieldLabel>
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
                Página
              </button>

              <button
                className="ml-auto"
                onClick={() => setIsEditorUp(!isEditorUp)}
              >
                <Image
                  className={`w-6 ${isEditorUp ? "rotate-180" : "rotate-0"}`}
                  src={arrowSvg}
                  alt="cima/baixo icone"
                />
              </button>
            </div>
            {selectedOption === "components" ? (
              <div className="px-4 pb-4 min-h-48 max-h-48 overflow-y-auto">
                <Drawer>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <div onClick={() => setCategorieTextUp(!categorieTextUp)}>
                        <ComponentCategorie
                          name="Textos"
                          svg={arrowSvg}
                          state={categorieTextUp}
                        />
                      </div>

                      <div
                        className="flex gap-3"
                        style={{ display: categorieTextUp ? "flex" : "none" }}
                      >
                        <Drawer.Item name="Título">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Paragrafo">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div
                        onClick={() =>
                          setCategorieContainerUp(!categorieContainerUp)
                        }
                      >
                        <ComponentCategorie
                          name="Containers"
                          svg={arrowSvg}
                          state={categorieContainerUp}
                        />
                      </div>

                      <div
                        className="flex gap-3"
                        style={{
                          display: categorieContainerUp ? "flex" : "none",
                        }}
                      >
                        <Drawer.Item name="Container flexível">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Container tabela">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div
                        onClick={() =>
                          setCategoriePremadeUp(!categoriePremadeUp)
                        }
                      >
                        <ComponentCategorie
                          name="Componentes prontos"
                          svg={arrowSvg}
                          state={categoriePremadeUp}
                        />
                      </div>

                      <div
                        className="flex gap-3"
                        style={{
                          display: categoriePremadeUp ? "flex" : "none",
                        }}
                      >
                        <Drawer.Item name="Cabeçalho">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Seção principal">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Cards">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Seção de texto">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div
                        onClick={() => setCategorieOtherUp(!categorieOtherUp)}
                      >
                        <ComponentCategorie
                          name="Outros"
                          svg={arrowSvg}
                          state={categorieOtherUp}
                        />
                      </div>

                      <div
                        className="flex gap-3"
                        style={{
                          display: categorieOtherUp ? "flex" : "none",
                        }}
                      >
                        <Drawer.Item name="Botão/Link">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                        <Drawer.Item name="Imagem">
                          {({ name }) => <PuckComponent name={name} />}
                        </Drawer.Item>
                      </div>
                    </div>
                  </div>
                </Drawer>
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
                <FieldLabel label="Título da página">
                  <UpdateRoot prop="title" name="Título da página"></UpdateRoot>
                </FieldLabel>
              </div>
            )}
          </div>
        </div>
      </div>
    </Puck>
  );
}
