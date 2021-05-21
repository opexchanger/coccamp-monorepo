const blocksToHtml = require("@sanity/block-content-to-html");
const groq = require("groq");
const client = require("../utils/sanityClient");

function generateHtml(data) {
  return {
    ...data,
    aboutTextOne: blocksToHtml({
      blocks: data.aboutTextOne,
      serializers: aboutSerializer,
      renderContainerOnSingleChild: true,
      className: "who__text who__text--1",
    }),
    aboutTextTwo: blocksToHtml({
      blocks: data.aboutTextTwo,
      serializers: aboutSerializer,
    }),
  };
}

const h = blocksToHtml.h;

const aboutSerializer = {
  types: {
    block: (props) => h("p.body-text", props.children),
  },
};

const query = groq`
  *[_type == 'about'] {
    heroText,
    aboutTextOne,
    aboutTextTwo,
    textPartner
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  return generateHtml(data[0]);
};
