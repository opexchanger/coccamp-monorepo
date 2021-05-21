// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import siteSettings from "./documents/siteSettings";
import home from "./documents/home";
import about from "./documents/about";
import productsPage from "./documents/productsPage";
import contact from "./documents/contact";
import products from "./documents/products";

// Object types
import textContent from "./objects/textContent";
import mainImage from "./objects/mainImage";
import hero from "./objects/hero";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "site",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    home,
    about,
    productsPage,
    contact,
    products,
    textContent,
    mainImage,
    hero,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
