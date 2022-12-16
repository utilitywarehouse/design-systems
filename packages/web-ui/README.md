# React

React component library for building UW Web UIs.

## Contents

* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [MUI Components](#mui-components)
* [Styling](#styling)

## Installation

Assuming you already have React installed, to get started install the library and it's peer dependencies.

```console
yarn add @utilitywarehouse/web-ui @mui/material
```

### Fonts

You will also need to include the **Aeonik** and **Work Sans** fonts. The
easiest way to do this is to use the `@utilitywarehouse/fontsource` package.

```console
yarn add @utilitywarehouse/fontsource
```

## Getting started

Start by wrapping your application with the `ThemeProvider` component.
```tsx
import * as React from "react";
import { ThemeProvider } from "@utilitywarehouse/web-ui";
import App from "./App";

const App: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
```
