import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    file: {
      type: "string",
      description: "The name of the snippet",
      required: true,
    },
    filePath: {
      type: "string",
      description: "The path of the snippet",
      required: true,
    },
    order: {
      type: "number",
      description: "The order of the snippet",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the snippet",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (_) => _._raw.sourceFileName.replace(/\.[^.$]+$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Snippet],
});