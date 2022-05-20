# Material

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ebc6bc5-b823-48e2-920c-785763e897d6/deploy-status)](https://app.netlify.com/sites/uw-customer-ui-material-storybook/deploys)

Customer UI React components standing on the shoulders of the [MUI Material](https://mui.com/) library.

## Contents

* [Storybook](#storybook)
* [Installation](#installation)
* [Getting started](#getting-started)
* [Theming](#theming)
* [Mui Components](#mui-components)
* [Migration to v1](#migration-from-alpha-pre-release-to-v1)
* [Components reference](#components-reference)
* [Hooks reference](#hooks-reference)
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

Start by wrapping your application with the `UIProvider` component. This renders
the necessary context providers, in the correct order, which contribute to the
state of the UI.

It's important to note that the `UIProvider` does not include the MUI
`ThemeProvider` used to theme components. This is done by the
`BackgroundProvider` rendered by the `Background` component.

```tsx
import * as React from "react";
import { UIProvider } from "@utilitywarehouse/customer-ui-material";
import Content from "./Content";

/**
 * This will result in the required context providers being
 * rendered by a single provider component in the correct
 * order.
 */
const App: React.FC = () => (
  <UIProvider>
    <Content />
  </UIProvider>
);

```

The following providers are rendered by the `UIProvider`.

- **StylesProvider** - Uses the internal `StylesProvider` component which is a
  wrapper around the [MUI StylesProvider](https://mui.com/styles/api/#stylesprovider)
  component, and sets some default props. This provider relates to MUI's
  previous styling solution `JSS`, is currently retained only to support
  applications that consume this library and use `makeStyles` for styling.
  *Note that this option is [being deprecated](https://github.com/utilitywarehouse/customer-ui/issues/247).*

- **DarkModeProvider** - Manages switching between dark and light mode. *Note
  that dark mode is not yet supported.*
- **ThemeVariantsProvider** - This is an internal provider which manages the
  compilation of themes from the [theme package](../theme).

## Theming

Theming is handled by the [`Background`](docs/components/Background) component,
which renders a [Background context](docs/components/BackgroundContext),
giving components rendered further down the tree access to the Customer UI
theme.

Within the `Background` component, the Customer UI theme can be fetched via the
`useTheme` hook. Additionally, the MUI theme used by components can be
fetched via the `useMuiTheme` hook.

```tsx
import { Background, useTheme, useMuiTheme } from "@utilitywarehouse/customer-ui-material";

const App: React.FC = () => (
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

The Customer UI theme is a more complete theme when it comes to application design, where as the MUI theme is applied internally to the Material theme providers.

The `Background` component provides the necessary context to render Customer UI
components with the expected brand styles. A `Background` component isn't
strictly required, the default behaviour is to use the theme on the `level3`
background for light mode. However to ensure the application behaves as
expected you should use a `Background` component.  You can have multiple
`Background` components within your app to render different background styles in
different areas of your application.
The Customer UI components will then render their styles appropriately depending
on the background color level, without needing to specify this at the individual
component level.

## Mui Components

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

## Migration from alpha pre-release to v1

This guide covers all pre-release `alpha` releases from `alpha.54` and after.
If you run into any problems migrating from an earlier version please open an
issue.

There may be some minor inconsistencies not documented here, but these are the
major changes to watch out for. Please open an issue or PR if you find something
worth documenting for others, thankyou!

### Known issues

- #339 There is a JSS type mismatch when upgrading to `v1.0.0`. This is resolved
  by installing JSS as a dev dependency in your app package; `yarn add -D jss`.

### Example migrations

- [dex-my-account(fixed-line) #510](https://github.com/utilitywarehouse/dex-my-account/pull/510)
- [dex-my-account(insurance) #555](https://github.com/utilitywarehouse/dex-my-account/pull/555)

### `Background` level 1 backgroundColor

> from *alpha.72* to *v1.0.1*

- #335 Between versions `v1.0.0-alpha.72` and `v1.0.1` the level 1
  backgroundColor for the `Background` component was `darkTint` instead of
  purple. This doesn't change the API contract but you should double check there
  are no unexpected colour changes when upgrading

### `useDeviceSize` hook

> from *alpha.75* and below

- #222 The return value from the `useDeviceSize` hook was changed to return more
  detailed information.

```diff
- const deviceSize = useDeviceSize();
+ const {
+   deviceSize, // "mobile", "tablet" or "desktop"
+   isMobile, // boolean
+   isTablet, // boolean
+   isDesktop, // boolean
+ } = useDeviceSize();
```

### `Typography` component props

> from *alpha.66* and below

- Rename `state` prop `color`.

```diff
- <Typography state="secondary">
+ <Typography color="secondary">
```

- Rename `default` color (previously `state` prop) to `primary`.

```diff
- <Typography state="default">
+ <Typography color="primary">
```

- Rename `default` variant to `body`.

```diff
- <Typography variant="default">
+ <Typography variant="body">
```

### `Typography` component variants

> from *alpha.64* and below

Style changes made in [this commit](https://github.com/utilitywarehouse/customer-ui/commit/09897591a33be7aa8bebc93c99e9ef4dbf95f1a9)

```diff
+ displayHeading
h1
h2
h3
h4
- h5
- headline
- subheading
body
- small
- label
caption
- footnote
- interactive
- inherit
+ subtitle
+ legalNote
```

While some variants have the same name as before, they may not necessarily be
the same.
There is not a 1 to 1 replacement of old to new variants, so some discretion
from devs and collaboration with Design/UX will need to happen to ensure UI's
are kept consistent.

> View the previous `Typography` variants in [this old storybook](https://86ace4d.storybook.customer-ui-material-uw.surge.sh/?path=/story/stories-components-typography--h-1).

|variant|old desktop font size(px)|new desktop font size(px)|old mobile font size(px)|new mobile font size(px)|
|-|:-:|:-:|:-:|:-:|
| :heavy_plus_sign: `displayHeading`|-|64|-|42|
| `h1`|64|42|40|32|
| `h2`|40|32|28|28|
| `h3`|33|24|18|22|
| `h4`|20|20|14|18|
| :heavy_minus_sign: `h5` |16|-|12|-|
| :heavy_minus_sign: `headline`|16|-|16|-|
| :heavy_minus_sign: `subheading`|15|-|15|-|
| `body`|20|16|16|16|
| :heavy_minus_sign: `small`|16|-|14|-|
| :heavy_minus_sign: `label`|13|-|12|-|
| `caption`|12|12|12|12|
| :heavy_minus_sign: `footnote`|13|-|13|-|
| :heavy_minus_sign: `interactive`|18|-|18|-|
| :heavy_plus_sign: `subtitle`|-|20|-|18|
| :heavy_plus_sign: `legalNote`|-|14|-14|

:heavy_plus_sign: New variant
:heavy_minus_sign: Removed variant

For a full breakdown of Customer UI typography please see the [Figma files](https://www.figma.com/file/4FFYTLWJ2hQpj36JplQQUw/UW-Web-UI---MASTER?node-id=38%3A884).

### `useTheme` hook

> from *alpha.57* and below

- Rename `useTheme` to `useMuiTheme`.
- `useTheme` now returns the Customer UI theme object.

```diff
import { useTheme, useMuiTheme } from "@utilitywarehouse/customer-ui-material";

...

- // Material UI Theme object
- const theme = useTheme()
+ // Customer UI Theme object from the closest Background component
+ const theme = useTheme()
+ // Material UI Theme object
+ const theme = useMuiTheme()
```

### `Menu` component

> from *alpha.54* and below

- Rename `ref` to `forwardedRef`

### Removed components

> from *alpha.56* and below

- Remove `MuiHidden`
- Remove `withWidth`
- Remove `experimentalStyled`

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

If the component you are looking for isn't listed above, provided it exists in
MUI, you can import it

```tsx
import { Component } from "@utilitywarehouse/customer-ui-material"
```

Or contribute to Customer UI and help improve the package for others.

## Hooks reference

* [useDeviceSize](docs/hooks/useDeviceSize)

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
