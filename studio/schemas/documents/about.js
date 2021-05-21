export default {
  name: "about",
  type: "document",
  title: "Sobre nós",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "heroText",
      type: "hero",
      title: "Cabeçalho",
    },
    {
      name: "aboutTextOne",
      type: "textContent",
      title: "Texto sobre a Coccamp - primeiro bloco",
    },
    {
      name: "aboutTextTwo",
      type: "textContent",
      title: "Texto sobre a Coccamp - segundo bloco",
    },
    {
      name: "textPartner",
      type: "string",
      title: "Texto do botão para ser parceiro",
    },
  ],
};
