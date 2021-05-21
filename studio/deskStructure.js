import S from "@sanity/desk-tool/structure-builder";
import { FcSettings, FcViewDetails, FcPaid } from "react-icons/fc";

const hiddenDocTypes = (listItem) =>
  !["home", "about", "productsPage", "contact", "products", "siteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Configurações")
        .icon(FcSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Textos")
        .icon(FcViewDetails)
        .child(
          S.list()
            .title("Páginas")
            .items([
              S.listItem()
                .title("Home")
                .child(S.document().schemaType("home").documentId("home")),
              S.listItem()
                .title("Sobre")
                .child(S.document().schemaType("about").documentId("about")),
              S.listItem()
                .title("Cafés")
                .child(S.document().schemaType("productsPage").documentId("productsPage")),
              S.listItem()
                .title("Contato")
                .child(S.document().schemaType("contact").documentId("contact")),
            ])
        ),
      S.listItem()
        .title("Produtos")
        .icon(FcPaid)
        .schemaType("products")
        .child(S.documentTypeList("products").title("Produtos")),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
