import { Slot } from "@measured/puck";

export type Props = {
  Título: {
    title: string;
    fontSize: number;
    heading: string;
    paddingBlock: number;
    color: string;
    textAlign: string;
  };
  "Container flexível": {
    content?: Slot;
    direction: string;
    verticalAlign: string;
    horizontalAlign: string;
    width: string;
    semanticElement: string;
    radius: number;
    variant: string;
    paddingBlock: number;
    paddingInline: number;
    gap: number;
    wrap: "wrap" | "nowrap";
  };
  "Container em tabela": {
    content?: Slot;
    cols: number;
    gap: number;
    paddingBlock: number;
    paddingInline: number;
    semanticElement: string;
  };
  Paragrafo: {
    text: string;
    fontSize: number;
    paddingBlock: number;
    color: string;
    textAlign: string;
  };
  "Botão/Link": {
    text: string;
    variant: string;
    paddingBlock: string;
    justifyContent: string;
    width: number;
    color: string;
    textColor: string;
    radius: number;
    href: string;
  };
  Imagem: {
    src: string;
    alt: string;
    width: number;
    height: number;
    radius: number;
  };
  Cabeçalho: {
    content: Slot;
  };
  "Seção principal": {
    content: Slot;
  };
  Cards: {
    content: Slot;
  };
  "Seção de texto": {
    content: Slot;
  };
};
