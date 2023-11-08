import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "#core": resolve(__dirname, "./src/core"),
      "#test": resolve(__dirname, "./src/test"),
      "#types": resolve(__dirname, "./src/types"),
    },
  },
  test: {
    include: ["./src/**/*.+(test|it-test|e2e-test).ts"],
  },
});
