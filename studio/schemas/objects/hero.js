export default {
  type: "object",
  title: "Cabeçalho",
  name: "hero",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título do Cabeçalho",
      validation: (Rule) => Rule.error("O título é obrigatório.").required(),
    },
    {
      name: "subtitle",
      type: "text",
      title: "Subtítulo do Cabeçalho",
      rows: 2,
      validation: (Rule) => Rule.error("O subtítulo é obrigatório.").required(),
    },
  ],
};
