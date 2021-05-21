export default {
  name: "contact",
  type: "document",
  title: "Contato",
  // __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "heroText",
      type: "hero",
      title: "Cabeçalho",
    },
    {
      name: "contactText",
      type: "textContent",
      title: "Texto da página de contato",
    },
    {
      name: "formCta",
      type: "string",
      title: "Chamada para ação em cima do formulário",
    },
  ],
};
