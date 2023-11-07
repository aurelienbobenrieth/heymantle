/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: false,

  plugins: [
    "prettier-plugin-packagejson",
    "prettier-plugin-jsdoc",
    "@trivago/prettier-plugin-sort-imports",
  ],

  // @trivago/prettier-plugin-sort-imports
  // https://github.com/trivago/prettier-plugin-sort-imports#usage
  importOrder: ["<THIRD_PARTY_MODULES>", "^@(.*)$", "^#/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
