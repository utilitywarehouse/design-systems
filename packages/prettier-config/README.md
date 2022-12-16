# UW Prettier config

This is the standard Prettier config for UW projects.

## Installation

Install prettier along with this config

```console
yarn add prettier @utilitywarehouse/prettier-config
```

## Usage

There are a few different ways you can use this config in your project.

1. In your root package.json file add a `prettier` key and set it to the name of this config:

```json
{
  // ...
  "prettier": "@utilitywarehouse/prettier-config"
  // ...
}
```

2. If you don’t want to use package.json, you can use any of the supported
   extensions (e.g. `.prettierrc.yaml`), to export a string:

```
"@utilitywarehouse/prettier-config"
```

3. If you want to override any of these defaults, create a `.prettierrc.js` file
   with the following:

```js
module.exports = {
  ...require("@utilitywarehouse/prettier-config"),
  // Override values here
  printWidth: 125,
};
```

