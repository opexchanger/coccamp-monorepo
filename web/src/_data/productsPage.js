const groq = require("groq");
const client = require("../utils/sanityClient");

const query = groq`
  *[_type == 'productsPage'] {
    heroText,
    textCta,
    textPartner,
    textClient
  }
`;

module.exports = async function () {
  const data = await client.fetch(query).catch((err) => console.error(err));

  return data[0];
};
