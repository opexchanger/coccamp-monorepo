export default {
  name: "productsPage",
  type: "document",
  title: "Nossos cafés",
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "heroText",
      type: "hero",
      title: "Cabeçalho",
    },
    {
      name: "textCta",
      type: "string",
      title: "Chamada para ação antes dos links",
    },
    {
      name: "textPartner",
      type: "string",
      title: "Texto do botão para ser parceiro",
    },
    {
      name: "textClient",
      type: "string",
      title: "Texto do botão para comprar café",
    },
  ],
};
