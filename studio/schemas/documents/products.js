export default {
  name: "products",
  type: "document",
  title: "Produtos",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nome",
      validation: (Rule) =>
        Rule.error("O nome do produto é obrigatório.").required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Um identificador para constar no link do produto",
      options: {
        source: "name",
        slugify: (val) =>
          val
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[@#$%&*,.:;!?'"|(){}<>]/g, "")
            .replace(/\s+/g, "-"),
      },
    },
    {
      name: "image",
      type: "mainImage",
      title: "Imagem",
      validation: (Rule) =>
        Rule.error("A imagem do produto é obrigatória.").required(),
    },
    {
      name: "description",
      type: "textContent",
      title: "Descrição do produto",
      validation: (Rule) => [
        Rule.error("A descrição é obrigatória.").required(),
      ],
    },
  ],
};
