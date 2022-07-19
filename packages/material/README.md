# Material

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ebc6bc5-b823-48e2-920c-785763e897d6/deploy-status)](https://app.netlify.com/sites/uw-customer-ui-material-storybook/deploys?branch=main)

Customer UI React components standing on the shoulders of the [MUI Material](https://mui.com/) library.

## Contents

* [Storybook](#storybook)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [MUI Components](#mui-components)
* [Styling](#styling)
* [Contributing](#contributing)

## Storybook

Storybook is available at
[uw-customer-ui-material-storybook](https://uw-customer-ui-material-storybook.netlify.app/),
this is deployed from the `main` branch.

Deployment Previews will be available on all PRs that make changes to the
`material` package.

Run storybook locally:

```console
pnpm storybook:start
```

## Installation

```console
npm i --save @utilitywarehouse/customer-ui-material
# or
yarn add @utilitywarehouse/customer-ui-material
```

## Getting started

Start by wrapping your application with the `ThemeProvider` component. This
will provide the necessary theming for the Customer UI components.

```tsx
import * as React from "react";
import { ThemeProvider } from "@utilitywarehouse/customer-ui-material";
import App from "./App";

const App: React.FC = () => (
  <CustomerUIProvider>
    <App />
  </CustomerUIProvider>
);

```

The following providers are rendered by the `ThemeProvider`.

- **StylesProvider** - This is a wrapper around the [MUI StylesProvider](https://mui.com/styles/api/#stylesprovider)
  component, and sets some default props. This provider relates to MUI's
  previous styling solution `JSS`, is currently retained only to support
  applications that consume this library and use `makeStyles` for styling.
  *Note that this option is [being deprecated](https://github.com/utilitywarehouse/customer-ui/issues/247).*
- **MuiThemeProvider** - Provides the mui theme needed for styling components.


Within the `ThemeProvider` component the mui theme used by components can be
fetched via the `useMuiTheme` hook.

```tsx
import { useMuiTheme } from "@utilitywarehouse/customer-ui-material";

...
const muiTheme = useMuiTheme();
```

If you need to, you can pass in a custom theme to the `ThemeProvider`.

```tsx
import {
ThemeProvider,
Theme,
theme as defaultTheme,
buttonClasses,
} from "@utilitywarehouse/customer-ui-material"

[...]

const theme: Theme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          [`&.${buttonClasses.primary}`]: {
            border: "2px solid hotpink",
          },
        },
      },
    },
  },
};

return (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
```

## MUI Components

Many Customer UI components reflect those in MUI, and so most of the
documentation on [MUI Material](https://mui.com/) will also be relevant for this
package. However this should not be relied upon and there are a number of
components whose structure, behaviour and API design may be different to the
underlying MUI component or entirely different from a component of the same name
in MUI. When this is the case, the original MUI components will still be
available with a `Mui` prefix on the export. For example `MuiButton` will
retrieve the original MUI Button component.

This means that you shouldn't need to directly install `@mui/material`,
`@mui/styled-engine` or `@mui/styles` as a separate dependency. If there is
something you need from these packages that Customer UI is not exporting please
raise an issue. Also, note that you may experience problems if you do separately
install any of the aforementioned `@mui` packages with a different version to
what is being used by Customer UI.

## Styling

The previous Material UI styling approach of using `makeStyles` is being
deprecated, please see [issue #247](https://github.com/utilitywarehouse/customer-ui/issues/247) for further information about this.
While this approach will be supported by Customer UI for the near future, it is
recommended that any style customizations make use of either the `styled()`
utility or the `sx` prop.

### The `styled()` Utility

The `styled()` utility is based on the same utility from [Styled Components](https://styled-components.com/)
and [emotion](https://emotion.sh/docs/styled) and is how MUI styles it's own
components. It is great for building components that need to support a wide
variety of contexts or that may be used in multiple places.

This basic example shows how to use `styled()`

```tsx
import * as React from 'react';
import { styled } from '@utilitywarehouse/customer-ui-material';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

export default function BasicUsage() {
  return <MyComponent>Styled div</MyComponent>;
}
```

Further examples and explanation can be found in the [MUI docs](https://mui.com/system/styled/).
[Issue #249](https://github.com/utilitywarehouse/customer-ui/issues/249) also
links to a number of PRs migrating Customer UI components from `makeStyles` to
`styled()` and may prove useful when carrying out a similar migration in your
application.

### The `sx` Prop

The `sx` prop is great for applying one-off styles. It is based on the
[emotion `css` prop](https://emotion.sh/docs/css-prop)
and [Theme UI's own `sx` prop](https://theme-ui.com/sx-prop/).
The `sx` prop utilises a [superset of CSS](https://mui.com/system/basics/#superset-of-css), so you can use the full breadth of
regular CSS, as well as [shorthand properties](https://mui.com/system/basics/#shorthands), and access theme properties directly.

```tsx
<Box
  sx={{
    boxShadow: 1, // theme.shadows[1]
    color: 'primary.main', // theme.palette.primary.main
    m: 1, // margin: theme.spacing(1)
    paddingX: 2, // paddingLeft: theme.spacing(2) & paddingRight: theme.spacing(2)
    zIndex: 'tooltip', // theme.zIndex.tooltip
  }}
>
```

This is an example from the [My Account application](https://github.com/utilitywarehouse/dex-my-account/blob/main/packages/fixed-line/src/components/ErrorScreen.tsx).

```tsx
import * as React from 'react'
import { Box, useDeviceSize } from '@utilitywarehouse/customer-ui-material'

const ErrorScreen: React.FC = ({ children }) => {
  const device = useDeviceSize()
  const isMobile = device === 'mobile'

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr auto',
        gap: 5,
        alignItems: 'center',
        justifyItems: isMobile ? 'center' : 'start',
        height: '100%',
        paddingY: 3,
      }}
    >
      {children}
    </Box>
  )
}
```

You can read more about the `sx` prop in the MUI docs.
* [One-off customization](https://mui.com/customization/how-to-customize/#1-one-off-customization)
* [The sx prop](https://mui.com/system/basics/#the-sx-prop)

## Contributing

### Creating a new component

When creating a new component try and follow the patterns set out in
[MUI](https://mui.com/), this means we can leverage their
documentation and general feel for the library.

To add a new component you will most likely need to create the component in the
[theme package](../theme). This will let you define the style of the component.
In some cases the component may already exist in the theme package.

It can be beneficial to develop the theme alongside the component, keep in mind
you will need to deploy the theme on a separate PR prior to releasing the
component in material to do this.

Once the theme is ready, go ahead and create the component in `src/components`.
If you are overriding or extending a MUI component don't forget to update the
export in the relevant `src/material` file by prefixing the exports you are
overwriting with `Mui`. This allows for consumers to still have access to the
underlying Material UI library.

When using Storybook to develop a new component, you will need to wrap the
component in a `Background` component, within your story, in order to have the
theme styles applied. It is preferable to present the component within each
`backgroundColor` level, so as to visualise it within each possible background
context. You can use the
[`BackgroundStack`](./stories/utils/BackgroundStack.tsx) component for this if
you wish.

### Concepts

The main thing to consider is the style overrides for the component. This should
be done at a global level. You can do this by exporting a
`getComponentThemeConfiguration` function, see other components for reference.
You then need to update `src/components/index.ts` to include the newly exported
`getComponentThemeConfiguration` function for your component. This will then be
consumed by the theme in `src/lib/theme.ts`. From there define your component
and its props.

### New component checklist

* Updated existing MUI component export by prefixing `Mui` on overwritten exports
* Overwritten styles at a global level using `getComponentThemeConfiguration` within the component file
* Included the call to `getComponentThemeConfiguration` in `src/components/index.ts` for your new component
* Added automated tests for your component
* Added documentation for your new component and updated the `README.md` in the material package to reference this documentation at `docs/components/`
* Added your component to Storybook in `storybook/components/`
