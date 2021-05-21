export default {
  widgets: [
    { name: "structure-menu" },

    { name: "project-users", layout: { height: "auto" } },

    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "60a2c2e82b5b3f121f9a7af2",
                  title: "Sanity Studio",
                  name: "sanity-eleventy-blog-studio-5pwdxk61",
                  apiId: "36811983-19e3-4aca-b552-a8f0610ab948",
                },
                {
                  buildHookId: "60a2c2e951f4f800e255c0e0",
                  title: "Blog Website",
                  name: "sanity-eleventy-blog-web-hvqmdbi3",
                  apiId: "78decc13-7759-4fe4-accc-d3a04ed6edac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/opexchanger/sanity-eleventy-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-eleventy-blog-web-hvqmdbi3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
  ],
};
