# Migration Guide

This guide should cover any significant changes between major versions, across
all packages.

There may be some minor inconsistencies not documented here, but these are the
major changes to watch out for. Please open an issue or PR if you find something
worth documenting for others, thankyou!

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

