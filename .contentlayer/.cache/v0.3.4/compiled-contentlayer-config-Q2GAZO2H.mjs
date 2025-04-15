// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    file: {
      type: "string",
      description: "The name of the snippet",
      required: true
    },
    order: {
      type: "number",
      description: "The order of the snippet",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Snippet]
});
export {
  Snippet,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Q2GAZO2H.mjs.map
