# Material

Customer UI components standing on the shoulders of the [Material UI](https://next.material-ui.com/) React components library. The material package applies the themes from the [theme package](../theme) to the components available in Material UI.

Where possible this package will adhere to the same interfaces in Material UI, meaning most of the documentation on [Material UI](https://next.material-ui.com/) will also be relevant for this package. Due to the fact we are implementing the UI library to the spec of our themes, some components may have a more lightweight interface. When this is the case, the original Material UI components will still be available with a `Mui` prefix on the export. For example `MuiButton` will retrieve the original Material UI Button component.

## Contents

* [Storybook](#storybook)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [Components reference](#components-reference)
* [Contributing](#contributing)

## Storybook

* [Alpha alpha.storybook.customer-ui-material-uw.surge.sh](http://alpha.storybook.customer-ui-material-uw.surge.sh/)
* [Main storybook.customer-ui-material-uw.surge.sh](http://storybook.customer-ui-material-uw.surge.sh/)

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

## Getting started

```TypeScript
import React from "react";
import { DarkModeProvider, ThemeProvider } from "@utilitywarehouse/customer-ui-material";
import MyApplication from "./MyApplication";

/**
 * This is the most basic implementation using dark mode, the providers
 * should be rendered at the root of your application.
 * 
 * Note that the DarkModeProvider is optional and the colour scheme will
 * default to "light".
 */
const App: React.FC = () => (
  <DarkModeProvider>
    <ThemeProvider>
      <MyApplication />
    </ThemeProvider>
  </DarkModeProvider>
);

```

## Theming

Themes are all managed internally with the UI library. There are two types of themes available:

* Customer UI theme, the theme object exported from [the theme package](../theme).
* Material UI theme, the [Material UI theme](https://next.material-ui.com/customization/default-theme/#main-content).

The Customer UI theme is a more complete theme when it comes to application design, where as the Material UI theme is applied internally to the Material theme providers.

Theming is also based on the [Background](docs/components/Background) component. This allows theme management to be handled internally to the material package. The theme can be fetched via the [background context](docs/components/BackgroundContext), which will give components rendered further down the tree access to the Customer UI theme resolved by the background component.

## Components reference

* [Background](docs/components/Background)
* [BackgroundContext](docs/components/BackgroundContext)
* [Button](docs/components/Button)
* [DarkModeProvider](docs/components/DarkModeProvider)
* [ThemeProvider](docs/components/ThemeProvider)
* [Typography](docs/components/Typography)

If the component you are looking for isn't listed above, provided it exists in Material UI you can import it `import { Component } from "@utilitywarehouse/customer-ui-material"`. Or contribute to Customer UI and help improve the package for others.
