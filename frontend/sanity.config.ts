import { defineConfig } from "sanity";

export default defineConfig({
  projectId: "your-project-id",
  dataset: "production",
  schema: {
    types: [],
    typegen: {
      sourceFile: "./models/sanity-schema.json",
      outputFile: "./models/sanity-types.ts"
    }
  },
  plugins: []
});
