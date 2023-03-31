import type { Config } from "prismic-ts-codegen";

const config: Config = {
  repositoryName: "https://tothemoun.prismic.io/api/v2",
  output: "./types.generated.ts",
  models: ["./customtypes/**/index.json", "./slices/**/model.json"],
};

export default config;
