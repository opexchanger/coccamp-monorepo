const blocksToHtml = require("@sanity/block-content-to-html");
const groq = require("groq");
const client = require("../utils/sanityClient");

function generateHtml(data) {
  return {
    ...data,
    aboutText: blocksToHtml({
      blocks: data.aboutText,
      serializers: aboutSerializer,
    }),
    productsText: blocksToHtml({
      blocks: data.productsText,
      serializers: productsSerializer,
    }),
  };
}

const h = blocksToHtml.h;

const aboutSerializer = {
  types: {
    block: (props) => h("p.what__text.body-text", props.children),
  },
};

const productsSerializer = {
  types: {
    block: (props) => h("p.products__text.body-text", props.children),
  },
};

const query = groq`
  *[_type == 'home'] {
    heroText,
    aboutText,
    aboutCTA,
    productsTitle,
    productsText,
    productsCTA,
    productsWatermark
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  return generateHtml(data[0]);
};
