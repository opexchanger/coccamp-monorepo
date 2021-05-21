export default {
  name: "home",
  type: "document",
  title: "Home",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "heroText",
      type: "hero",
      title: "Cabeçalho",
    },
    {
      name: "aboutText",
      type: "textContent",
      title: "Texto sobre a Coccamp",
      validation: (Rule) => [Rule.error("O texto é obrigatório.").required()],
    },
    {
      name: "aboutCTA",
      type: "string",
      title: `Texto do Link para página Sobre - Call to Action`,
    },
    {
      name: "productsWatermark",
      type: "string",
      title: `Marca d'água na seção sobre os produtos`,
    },
    {
      name: "productsTitle",
      type: "string",
      title: "Título da seção sobre os produtos",
      validation: (Rule) => Rule.error("O título é obrigatório.").required(),
    },
    {
      name: "productsText",
      type: "textContent",
      title: "Texto sobre os produto",
      validation: (Rule) => [Rule.error("O texto é obrigatório.").required()],
    },
    {
      name: "productsCTA",
      type: "string",
      title: `Texto do Link para página Cafés - Call to Action`,
    },
  ],
};
