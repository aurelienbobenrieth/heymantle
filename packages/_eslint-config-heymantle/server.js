/** @type { import("eslint").Linter.BaseConfig } */
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "packages/*/tsconfig.json",
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/member-ordering": [
      "warn",
      /**
       * Currently there is no --fix (auto-fix) for this rule.
       *
       * As a workaround we can rely on a VS Code extension to sort the members automatically.
       * @see: https://github.com/aljazsim/vs-code-typescript-class-organizer#member-ordering
       *
       * Hence, for the moment, we decide to use `vs-code-typescript-class-organizer default` ordering.
       *
       * Example .vscode user settings can be found in `./.vscode.example/settings.json`.
       *
       */
      {
        default: [
          // [vscode-no-map] means that vs-code-typescript-class-organizer rule has no matching rule in "@typescript-eslint/member-ordering
          // [eslint-no-map] means that @typescript-eslint/member-ordering rule has no matching rule in vs-code-typescript-class-organizer

          // [eslint-no-map] Index signature
          "signature",
          "readonly-signature",

          // properties
          // private static const properties
          // private const properties
          // private static readonly properties
          // private readonly properties
          // private static properties
          // private properties
          "private-decorated-field",
          "private-decorated-readonly-field",
          "private-instance-field",
          "private-instance-readonly-field",
          "#private-instance-field",
          "#private-instance-readonly-field",
          "private-static-readonly-field",
          "#private-static-readonly-field",
          "private-readonly-field",
          "#private-readonly-field",
          "private-static-field",
          "#private-static-field",
          "private-field",
          "#private-field",

          // protected static const properties
          // protected const properties
          // protected static readonly properties
          // protected readonly properties
          // protected static properties
          // protected properties
          "protected-static-field",
          "protected-static-readonly-field",
          "protected-decorated-field",
          "protected-decorated-readonly-field",
          "protected-instance-field",
          "protected-instance-readonly-field",
          "protected-abstract-field",
          "protected-abstract-readonly-field",
          "protected-field",
          "protected-readonly-field",

          // public static const properties
          // public const properties
          // public static readonly properties
          // public readonly properties
          // public static properties
          // public properties
          "public-static-field",
          "public-static-readonly-field",
          "public-decorated-field",
          "public-decorated-readonly-field",
          "public-instance-field",
          "public-instance-readonly-field",
          "public-abstract-field",
          "public-abstract-readonly-field",
          "public-field",
          "public-readonly-field",

          "static-field",
          "static-readonly-field",
          "instance-field",
          "instance-readonly-field",
          "abstract-field",
          "abstract-readonly-field",
          "decorated-field",
          "decorated-readonly-field",
          "field",
          "readonly-field",

          // [eslint-no-map] static initialization
          "static-initialization",

          // constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          // [vscode-no-map] public static indexes

          // [vscode-no-map] public indexes

          // [vscode-no-map] public abstract indexes

          // [vscode-no-map] protected static indexes

          // [vscode-no-map] protected indexes

          // [vscode-no-map] protected abstract indexes

          // [vscode-no-map] private static indexes

          // [vscode-no-map] private indexes

          // [vscode-no-map] private abstract indexes

          // public static accessors
          "public-static-get",
          "public-static-set",
          "static-get",
          "static-set",

          // public accessors
          "public-decorated-get",
          "public-instance-get",
          "public-get",
          "instance-get",
          "decorated-get",
          "get",
          "public-decorated-set",
          "public-instance-set",
          "public-set",
          "instance-set",
          "decorated-set",
          "set",

          // public abstract accessors
          "public-abstract-get",
          "public-abstract-set",
          "abstract-get",
          "abstract-set",

          // protected static accessors
          "protected-static-get",
          "protected-static-set",

          // protected accessors
          "protected-decorated-get",
          "protected-instance-get",

          // protected abstract accessors
          "protected-abstract-get",
          "protected-abstract-set",
          "protected-decorated-set",
          "protected-instance-set",
          "protected-get",
          "protected-set",

          // private static accessors
          "private-static-get",
          "#private-static-get",
          "private-static-set",
          "#private-static-set",

          // private accessors
          "private-decorated-get",
          "private-instance-get",
          "#private-instance-get",
          "private-get",
          "#private-get",
          "private-decorated-set",
          "private-instance-set",
          "#private-instance-set",
          "private-set",
          "#private-set",

          // [vscode-no-map] private abstract accessors

          // public static methods
          "public-static-method",

          // public methods
          "public-decorated-method",
          "public-instance-method",

          // public abstract methods
          "public-abstract-method",

          // protected static methods
          "protected-static-method",

          // protected methods
          "protected-decorated-method",
          "protected-instance-method",

          // protected abstract methods
          "protected-abstract-method",

          // private static methods
          "private-static-method",
          "#private-static-method",

          // private methods
          "private-decorated-method",
          "private-instance-method",
          "#private-instance-method",

          // [vscode-no-map] private abstract methods
        ],
      },
    ],
  },
};
