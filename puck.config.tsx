import type { Config, Slot } from "@measured/puck";

import { Title } from "./PuckComponents/Title";
import { Paragraph } from "./PuckComponents/Paragraph";
import {
  LinkButtonContainer,
  LinkButton,
  OutlinedLinkButton,
  TextLinkButton,
} from "./PuckComponents/LinkButton";
import Head from "next/head";
import { SemanticDiv } from "./PuckComponents/SemanticDiv";
import Image from "next/image";
import { ImageContainer } from "./PuckComponents/ImageContainer";

type Props = {
  Título: {
    title: string;
    fontSize: number;
    heading: string;
    paddingBlock: number;
    color: string;
    textAlign: string;
  };
  "Container em linha": {
    content?: Slot;
    verticalAlign: string;
    horizontalAlign: string;
    semanticElement: string;
    paddingBlock: number;
    gap: number;
  };
  "Container em tabela": {
    content?: Slot;
    cols: number;
    gap: number;
    paddingBlock: number;
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
    paddingInline: string;
    variant: string;
    paddingBlock: string;
    justifyContent: string;
    color: string;
    textColor: string;
    radius: number;
    href: string;
  };
};

export const config: Config<Props> = {
  // categories: {
  //   typography: {
  //     components: ["Título"],
  //   },
  // },
  components: {
    Título: {
      label: "Título",
      fields: {
        title: { type: "text", label: "Título" },
        fontSize: { type: "number", label: "Tamanho" },
        heading: {
          type: "radio",
          label: "Tipo",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
          ],
        },
        textAlign: {
          type: "radio",
          label: "Alinhamento",
          options: [
            { label: "Esquerda", value: "left" },
            { label: "Centro", value: "center" },
            { label: "Direita", value: "right" },
          ],
        },
        color: {
          type: "radio",
          label: "Cor",
          options: [
            { label: "Preto", value: "black" },
            { label: "Cinza", value: "gray" },
          ],
        },
        paddingBlock: {
          type: "number",
          label: "Preenchimento Vertical",
        },
      },
      defaultProps: {
        title: "Título",
        fontSize: 32,
        heading: "h1",
        paddingBlock: 0,
        color: "black",
        textAlign: "left",
      },
      render: ({
        title,
        fontSize,
        heading,
        paddingBlock,
        color,
        textAlign,
      }) => (
        <Title
          as={`${heading}`}
          $fontSize={fontSize}
          $color={color}
          $textAlign={textAlign}
          $paddingBlock={paddingBlock}
        >
          {title}
        </Title>
      ),
    },

    "Container em linha": {
      label: "Container Flex",
      fields: {
        content: { type: "slot" },
        verticalAlign: {
          label: "Alinhamento Vertical",
          type: "radio",
          options: [
            { label: "Topo", value: "start" },
            { label: "Meio", value: "center" },
            { label: "Baixo", value: "end" },
          ],
        },
        horizontalAlign: {
          label: "Alinhamento Horizontal",
          type: "radio",
          options: [
            { label: "Começo", value: "start" },
            { label: "Centro", value: "center" },
            { label: "Final", value: "end" },
            { label: "Espaço entre si", value: "space-between" },
            { label: "Espaço por volta", value: "space-around" },
          ],
        },
        semanticElement: {
          label: "Elemento semântico",
          type: "select",
          options: [
            { label: "Cabeçalho", value: "header" },
            { label: "Sessão", value: "section" },
            { label: "Rodapé", value: "footer" },
            { label: "Navegação", value: "nav" },
            { label: "Container sem semântica", value: "div" },
          ],
        },
        paddingBlock: {
          label: "Preenchimento Vertical",
          type: "number",
        },
        gap: {
          label: "Distanciamento",
          type: "number",
        },
      },
      defaultProps: {
        verticalAlign: "start",
        horizontalAlign: "start",
        paddingBlock: 0,
        gap: 0,
        semanticElement: "div",
      },

      render: ({
        content: Content,
        verticalAlign,
        horizontalAlign,
        paddingBlock,
        gap,
        semanticElement,
      }) => (
        <SemanticDiv as={semanticElement}>
          <Content
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: `${verticalAlign}`,
              paddingBlock: `${paddingBlock}px`,
              justifyContent: `${horizontalAlign}`,
              gap: `${gap}px`,
            }}
            minEmptyHeight={160}
          />
        </SemanticDiv>
      ),
    },
    "Container em tabela": {
      label: "Container Grid",
      fields: {
        content: { type: "slot" },
        cols: { label: "Colunas", type: "number" },
        gap: { label: "distanciamento", type: "number" },
        paddingBlock: {
          type: "number",
          label: "Preenchimento Vertical",
        },
        semanticElement: {
          label: "Elemento semântico",
          type: "select",
          options: [
            { label: "Cabeçalho", value: "header" },
            { label: "Sessão", value: "section" },
            { label: "Rodapé", value: "footer" },
            { label: "Navegação", value: "nav" },
            { label: "Container sem semântica", value: "div" },
          ],
        },
      },
      defaultProps: {
        cols: 2,
        gap: 16,
        paddingBlock: 0,
        semanticElement: "div",
      },
      render: ({
        content: Content,
        cols,
        gap,
        paddingBlock,
        semanticElement,
      }) => (
        <SemanticDiv as={semanticElement}>
          <Content
            style={{
              display: "grid",
              width: "100%",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: `${gap}px`,
              paddingBlock: `${paddingBlock}px`,
              alignItems: "center",
            }}
          />
        </SemanticDiv>
      ),
    },

    Paragrafo: {
      label: "Paragrafo",
      fields: {
        text: { type: "textarea", label: "Texto" },
        fontSize: { type: "number", label: "Tamanho" },
        textAlign: {
          type: "radio",
          label: "Alinhamento",
          options: [
            { label: "Esquerda", value: "left" },
            { label: "Centro", value: "center" },
            { label: "Direita", value: "right" },
          ],
        },
        paddingBlock: {
          type: "number",
          label: "Preenchimento vertical",
        },
        color: {
          type: "select",
          label: "Cor",
          options: [
            { label: "Preto", value: "black" },
            { label: "Cinza", value: "gray" },
            { label: "Verde", value: "green" },
            { label: "Vermelho", value: "red" },
          ],
        },
      },
      defaultProps: {
        text: "texto",
        fontSize: 16,
        paddingBlock: 0,
        color: "black",
        textAlign: "left",
      },
      render: ({ text, fontSize, paddingBlock, color, textAlign }) => (
        <Paragraph
          $color={color}
          $fontSize={fontSize}
          $paddingBlock={paddingBlock}
          $textAlign={textAlign}
        >
          {text}
        </Paragraph>
      ),
    },
    "Botão/Link": {
      label: "Botão de link",
      fields: {
        text: { type: "text", label: "Texto" },
        variant: {
          type: "radio",
          label: "Variante",
          options: [
            { label: "Cheio", value: "contained" },
            { label: "Vazado", value: "outlined" },
            { label: "Texto", value: "text" },
          ],
        },
        justifyContent: {
          type: "radio",
          label: "Alinhamento horizontal",
          options: [
            { label: "Esquerda", value: "start" },
            { label: "Centro", value: "center" },
            { label: "Direita", value: "end" },
          ],
        },
        paddingBlock: {
          type: "select",
          label: "Preenchimento vertical",
          options: [
            { label: "8px", value: "0.5rem" },
            { label: "16px", value: "1rem" },
            { label: "20px", value: "1.25rem" },
            { label: "24px", value: "1.5rem" },
            { label: "28px", value: "1.75rem" },
            { label: "40px", value: "2.5rem" },
            { label: "48px", value: "3rem" },
            { label: "56px", value: "3.5rem" },
            { label: "64px", value: "4rem" },
            { label: "80px", value: "5rem" },
            { label: "96px", value: "6rem" },
            { label: "112px", value: "7rem" },
            { label: "144px", value: "9rem" },
          ],
        },
        paddingInline: {
          type: "select",
          label: "Preenchimento horizontal",
          options: [
            { label: "8px", value: "0.5rem" },
            { label: "16px", value: "1rem" },
            { label: "20px", value: "1.25rem" },
            { label: "24px", value: "1.5rem" },
            { label: "28px", value: "1.75rem" },
            { label: "32px", value: "2rem" },
            { label: "40px", value: "2.5rem" },
            { label: "48px", value: "3rem" },
            { label: "56px", value: "3.5rem" },
            { label: "64px", value: "4rem" },
            { label: "80px", value: "5rem" },
            { label: "96px", value: "6rem" },
            { label: "112px", value: "7rem" },
            { label: "144px", value: "9rem" },
          ],
        },
        color: {
          type: "select",
          label: "Cor",
          options: [
            { label: "Verde", value: "green" },
            { label: "Azul", value: "blue" },
            { label: "Vermelho", value: "red" },
            { label: "Rosa", value: "pink" },
            { label: "Cinza", value: "gray" },
            { label: "Preto", value: "black" },
          ],
        },
        textColor: {
          type: "radio",
          label: "Cor do texto",
          options: [
            { label: "Preto", value: "black" },
            { label: "Branco", value: "white" },
          ],
        },
        radius: {
          label: "Arredondamento da borda",
          type: "number",
        },
        href: {
          label: "Link para outra página",
          type: "text",
        },
      },
      defaultProps: {
        text: "Botão",
        variant: "contained",
        paddingBlock: "0.5rem",
        paddingInline: "0.5rem",
        color: "green",
        textColor: "white",
        justifyContent: "start",
        radius: 8,
        href: "https://www.youtube.com/playlist?list=PLpzmRsG7u_gpMogZpIcZnS0BsD3z8_x3n",
      },

      render: ({
        variant,
        text,
        paddingBlock,
        color,
        textColor,
        paddingInline,
        justifyContent,
        radius,
        href,
      }) =>
        variant === "contained" ? (
          <LinkButtonContainer $justifyContent={justifyContent}>
            <LinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $paddingInline={paddingInline}
              $color={color}
              $textColor={textColor}
              $radius={radius}
            >
              {text}
            </LinkButton>
          </LinkButtonContainer>
        ) : variant === "outlined" ? (
          <LinkButtonContainer $justifyContent={justifyContent}>
            <OutlinedLinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $paddingInline={paddingInline}
              $color={color}
              $textColor={textColor}
              $radius={radius}
            >
              {text}
            </OutlinedLinkButton>
          </LinkButtonContainer>
        ) : (
          <LinkButtonContainer $justifyContent={justifyContent}>
            <TextLinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $paddingInline={paddingInline}
              $color={color}
              $textColor={textColor}
              $radius={radius}
            >
              {text}
            </TextLinkButton>
          </LinkButtonContainer>
        ),
    },
    Imagem: {
      label: "Imagem",
      fields: {
        src: { label: "Url da imagem", type: "text" },
        alt: { label: "Texto alternativo", type: "text" },
        width: { label: "Largura", type: "number" },
        height: { label: "Altura", type: "number" },
        radius: { label: "Arredondamento", type: "number" },
      },
      defaultProps: {
        src: "https://i.pinimg.com/736x/44/c2/44/44c2445f9ba07d315728aa480df8fde2.jpg",
        alt: "",
        width: 200,
        height: 200,
        radius: 0,
      },
      render: ({ src, alt, width, height, radius }) => (
        <img
          src={src}
          alt={alt}
          style={{
            borderRadius: `${radius}px`,
            width: `${width}px`,
            height: `${height}px`,
          }}
        ></img>
      ),
    },
  },
  root: {
    fields: {
      title: {
        label: "Título da página",
        type: "text",
      },
    },
    defaultProps: {
      title: "Título",
    },
    render: ({ children, title }) => {
      return (
        <>
          <Head>
            <title>{title}</title>
          </Head>
          <main id="root" style={{ paddingInline: "1rem", height: "100%" }}>
            {children}
          </main>
        </>
      );
    },
  },
};

export default config;
