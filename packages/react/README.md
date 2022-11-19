# React

React component library for building UW Web UIs.

## Contents

* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [MUI Components](#mui-components)
* [Styling](#styling)

## Installation

This library has a number of peer dependencies:

- "@mui/material"
- "@utilitywarehouse/customer-ui-design-tokens"
- "@utilitywarehouse/customer-ui-react-icons"
- "react"
- "react-dom"

Assuming you already have React installed, to get started install the library and it's peer dependencies.

```console
yarn add @utilitywarehouse/uw-web-ui-react @mui/material @utilitywarehouse/customer-ui-design-tokens @utilitywarehouse/customer-ui-react-icons
```

### Fonts

You will also need to include the **Aeonik** and **Work Sans** fonts. The
easiest way to do this is to use the `uw-ui-fonts` package.

```console
yarn add @utilitywarehouse/uw-ui-fonts
```

## Getting started

Start by wrapping your application with the `ThemeProvider` component.
```tsx
import * as React from "react";
import { ThemeProvider } from "@utilitywarehouse/uw-web-ui-react";
import App from "./App";

const App: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```
