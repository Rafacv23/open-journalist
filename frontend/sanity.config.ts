import { defineConfig } from "sanity";

export default defineConfig({
  schema: {
    types: [],
    typegen: {
      sourceFile: "./models/sanity-schema.json",
      outputFile: "./models/sanity-types.ts"
    }
  }
});
