# Theme

The theme package builds on the [design tokens](../design-tokens) package by giving these tokens meaning with respect to the [design system](https://utilitywarehouse.invisionapp.com/dsm/utilitywarehouse/design-system). This intermediary layer provides the interface for high level component libraries such as the [material package](../packages/material) to consume the theme by applying minimal logic.

The theme package should inherently be the source of truth when conforming to the design system.

## Concepts

One of the main goals within the theme package is to perform as much theme related logic in a single location. As a lot of the components within our design system are dependent on the background context we decided to make the background levels a first class citizen within the theme package. What this means is we can generate full theme structures for the following variants:

- Colour scheme; light or dark mode
- Backdrop level; from the [backdrops section](https://utilitywarehouse.invisionapp.com/dsm/utilitywarehouse/design-system/folder/colors/5dc2c340ef4827a55ced9ce3) within our DSM.

## Installation

```shell
# npm
npm i --save @utilitywarehouse/customer-ui-theme

# yarn
yarn add @utilitywarehouse/customer-ui-theme
```

## Usage

```TypeScript
import { getTheme } from "@utilitywarehouse/customer-ui-theme";

// Gets the theme for light mode on a level0 backdrop
// returns a Theme object "import { Theme } from '@utilitywarehouse/customer-ui-theme'"
getTheme("light", "level0");

```
