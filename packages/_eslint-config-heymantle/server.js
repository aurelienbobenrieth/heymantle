/** @type { import("eslint").Linter.BaseConfig } */
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ["prettier", "eslint:recommended"],
  plugins: ["prettier", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "packages/*/tsconfig.json",
      },
      extends: ["plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
    },
  ],
};
