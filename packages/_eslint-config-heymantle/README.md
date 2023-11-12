# eslint-config-heymantle

This repo contains [`@heymantle`]'s opinionated [ESLint] configs.

## Usage

To enable a configuration file, it is required to add an `extends` property as well as a `root` property set to `true` within the `.eslintrc.cjs` file of one off the package of this monorepo :

```javascript
module.exports = {
  root: true,
  extends: ["heymantle/server"],
};
```

If you need to create another set of properties for a specific package, you can create a new configuration file:

```
./some-example-conf.js
```

and then import it in your package like this:

```javascript
module.exports = {
  root: true,
  extends: ["heymantle/some-example-conf"],
};
```

[`@heymantle`]: https://github.com/aurelienbobenrieth
[ESLint]: https://eslint.org
