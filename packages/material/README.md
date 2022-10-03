# Material

Customer UI React components standing on the shoulders of the [MUI Material](https://mui.com/) library.

## Contents

* [Storybook](#storybook)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [MUI Components](#mui-components)
* [Styling](#styling)

## Installation

Install the library and it's peer dependencies.

```console
yarn add @utilitywarehouse/customer-ui-material @mui/material @emotion/react @emotion/styled
```

## Storybook

### Release Version

Storybook, based on the most recent release, is available at
[cwui-storybook.dev.merit.uw.systems](https://cwui-storybook.dev.merit.uw.systems/).
This requires access via the VPN.

### Local Version

Run storybook locally, from the root directory:

```console
pnpm build
pnpm storybook:start
```

### Deploy Previews

There are deploy previews on each PR, with a URL like this:
`http://uw-telecom-storybooks-dev.s3-website-eu-west-1.amazonaws.com/deploy-preview-{PR number}`.

These are provisioned on AWS S3 via
[this terraform config](https://github.com/utilitywarehouse/terraform/blob/master/aws/dev/telecom/cwui-storybook.tf),
and will be removed when the PR gets merged.

### Fonts

You will also need to install the [UW UI Fonts](https://github.com/utilitywarehouse/uw-ui/tree/main/packages/fonts)
package to be able to access the Aeonik & Work Sans fonts used.

```console
yarn add @utilitywarehouse/uw-ui-fonts
```

## Getting started

Start by wrapping your application with the `ThemeProvider` component. This
will provide the necessary theming for the Customer UI components.

```tsx
import * as React from "react";
import { ThemeProvider } from "@utilitywarehouse/customer-ui-material";
import App from "./App";

const App: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
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

