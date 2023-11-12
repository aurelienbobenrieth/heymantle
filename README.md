![heymantle banner](.github/assets/banner.png)

# @heymantle

This repo is a collection of packages that make it easy for developers to integrate [Mantle] with their apps.

This repo uses [Turborepo] under the hood.

This mono-repo supports the following packages:

## Internal

[`eslint-config-heymantle`]

- Opinionated, internal package containing [ESLint] config files.

[`@heymantle/prettier-config`]

- Opinionated, internal package containing [Prettier] config files.

[`@heymantle/tsconfig`]

- Opinionated, internal package containing [tsconfig] files.

## Server

[`@heymantle/client`]

- Provides a fully typed [Mantle] API SDK to make developers' lives easier when using the [Mantle] API.

## Client

[`@heymantle/surface`]

- Provides a set of ready-to-use [React] ([Polaris]) components to integrate seamlessly with [Mantle] in a [Shopify] App.

[`eslint-config-heymantle`]: ./packages/_eslint-config-heymantle
[`@heymantle/prettier-config`]: ./packages/_heymantle-prettier-config
[`@heymantle/tsconfig`]: ./packages/_heymantle-tsconfig
[`@heymantle/client`]: ./packages/heymantle-client
[`@heymantle/surface`]: ./packages/heymantle-surface
[Turborepo]: https://turbo.build
[Mantle]: https://heymantle.com
[React]: https://react.dev
[Polaris]: https://polaris.shopify.com
[Shopify]: https://shopify.com
[Prettier]: https://prettier.io
[ESLint]: https://eslint.org
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
