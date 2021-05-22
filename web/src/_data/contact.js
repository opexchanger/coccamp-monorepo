const blocksToHtml = require("@sanity/block-content-to-html");
const groq = require("groq");
const client = require("../utils/sanityClient");

function generateHtml(data) {
  return {
    ...data,
    contactText: blocksToHtml({
      blocks: data.contactText,
      serializers: serializer,
    }),
  };
}

const h = blocksToHtml.h;

const serializer = {
  types: {
    block: (props) => h("p.body-text", props.children),
  },
};

const query = groq`
  *[_type == 'contact'] {
    heroText,
    contactText,
    formCta
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  return generateHtml(data[0]);
};
