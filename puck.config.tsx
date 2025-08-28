import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Fodase: { title: string; color: string };
  Fodasse: { title: string; color: string };
  Section: any;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Fodase: {
      fields: {
        title: { type: "text" },
        color: { type: "number" },
      },
      defaultProps: {
        title: "fodasesese",
        color: "green",
      },
      render: ({ title, color }) => (
        <div style={{ backgroundColor: "blue", padding: 32 }}>
          <button style={{ padding: 10, backgroundColor: color }}>
            {title}
          </button>
        </div>
      ),
    },
    Fodasse: {
      fields: {
        title: { type: "text" },
        color: { type: "number" },
      },
      defaultProps: {
        title: "fodasesese",
        color: "green",
      },
      render: ({ title, color }) => (
        <div style={{ backgroundColor: "blue", padding: 32 }}>
          <button style={{ padding: 10, backgroundColor: color }}>
            {title}
          </button>
        </div>
      ),
    },
    Section: {
      fields: {
        content: { type: "slot", allow: ["HeadingBlock", "ParagraphBlock"] }, // <- era "components"
        padding: {
          type: "select",
          options: [
            { label: "Pequeno", value: "py-4" },
            { label: "Médio", value: "py-8" },
            { label: "Grande", value: "py-12" },
          ],
        },
      },
      // default inicial dos fields (veja item 2 abaixo)
      defaultProps: { padding: "py-8" },

      // note o pattern: { content: Content } e depois <Content />
      render: ({ content: Content, padding }) => (
        <section className={`container mx-auto ${padding}`}>
          <Content minEmptyHeight={160} />
        </section>
      ),
    },
  },
};

export default config;
