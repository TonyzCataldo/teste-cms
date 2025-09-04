import type { Config } from "@measured/puck";
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
import { Props } from "./puckComponentsType";

export const config: Config<Props> = {
  categories: {
    typography: {
      components: ["Título"],
      defaultExpanded: true,
    },
  },
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

    "Container flexível": {
      label: "Container Flex",
      fields: {
        content: { type: "slot" },
        direction: {
          label: "Direção do container",
          type: "radio",
          options: [
            { label: "Linha", value: "row" },
            { label: "Coluna", value: "column" },
          ],
        },
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
        width: {
          label: "Largura",
          type: "select",
          options: [
            { label: "auto", value: "auto" },
            { label: "50px", value: "50px" },
            { label: "100px", value: "100px" },
            { label: "150px", value: "150px" },
            { label: "200px", value: "200px" },
            { label: "250px", value: "250px" },
            { label: "300px", value: "300px" },
            { label: "350px", value: "350px" },
            { label: "400px", value: "400px" },
            { label: "500px", value: "500px" },
            { label: "600px", value: "600px" },
            { label: "700px", value: "700px" },
            { label: "800px", value: "800px" },
          ],
        },
        variant: {
          label: "Variação",
          type: "radio",
          options: [
            { label: "Normal", value: "default" },
            { label: "Card", value: "card" },
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
          label: "Preenchimento vertical",
          type: "number",
        },
        paddingInline: {
          label: "Preenchimento horizontal",
          type: "number",
        },
        gap: {
          label: "Distanciamento",
          type: "number",
        },
        radius: {
          label: "Arredondamento",
          type: "number",
        },
        wrap: {
          label: "Quebrar linha",
          type: "radio",
          options: [
            { label: "Sim", value: "wrap" },
            { label: "Não", value: "nowrap" },
          ],
        },
      },
      defaultProps: {
        direction: "row",
        verticalAlign: "start",
        horizontalAlign: "start",
        variant: "default",
        width: "auto",
        paddingBlock: 0,
        paddingInline: 0,
        gap: 0,
        radius: 0,
        wrap: "wrap",
        semanticElement: "div",
      },

      render: ({
        content: Content,
        direction,
        verticalAlign,
        horizontalAlign,
        paddingBlock,
        paddingInline,
        width,
        gap,
        radius,
        variant,
        semanticElement,
        wrap,
      }) =>
        direction === "row" ? (
          <SemanticDiv as={semanticElement}>
            <Content
              style={{
                display: "flex",
                flexWrap: `${wrap}`,
                width: `${width}`,
                alignItems: `${verticalAlign}`,
                flexDirection: "row",
                paddingBlock: `${paddingBlock}px`,
                paddingInline: `${paddingInline}px`,
                justifyContent: `${horizontalAlign}`,
                gap: `${gap}px`,
                borderRadius: `${radius}px`,
                boxShadow:
                  variant === "card"
                    ? "0 3px 12px rgba(0, 0, 0, 0.12)"
                    : "none",
              }}
              minEmptyHeight={160}
            />
          </SemanticDiv>
        ) : (
          <SemanticDiv as={semanticElement}>
            <Content
              style={{
                display: "flex",
                flexWrap: `${wrap}`,
                width: `${width}`,
                alignItems: `${horizontalAlign}`,
                flexDirection: "column",
                paddingBlock: `${paddingBlock}px`,
                paddingInline: `${paddingInline}px`,
                justifyContent: `${verticalAlign}`,
                gap: `${gap}px`,
                borderRadius: `${radius}px`,
                boxShadow:
                  variant === "card"
                    ? "0 3px 12px rgba(0, 0, 0, 0.12)"
                    : "none",
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
          label: "Preenchimento vertical",
        },
        paddingInline: {
          type: "number",
          label: "Preenchimento horizontal",
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
        paddingInline: 0,
        semanticElement: "div",
      },
      render: ({
        content: Content,
        cols,
        gap,
        paddingBlock,
        paddingInline,
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
              paddingInline: `${paddingInline}px`,
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
          label: "Alinhamento horizontal",
          type: "radio",
          options: [
            { label: "Começo", value: "start" },
            { label: "Meio", value: "center" },
            { label: "Fim", value: "end" },
          ],
        },
        width: {
          label: "Largura (porcentagem)",
          type: "number",
        },
        paddingBlock: {
          type: "select",
          label: "Preenchimento vertical",
          options: [
            { label: "8px", value: "0.5rem" },
            { label: "12px", value: "0.75rem" },
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
            { label: "Roxo", value: "purple" },
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
        width: 100,
        color: "green",
        textColor: "white",
        justifyContent: "center",
        radius: 8,
        href: "https://www.youtube.com/playlist?list=PLpzmRsG7u_gpMogZpIcZnS0BsD3z8_x3n",
      },
      inline: true,

      render: ({
        variant,
        text,
        width,
        paddingBlock,
        color,
        textColor,
        justifyContent,
        radius,
        puck,
        href,
      }) =>
        variant === "contained" ? (
          <LinkButtonContainer
            ref={puck.dragRef}
            $justifyContent={justifyContent}
          >
            <LinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $width={width}
              $color={color}
              $textColor={textColor}
              $radius={radius}
            >
              {text}
            </LinkButton>
          </LinkButtonContainer>
        ) : variant === "outlined" ? (
          <LinkButtonContainer
            $justifyContent={justifyContent}
            ref={puck.dragRef}
          >
            <OutlinedLinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $width={width}
              $color={color}
              $textColor={textColor}
              $radius={radius}
            >
              {text}
            </OutlinedLinkButton>
          </LinkButtonContainer>
        ) : (
          <LinkButtonContainer
            $justifyContent={justifyContent}
            ref={puck.dragRef}
          >
            <TextLinkButton
              href={href}
              $paddingBlock={paddingBlock}
              $width={width}
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
    Cabeçalho: {
      label: "Cabeçalho",
      fields: {
        content: {
          type: "slot",
        },
      },
      defaultProps: {
        content: [
          {
            type: "Container flexível",
            props: {
              direction: "row",
              verticalAlign: "center",
              horizontalAlign: "space-between",
              variant: "card",
              paddingBlock: 0,
              paddingInline: 32,
              width: "auto",
              gap: 0,
              radius: 0,
              semanticElement: "header",
              wrap: "wrap",
              content: [
                {
                  type: "Título",
                  props: {
                    title: "Meu Site",
                    fontSize: 40,
                    heading: "h1",
                    textAlign: "left",
                    paddingBlock: 0,
                    color: "black",
                  },
                },
                {
                  type: "Container flexível",
                  props: {
                    verticalAlign: "center",
                    direction: "row",
                    horizontalAlign: "end",
                    gap: 20,
                    semanticElement: "nav",
                    variant: "default",
                    paddingBlock: 0,
                    paddingInline: 0,
                    radius: 0,
                    width: "250px",
                    wrap: "nowrap",
                    content: [
                      {
                        type: "Botão/Link",
                        props: {
                          text: "Sobre nós",
                          variant: "text",
                          width: 100,
                          paddingBlock: "0.75rem",
                          color: "black",
                          textColor: "white",
                          justifyContent: "center",
                          radius: 8,
                          href: "https://www.youtube.com/playlist?list=PLpzmRsG7u_gpMogZpIcZnS0BsD3z8_x3n",
                        },
                      },
                      {
                        type: "Botão/Link",
                        props: {
                          text: "Contatos",
                          variant: "text",
                          width: 100,
                          paddingBlock: "0.75rem",
                          color: "black",
                          textColor: "white",
                          justifyContent: "center",
                          radius: 8,
                          href: "https://www.youtube.com/playlist?list=PLpzmRsG7u_gpMogZpIcZnS0BsD3z8_x3n",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      render: ({ content: Content }) => (
        <div>
          <Content />
        </div>
      ),
    },
    "Seção principal": {
      label: "Seção pronta",
      fields: {
        content: {
          type: "slot",
        },
      },
      defaultProps: {
        content: [
          {
            type: "Container flexível",
            props: {
              direction: "row",
              verticalAlign: "center",
              horizontalAlign: "center",
              variant: "default",
              paddingBlock: 80,
              paddingInline: 10,
              width: "auto",
              gap: 80,
              radius: 0,
              semanticElement: "section",
              wrap: "wrap",
              content: [
                {
                  type: "Container flexível",
                  props: {
                    direction: "column",
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    variant: "default",
                    paddingBlock: 0,
                    paddingInline: 0,
                    width: "auto",
                    gap: 10,
                    radius: 0,
                    semanticElement: "div",
                    wrap: "wrap",
                    content: [
                      {
                        type: "Título",
                        props: {
                          title: "Crie suas páginas  do jeito que quiser!",
                          fontSize: 32,
                          heading: "h2",
                          textAlign: "center",
                          paddingBlock: 0,
                          color: "black",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Utilize nossa ferramenta de forma gratuita para  criar suas páginas livremente.",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Utilize nossa ferramenta de forma gratuita para  criar suas páginas livremente.",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "green",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Utilize nossa ferramenta de forma gratuita para  criar suas páginas livremente.",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "red",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Container flexível",
                        props: {
                          direction: "row",
                          verticalAlign: "center",
                          horizontalAlign: "center",
                          variant: "default",
                          paddingBlock: 0,
                          paddingInline: 0,
                          width: "400px",
                          gap: 0,
                          radius: 0,
                          semanticElement: "div",
                          wrap: "wrap",
                          content: [
                            {
                              type: "Botão/Link",
                              props: {
                                text: "Comece",
                                variant: "contained",
                                paddingBlock: "1rem",
                                width: 45,
                                color: "green",
                                textColor: "white",
                                justifyContent: "center",
                                radius: 10,
                                href: "https://www.youtube.com/playlist?list=PLpzmRsG7u_gpMogZpIcZnS0BsD3z8_x3n",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Imagem",
                  props: {
                    src: "https://i.pinimg.com/736x/44/c2/44/44c2445f9ba07d315728aa480df8fde2.jpg",
                    alt: "Imagem do banner",
                    width: 650,
                    height: 500,
                    radius: 10,
                  },
                },
              ],
            },
          },
        ],
      },
      render: ({ content: Content }) => (
        <div>
          <Content />
        </div>
      ),
    },
    Cards: {
      label: "Cards",
      fields: {
        content: {
          type: "slot",
        },
      },
      defaultProps: {
        content: [
          {
            type: "Container flexível",
            props: {
              direction: "row",
              verticalAlign: "center",
              horizontalAlign: "center",
              variant: "default",
              paddingBlock: 60,
              paddingInline: 0,
              width: "auto",
              gap: 30,
              radius: 0,
              semanticElement: "section",
              wrap: "wrap",
              content: [
                {
                  type: "Container flexível",
                  props: {
                    direction: "column",
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    variant: "card",
                    paddingBlock: 50,
                    paddingInline: 15,
                    width: "auto",
                    gap: 10,
                    radius: 10,
                    semanticElement: "div",
                    wrap: "wrap",
                    content: [
                      {
                        type: "Imagem",
                        props: {
                          src: "https://i.pinimg.com/736x/44/c2/44/44c2445f9ba07d315728aa480df8fde2.jpg",
                          alt: "Imagem do card",
                          width: 150,
                          height: 150,
                          radius: 100,
                        },
                      },
                      {
                        type: "Título",
                        props: {
                          title: "Seu card",
                          fontSize: 32,
                          heading: "h3",
                          textAlign: "center",
                          paddingBlock: 0,
                          color: "black",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Descreva seu card aqui",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Esse é um card muito elegante",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Container flexível",
                  props: {
                    direction: "column",
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    variant: "card",
                    paddingBlock: 50,
                    paddingInline: 15,
                    width: "auto",
                    gap: 10,
                    radius: 10,
                    semanticElement: "div",
                    wrap: "wrap",
                    content: [
                      {
                        type: "Imagem",
                        props: {
                          src: "https://i.pinimg.com/736x/44/c2/44/44c2445f9ba07d315728aa480df8fde2.jpg",
                          alt: "Imagem do card",
                          width: 150,
                          height: 150,
                          radius: 100,
                        },
                      },
                      {
                        type: "Título",
                        props: {
                          title: "Seu card",
                          fontSize: 32,
                          heading: "h3",
                          textAlign: "center",
                          paddingBlock: 0,
                          color: "black",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Descreva seu card aqui",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Esse é um card muito elegante",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Container flexível",
                  props: {
                    direction: "column",
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    variant: "card",
                    paddingBlock: 50,
                    paddingInline: 15,
                    width: "auto",
                    gap: 10,
                    radius: 10,
                    semanticElement: "div",
                    wrap: "wrap",
                    content: [
                      {
                        type: "Imagem",
                        props: {
                          src: "https://i.pinimg.com/736x/44/c2/44/44c2445f9ba07d315728aa480df8fde2.jpg",
                          alt: "Imagem do card",
                          width: 150,
                          height: 150,
                          radius: 100,
                        },
                      },
                      {
                        type: "Título",
                        props: {
                          title: "Seu card",
                          fontSize: 32,
                          heading: "h3",
                          textAlign: "center",
                          paddingBlock: 0,
                          color: "black",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Descreva seu card aqui",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Paragrafo",
                        props: {
                          text: "Esse é um card muito elegante",
                          fontSize: 18,
                          paddingBlock: 0,
                          color: "gray",
                          textAlign: "center",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      render: ({ content: Content }) => (
        <div>
          <Content />
        </div>
      ),
    },
    "Seção de texto": {
      label: "Seção de texto",
      fields: {
        content: {
          type: "slot",
        },
      },
      defaultProps: {
        content: [
          {
            type: "Container flexível",
            props: {
              direction: "column",
              verticalAlign: "center",
              horizontalAlign: "center",
              variant: "default",
              paddingBlock: 50,
              paddingInline: 15,
              width: "auto",
              gap: 10,
              radius: 0,
              semanticElement: "section",
              wrap: "wrap",
              content: [
                {
                  type: "Título",
                  props: {
                    title: "Seção de texto",
                    fontSize: 40,
                    heading: "h2",
                    textAlign: "center",
                    paddingBlock: 0,
                    color: "black",
                  },
                },
                {
                  type: "Paragrafo",
                  props: {
                    text: "Texto para você colocar na sua seção de texto. Fique a vontade.",
                    fontSize: 18,
                    paddingBlock: 0,
                    color: "gray",
                    textAlign: "center",
                  },
                },
              ],
            },
          },
        ],
      },
      render: ({ content: Content }) => (
        <div>
          <Content />
        </div>
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
          <main id="root" style={{ height: "200%" }}>
            {children}
          </main>
        </>
      );
    },
  },
};

export default config;
