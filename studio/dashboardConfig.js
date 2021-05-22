export default {
  widgets: [
    { name: "structure-menu" },

    { name: "project-users", layout: { height: "auto" } },

    {
      name: "netlify",
      options: {
        description:
          "NOTA: Depois de um clique, aguarde, caso contrário o deploy será executado mais de uma vez.",
        sites: [
          // {
          //   buildHookId: "60a2c2e82b5b3f121f9a7af2",
          //   title: "Sanity Studio",
          //   name: "sanity-eleventy-blog-studio-5pwdxk61",
          //   apiId: "36811983-19e3-4aca-b552-a8f0610ab948",
          // },
          {
            buildHookId: "60a2c2e951f4f800e255c0e0",
            title: "Website",
            name: "sanity-eleventy-blog-web-hvqmdbi3",
            apiId: "78decc13-7759-4fe4-accc-d3a04ed6edac",
          },
        ],
      },
    },
  ],
};
