# Material

Customer UI components standing on the shoulders of the [Material UI](https://next.material-ui.com/) React components library. The material package applies the themes from the [theme package](../theme) to the components available in Material UI.

Where possible this package will adhere to the same interfaces in Material UI, meaning most of the documentation on [Material UI](https://next.material-ui.com/) will also be relevant for this package. Due to the fact we are implementing the UI library to the spec of our themes, some components may have a more lightweight interface. When this is the case, the original Material UI components will still be available with a `Mui` prefix on the export. For example `MuiButton` will retrieve the original Material UI Button component.

## Contents

* [Storybook](#storybook)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [Components reference](#components-reference)
* [Hooks reference](#hooks-reference)
* [Contributing](#contributing)

## Storybook

* [Alpha alpha.storybook.customer-ui-material-uw.surge.sh](http://alpha.storybook.customer-ui-material-uw.surge.sh/)

On individual PRs which modify the material package, storybook deployment previews will be deployed per commit and commented back to the PR. You can also run storybook locally by running:

```shell
make material-storybook
```

## Installation

```shell
# npm
npm i --save @utilitywarehouse/customer-ui-material

# yarn
yarn add @utilitywarehouse/customer-ui-material
```

## Versioning

It is advisable to pin the version of this library in your project's
package.json file. The Customer Design System these components are based on is
still in flux and there can be breaking changes between alpha versions.

```json
"dependencies": {
  // specify the version of the library you want
  "@utilitywarehouse/customer-ui-material": "1.0.0-alpha.62",
  // otherwise you may unexpectedly install a more recent version that has breaking changes
  "@utilitywarehouse/customer-ui-material": "^1.0.0-alpha.62",
}
```

## Getting started

Start by wrapping your application with the `UIProvider` component. This renders
the necessary context providers, in the correct order, which contribute to the
state of the UI.

It's important to note that the `UIProvider` does not include the Material UI
`ThemeProvider` used to theme components. This is done by the
`BackgroundProvider` rendered by the `Background` component.

```TypeScript
import React from "react";
import { UIProvider } from "@utilitywarehouse/customer-ui-material";
import MyApplication from "./MyApplication";

/**
 * This will result in the required context providers being
 * rendered by a single provider component in the correct
 * order.
 */
const App: React.FC = () => (
  <UIProvider>
    <MyApplication />
  </UIProvider>
);

```

The following providers are rendered by the `UIProvider`.

- **StylesProvider** - Uses the internal `StylesProvider` component which is a
  wrapper around the [Material UI StylesProvider](https://next.material-ui.com/styles/api/#stylesprovider)
  component, and sets some default props.
- **DarkModeProvider** - Manages switching between dark and light mode. *Note
  that dark mode is not yet supported.*
- **ThemeVariantsProvider** - This is an internal provider which manages the
  compilation of themes from the [theme package](../theme).

## Theming

Theming is based on the [`Background`](docs/components/Background) component.
This means theme management can be handled internally to the material package.

The `Background` component renders a [Background context](docs/components/BackgroundContext),
giving components rendered further down the tree access to the Customer UI theme
resolved by this `Background` component.

Within the `Background` component, the Customer UI theme can be fetched via the
`useTheme` hook. Additionally, the Material UI theme used by components can be
fetched via the `useMuiTheme` hook.

```TypeScript
import { Background, useTheme, useMuiTheme } from "@utilitywarehouse/customer-ui-material";

const MyApplication: React.FC = () => (
  <Background backgroundColor="level0">
    <Main />
  </Background>
);

const Main: React.FC = () => {
  // Customer UI Theme object from the closest Background component
  const theme = useTheme();
  const muiTheme = useMuiTheme();

  return (
    ...
  );
};
```

The `Background` component provides the necessary context to render Customer UI
components with the expected brand styles.  A `Background` component isn't
strictly required, the default behaviour is to use the theme on the `level3`
background for light mode.  However to ensure the application behaves as
expected you should use a `Background` component.  You can have multiple
`Background` components within your app to render different background styles.
The Customer UI components will then render their styles appropriately depending
on the background color level, without needing to specify this at the individual
component level.

Themes are all managed internally with the UI library. There are two themes available:

* Customer UI theme, the theme object exported from [the theme package](../theme), accessed via the `useTheme` hook.
* Material UI theme, the [Material UI theme](https://next.material-ui.com/customization/default-theme/#main-content) accessed via the `useMuiTheme` hook.

The Customer UI theme is a more complete theme when it comes to application design, where as the Material UI theme is applied internally to the Material theme providers.

## Components reference

* [Background](docs/components/Background)
* [BackgroundContext](docs/components/BackgroundContext)
* [BackgroundProvider](docs/components/BackgroundProvider)
* [Button](docs/components/Button)
* [Card](docs/components/Card)
* [Container](docs/components/Container)
* [DarkModeProvider](docs/components/DarkModeProvider)
* [Grid](docs/components/Grid)
* [Hidden](docs/components/Hidden)
* [Icon](docs/components/Icon)
* [InteractiveCard](docs/components/InteractiveCard)
* [Link](docs/components/Link)
* [MenuItem](docs/components/MenuItem)
* [Typography](docs/components/Typography)
* [UIProvider](docs/components/UIProvider)

If the component you are looking for isn't listed above, provided it exists in Material UI you can import it `import { Component } from "@utilitywarehouse/customer-ui-material"`. Or contribute to Customer UI and help improve the package for others.

## Hooks reference

* [useDeviceSize](docs/hooks/useDeviceSize)

## Contributing

### Creating a new component

When creating a new component try and follow the patterns set out in [Material UI](https://next.material-ui.com/), this means we can leverage their documentation and general feel for the library.

To add a new component you will most likely need to create the component in the [theme package](../theme). This will let you define the style of the component. In some cases the component may already exist in the theme package.

It can be beneficial to develop the theme alongside the component, keep in mind you will need to deploy the theme on a separate PR prior to releasing the component in material to do this.

Once the theme is ready go ahead and create the component in `src/components`. If you are overriding or extending a Material UI component don't forget to update the export in the relevant `src/material` file by prefixing the exports you are overwriting with `Mui`. This allows for consumers to still have access to the underlying Material UI library.

When using Storybook to develop a new component, you will need to wrap the
component in a `Background` component, within your story, in order to have the
theme styles applied. It is preferable to present the component within each
`backgroundColor` level, so as to visualise it within each possible background
context.

### Concepts

The main thing to consider is the style overrides for the component. This should be done at a global level. You can do this by exporting a `getComponentThemeConfiguration` function, see other components for reference. You then need to update `src/components/index.ts` to include the newly exported `getComponentThemeConfiguration` function for your component. This will then be consumed by the theme in `src/lib/theme.ts`. From there define your component and its props.

### New component checklist

* Updated existing Material UI component export by prefixing `Mui` on overwritten exports
* Overwritten styles at a global level using `getComponentThemeConfiguration` within the component file
* Included the call to `getComponentThemeConfiguration` in `src/components/index.ts` for your new component
* Added automated tests for your component
* Added documentation for your new component and updated the `README.md` in the material package to reference this documentation at `docs/components/`
* Added your component to Storybook in `storybook/components/`
