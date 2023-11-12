# @heymantle/tsconfig

This repo contains [`@heymantle`]'s opinionated [tsconfig] rules.

## Usage

To enable a [tsconfig], it is required to add an `extends` property within the `tsconfig.json` file of one of the package of this monorepo :

```json
"extends": "@heymantle/tsconfig/base.json",
```

If you need to create another set of properties for a specific package, you can create a new configuration file:

```
./react-project.json
```

and then import it in your package like this:

```json
"extends": "@heymantle/tsconfig/react-project.json",
```

[`@heymantle`]: https://github.com/aurelienbobenrieth
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
