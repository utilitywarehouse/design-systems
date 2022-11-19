# Material Migration Guide

This guide should cover any significant changes between major versions.
There may be some minor inconsistencies not documented here, but these are the
major changes to watch out for. Please open an issue or PR if you find something
worth documenting for others, thankyou!

- [v1 to v2](#v1-to-v2)
  - [MUI and emotion dependencies](#mui-and-emotion-dependencies)
  - [Update Root Provider](#update-root-provider)
  - [Update Theme Hooks](#update-theme-hooks)
  - [makeStyles Styling](#makestyles-styling-method)
  - [Replace System Props with `sx`](#replace-system-props-with-sx)
  - [withBackground HOC](#withbackground-hoc)
  - [Background Colour Level Naming](#background-colour-level-naming)
  - [Button Component](#button-component)
  - [Typography Component](#typography-component)
  - [Link Component](#link-component)
  - [Grid Component](#grid-component)
  - [Spacer Component](#spacer-component)
- [Pre-release alpha versions to v1](#pre-release-alpha-versions-to-v1)

## v1 to v2

### MUI and emotion dependencies

The underlying MUI & emotion packages this library is built upon have been moved
from being direct dependencies to peer dependencies, and we are now only
exporting the bare essentials from MUI. This has been done for the
following reasons;

- fix historic dependency mismatch issues
- reduce bundle size
- provide greater insight into what components are specific to CWUI and what are
  stock MUI
- give us greater ownership over the custom components and their documentation
  and indicate that docs for stock MUI components should be sourced from MUI
  themselves, while providing docs & guidelines for our custom CWUI components
- avoid breaking API changes, and a major version release, when we move a
  component from stock MUI to custom CWUI as they will be imported from
  different libraries.
- no need to maintain a long list of components, hooks, functions, types etc.
  that are being exported from MUI

This means that the MUI & emotion packages need to be installed when installing
this library and any MUI components or methods not specifically a part of
Customer Web UI need to be updated as imports from MUI.

```console
yarn add @utilitywarehouse/customer-ui-material @mui/material @emotion/react @emotion/styled
```

```diff
- import {
-   Divider,
-   Stack,
-   IconButton,
-   Dialog,
-   FormControlLabel,
-   Checkbox
- } from "@utilitywarehouse/customer-ui-material"
+ import Divider from "@mui/material/Divider"
+ import Stack from "@mui/material/Stack"
+ [...]
```

### Update Root Provider

The root provider has been renamed.

```diff
- <UIProvider>
+ <ThemeProvider>
    <App />
+ </ThemeProvider>
- </UIProvider>
```

The underlying MUI `ThemeProvider` has been moved into this renamed root
provider, from the `Background` component.

It is also now possible to pass a `theme` object to the `ThemeProvider`, that will
then be merged with the existing theme.

### Update Theme Hooks

- `useMuiTheme` hook has been removed.
- `useTheme` now returns the MUI theme and not the legacy Customer UI theme.
- The Customer UI theme has been removed and is no longer available.
- The `backdropLevel` value has been renamed to `backgroundColor` and is now
  available through the new `useBackground` hook.
- The unsupported dark mode implementation has been removed and so the
  `colorScheme` value is no longer available.

```diff
- import { useTheme, useMuiTheme } from '@utilitywarehouse/customer-ui-material';
+ import { useTheme, useBackground } from '@utilitywarehouse/customer-ui-material';
[...]
- const { backdropLevel, colorScheme } = useTheme();
- const theme = useMuiTheme();
+ const theme = useTheme();
+ const { backgroundColor } = useBackground();
```

### `makeStyles` styling method

The `makeStyles` method of styling is now officially deprecated and will be
removed in the next major release. Please replace any instances of `makeStyles`
with either the `styled` or `sx` methods of styling. For more details on this
please see the [guide to styling](https://github.com/utilitywarehouse/customer-web-ui/blob/main/packages/material/README.md#styling).

### Replace System Props with `sx`

Moving forward `sx` is the preferred styling solution and should be used instead
of the system props. The system props have been deprecated across all components
and in some cases already removed. All components now expose the `sx` prop for
styling.

```diff
  <Component
-   margin={2}
-   padding={4}
+   sx={{
+     margin: 2,
+     padding: 4,
+   }}
  />
```

The following components no longer support the system props:
- `Icon`
- `Background`
- `Card`

### `withBackground` HOC

The `withBackground` higher order component has been removed, please wrap your
components with a `Background` component instead.

```diff
  const Component = () => (
+   <Background>
      [...]
+   </Background>
  )

- export default withBackground(Component)
+ export default Component
```

### Background Colour Level Naming

The options for the `backgroundColor` prop on the `Background` component have
been updated and renamed. The `level2`/`midTint` colour has been removed and
the `levels` naming convention has been replaced with the colour names.

While there were conversations around establishing a semantic naming convention,
these have stalled and would benefit from a wider approach that considers all
colour usage and intent, across components and designs. This change was felt to
be the lowest impact interim solution as it requires no changes to UX designs or
conventions, and provides a simple clarity when translating designs to code.

When updating to this change the `backgroundColor` prop on the `Background` &
`BackgroundProvider` components will need to be changed:

```diff
  <Background
-  backgroundColor="level5"
+  backgroundColor="white"
  >
```

According to the following:

```
level5 -> white
level4 -> whiteOwl
level3 -> lightTint
level2 -> purple
level1 -> midnight
```

You should also be aware that when using `useBackground`, the `backgroundColor`
value that is returned will also now be one of the colour names rather than a
level name.

The type of this value has also been renamed from `BackdropLevel` to
`BackgroundColor`, and all instances of `backdropLevel` have similarly been
renamed.

### `Button` Component

#### Sizing

There are now 3 static sizes available on the `Button` component: `small`,
`medium` and `large`.

The `regular` size has been renamed to `small`, with a new `medium` size added.

```diff
  <Button
-  size="regular"
+  size="small"
  />
```

The horizontal padding has been increased to *32px* on all sizes, and the font
size has also been updated from *16px* to *18px*.

The responsive sizing has been removed, so the button will remain the same size
no matter what the viewport width. Please check and update any buttons that need
to be different sizes on desktop and mobile.

#### Variants

The button variants have been updated to reflect the design variant naming
rather than MUI variant naming.

    - `contained` -> `primary`
    - `outlined`  -> `secondary`

To update, please rename your button variants.

```diff
  <Button
-  variant="contained"
+  variant="primary"
  />
```

```diff
  <Button
-  variant="outlined"
+  variant="secondary"
  />
```

### `Typography` Component

- The `default` variant has been removed as it was unused and undocumented.
- The `success` and `error` colours now only affect non-heading variants.
- A number of font styling props have been added: `fontWeight`, `letterSpacing`,
  `textTransform` & `align`.
- The `sx` prop is also now available for any custom styling.

To update your code:

- ensure you are not expecting the `default` Typography variant anywhere
- check you are not using `error` or `success` colours in heading variants.
- you can also update any hacky ways of styling your typography to using the new
  props or the `sx` prop.

### `Link` Component

The `active` & `secondary` variants have been removed from the `Link` component,
if you wish to use these you need to use the `NavLink` component instead. The
`variant` prop now mimics the variants of the `Typography` component, otherwise
the `Link` will inherit any wrapping `Typography` component styles.

```diff
- <Link variant={isCurrentPage ? 'active' : 'secondary'} href={'/services'}>Services</Link>
+ <NavLink active={!!isCurrentPage} href={'/services'}>Services</NavLink>
```

### `Grid` component

The `Grid` component is now based on the Mui `Grid` component and is no longer a
custom implementation. This may affect your expectations for how the component
works, so please visually check it is working as expected.

The `GridSpacer` component has been removed, and should be replaced with the new
`Spacer` component.

### `Spacer` component

v2 introduces a new `Spacer` component. You can replace any local
implementations with this.

## Pre-release alpha versions to v1

This guide covers all pre-release `alpha` releases from `alpha.54` and after.
If you run into any problems migrating from an earlier version please open an
issue.

### Known issues

- #339 There is a JSS type mismatch when upgrading to `v1.0.0`. This should be resolved
  by installing JSS as a dev dependency in your app package; `yarn add -D jss`.
- When used with version *alpha.28* or later of the `react-icons` package, the
  color of the `Icon` component needs to be set with the `sx` styling prop
  rather than the `color` prop. This is detailed below.
- When installing v1 non-alpha versions of `customer-ui-material` there can
  sometimes be multiple different versions of `@mui/material` installed, which
  can lead to missing CSS styles. To avoid this please add `@mui/material` to
  your package.json with the exact same version number (including any `^` if
  there is one) as is in the package.json of the version of
  `customer-ui-material` you are using. This is annoying, we know, and are
  looking into how best to resolve this issue.

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

|variant|status|old desktop font size(px)|new desktop font size(px)|old mobile font size(px)|new mobile font size(px)|
|-|:-:|:-:|:-:|:-:|:-:|
|`displayHeading`|NEW|-|64|-|42|
|`h1`|UPDATED|64|42|40|32|
|`h2`|UPDATED|40|32|28|28|
|`h3`|UPDATED|33|24|18|22|
|`h4`|UPDATED|20|20|14|18|
|`h5`|REMOVED|16|-|12|-|
|`headline`|REMOVED|16|-|16|-|
|`subheading`|REMOVED|15|-|15|-|
|`body`|UPDATED|20|16|16|16|
|`small`|REMOVED|16|-|14|-|
|`label`|REMOVED|13|-|12|-|
|`caption`|UNCHANGED|12|12|12|12|
|`footnote`|REMOVED|13|-|13|-|
|`interactive`|REMOVED|18|-|18|-|
|`subtitle`|NEW|-|20|-|18|
|`legalNote`|NEW|-|14|-14|

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

### React Icons Package integration

> from *alpha.27* and below of the `react-icons` package

- Replace `color` prop with `sx` styles

```diff
<Icon
-   color={theme.palette.brand.action}
+   sx={
+     fill: theme.palette.brand.action,
+   }}
/>
```

In version *alpha.32* of the `icons` package, and subsequently in version
*alpha.28* of the react-icons package, a change was introduced that
removed the `stroke="none"` styling from the SVG's. This led to the stroke and
fill values being set when used with the `Icon` component `color` prop. This
will be fixed in `v2` of the `material` package.

