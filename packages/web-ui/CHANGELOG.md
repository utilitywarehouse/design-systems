# @utilitywarehouse/web-ui

## 0.0.23

### Patch Changes

- [`b820af6`](https://github.com/utilitywarehouse/design-systems/commit/b820af69ce845f2388a9410bab550e5cb859e60d) Thanks [@robphoenix](https://github.com/robphoenix)! - Update deps

## 0.0.22

### Patch Changes

- [#93](https://github.com/utilitywarehouse/design-systems/pull/93) [`211b6d1`](https://github.com/utilitywarehouse/design-systems/commit/211b6d1a1679e610d9a42dc63a125183020b7cf2) Thanks [@robphoenix](https://github.com/robphoenix)! - Remove default Button capitalization.

  This was implemented based on an incorrect assumption that screen readers would read out capital letters differently, and it actually breaks the visual layout of the button when an href is added.

## 0.0.21

### Patch Changes

- [#87](https://github.com/utilitywarehouse/design-systems/pull/87) [`1b4d6ed`](https://github.com/utilitywarehouse/design-systems/commit/1b4d6edaf8f56b48141f1556b69a0fdcb4b1e728) Thanks [@robphoenix](https://github.com/robphoenix)! - This change replaces the CSS implementation of the background colour context with React context. This is because the CSS was not working for nested contexts, and unfortunately I don't have the time, or depth of CSS knowledge, to get it working. While I'm reluctant to add in a context provider in every box where the `background` prop is used, for now it's the best way.

## 0.0.20

### Patch Changes

- [#85](https://github.com/utilitywarehouse/design-systems/pull/85) [`4cbe199`](https://github.com/utilitywarehouse/design-systems/commit/4cbe199106e2c89f80aebb18caf31525668901d3) Thanks [@robphoenix](https://github.com/robphoenix)! - This reinstates the contextual colours for the following components, when wrapped in a `Box` with `backgroundColor` set to either `colorsCommon.brandPrimaryPurple` or `colorsCommon.brandMidnight`:

  - `Text`
  - `Heading`
  - `Button`
  - `TextLink`

## 0.0.19

### Patch Changes

- [`46dc943`](https://github.com/utilitywarehouse/design-systems/commit/46dc943deaaf1092a041846581a44e24827c51c2) Thanks [@robphoenix](https://github.com/robphoenix)! - Fix Background prop name

## 0.0.18

### Patch Changes

- [#81](https://github.com/utilitywarehouse/design-systems/pull/81) [`fb7a87c`](https://github.com/utilitywarehouse/design-systems/commit/fb7a87cf297498cb1631bbd015516158b9a25b71) Thanks [@robphoenix](https://github.com/robphoenix)! - This change sets the default theme for useMediaQuery

## 0.0.17

### Patch Changes

- [#79](https://github.com/utilitywarehouse/design-systems/pull/79) [`57d443c`](https://github.com/utilitywarehouse/design-systems/commit/57d443c95f3595860f09ee3d00ebca746c688cb5) Thanks [@robphoenix](https://github.com/robphoenix)! - Remove confusing `useDeviceSize` hook, use `useMediaQuery` instead.

## 0.0.16

### Patch Changes

- [#77](https://github.com/utilitywarehouse/design-systems/pull/77) [`9cf662e`](https://github.com/utilitywarehouse/design-systems/commit/9cf662e5d71727840c3e8d4f8dba26db75d333bc) Thanks [@robphoenix](https://github.com/robphoenix)! - This change exports the hooks `useMediaQuery` & `useDeviceSize` to more easily
  build responsive designs.

## 0.0.15

### Patch Changes

- [#75](https://github.com/utilitywarehouse/design-systems/pull/75) [`e549d2e`](https://github.com/utilitywarehouse/design-systems/commit/e549d2e39392d976781414588f88867cdb5dc178) Thanks [@robphoenix](https://github.com/robphoenix)! - Fix Radio & RadioTile colours

- [#73](https://github.com/utilitywarehouse/design-systems/pull/73) [`232b96a`](https://github.com/utilitywarehouse/design-systems/commit/232b96ad27640fbea2dff9c5979ffd4ed31f3ed3) Thanks [@robphoenix](https://github.com/robphoenix)! - Rename FieldLabel to Label and add `nested` prop.

- [#30](https://github.com/utilitywarehouse/design-systems/pull/30) [`ffbb659`](https://github.com/utilitywarehouse/design-systems/commit/ffbb6592c8140487ca59b502e362313a41dcd6c5) Thanks [@robphoenix](https://github.com/robphoenix)! - This change adds the following components to the library:

  - `RadioGroup`
  - `Radio`
  - `RadioTile`
  - `Fieldset`
  - `FieldsetLegend`
  - `FieldLabel`
  - `FormHelperText`

  [Accessibility review](https://linear.app/utilitywarehouse/issue/UWDS-186/radiogroup-accessibility-review)

## 0.0.14

### Patch Changes

- [#69](https://github.com/utilitywarehouse/design-systems/pull/69) [`b756f92`](https://github.com/utilitywarehouse/design-systems/commit/b756f928dbaad2e6c7517629134019cc3b34d9f9) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the dependency on the design-tokens package.

## 0.0.13

### Patch Changes

- Updated dependencies [[`a9acfd8`](https://github.com/utilitywarehouse/design-systems/commit/a9acfd8e899f21e11eb45178749be94ad6c2349b)]:
  - @utilitywarehouse/colour-system@0.0.5

## 0.0.12

### Patch Changes

- [#65](https://github.com/utilitywarehouse/design-systems/pull/65) [`766fb1b`](https://github.com/utilitywarehouse/design-systems/commit/766fb1bc3c0795b8423011dce30c4a83113c4bdb) Thanks [@robphoenix](https://github.com/robphoenix)! - This change fixes the updated Box types

## 0.0.11

### Patch Changes

- [#62](https://github.com/utilitywarehouse/design-systems/pull/62) [`5ec71f8`](https://github.com/utilitywarehouse/design-systems/commit/5ec71f88f6c36cbdb79788e44f30af617c12f841) Thanks [@robphoenix](https://github.com/robphoenix)! - This changes the way color is handled by the `Text` and `Heading` components. As a result of the newly introduced `colour-system` library, these components, and `Typography`, will accept a `string` value, ideally from the `colour-system` library. Until we get more solid semantic understanding of how colours are used, we will support this more open approach to typography colours.
  This change also preempts the deprecation, and future removal, of the background colour context that enables typography components to change their colour based on the parent background colour. Because of this, the `Text` and `Heading` components will not support this functionality. If they need to be used on a darker brand background, the appropriate text color should be passed in to the `color` prop.
  The `Typography` component continues to be backwards compatible with `customer-ui-material`.

- [#63](https://github.com/utilitywarehouse/design-systems/pull/63) [`4e22179`](https://github.com/utilitywarehouse/design-systems/commit/4e22179124d5dcc9c3ab543b848b23b350ec37ec) Thanks [@robphoenix](https://github.com/robphoenix)! - To make the transition smoother from `customer-ui-material`, and to better support the removal of the background colour context, this change adds back the legacy `Background` component, and removes the functionality from `Box`, so that we don't have to make any breaking changes with that component, and can deprecate the Background component and remove in the next major release.

## 0.0.10

### Patch Changes

- [#57](https://github.com/utilitywarehouse/design-systems/pull/57) [`eee4fb7`](https://github.com/utilitywarehouse/design-systems/commit/eee4fb743cfa077a1a62dbe39a368c3f09289af1) Thanks [@robphoenix](https://github.com/robphoenix)! - Add Grape colour scale

## 0.0.9

### Patch Changes

- [#51](https://github.com/utilitywarehouse/design-systems/pull/51) [`15b67d9`](https://github.com/utilitywarehouse/design-systems/commit/15b67d9338770b69b4d84f22d9db8bc85939e264) Thanks [@robphoenix](https://github.com/robphoenix)! - This change fixes the types to better reflect the Theme palette

- [#52](https://github.com/utilitywarehouse/design-systems/pull/52) [`7249246`](https://github.com/utilitywarehouse/design-systems/commit/7249246ffb3f51c500acf35d258291102abd4242) Thanks [@robphoenix](https://github.com/robphoenix)! - This change includes the `wide` breakpoint on the Grid component.

## 0.0.8

### Patch Changes

- [#49](https://github.com/utilitywarehouse/design-systems/pull/49) [`128a6f6`](https://github.com/utilitywarehouse/design-systems/commit/128a6f695f8c6a8421867c85d02c9bd4ce685970) Thanks [@robphoenix](https://github.com/robphoenix)! - Attempt to fix bundling

## 0.0.7

### Patch Changes

- [#47](https://github.com/utilitywarehouse/design-systems/pull/47) [`48ec86f`](https://github.com/utilitywarehouse/design-systems/commit/48ec86f08243cf004146442a7dddb48e95628a82) Thanks [@robphoenix](https://github.com/robphoenix)! - Update bundler settings for esm

- Updated dependencies [[`48ec86f`](https://github.com/utilitywarehouse/design-systems/commit/48ec86f08243cf004146442a7dddb48e95628a82)]:
  - @utilitywarehouse/design-tokens@0.0.6

## 0.0.6

### Patch Changes

- [#45](https://github.com/utilitywarehouse/design-systems/pull/45) [`172cb27`](https://github.com/utilitywarehouse/design-systems/commit/172cb27e78d3edfcca8094b30d23c5cf570c3f1a) Thanks [@robphoenix](https://github.com/robphoenix)! - Use tsup for bundling

- Updated dependencies [[`172cb27`](https://github.com/utilitywarehouse/design-systems/commit/172cb27e78d3edfcca8094b30d23c5cf570c3f1a)]:
  - @utilitywarehouse/design-tokens@0.0.5

## 0.0.5

### Patch Changes

- [#43](https://github.com/utilitywarehouse/design-systems/pull/43) [`1f3a80d`](https://github.com/utilitywarehouse/design-systems/commit/1f3a80dc7d66db4d62569fe121af64fb2768e4de) Thanks [@robphoenix](https://github.com/robphoenix)! - release as commonjs

- Updated dependencies [[`1f3a80d`](https://github.com/utilitywarehouse/design-systems/commit/1f3a80dc7d66db4d62569fe121af64fb2768e4de)]:
  - @utilitywarehouse/design-tokens@0.0.4

## 0.0.4

### Patch Changes

- [#41](https://github.com/utilitywarehouse/design-systems/pull/41) [`a6e41c2`](https://github.com/utilitywarehouse/design-systems/commit/a6e41c2dee1a9c8485c9ae912c560859f7b687c1) Thanks [@robphoenix](https://github.com/robphoenix)! - revert change to esm

## 0.0.3

### Patch Changes

- [#39](https://github.com/utilitywarehouse/design-systems/pull/39) [`9482e06`](https://github.com/utilitywarehouse/design-systems/commit/9482e06b14080d8fa063191570e3d8b10f12a00b) Thanks [@robphoenix](https://github.com/robphoenix)! - This change updates the breakpoints.

  - mobile: 0px (no change)
  - tablet: 768px -> 740px
  - desktop: 1366px -> 992px
  - wide: 1200px (new)

- [#40](https://github.com/utilitywarehouse/design-systems/pull/40) [`3d2b382`](https://github.com/utilitywarehouse/design-systems/commit/3d2b382cfa55b66110820c819fde1608cde87409) Thanks [@robphoenix](https://github.com/robphoenix)! - This change hopefully fixes ESM/Next.js usage

- [#37](https://github.com/utilitywarehouse/design-systems/pull/37) [`626ced7`](https://github.com/utilitywarehouse/design-systems/commit/626ced70afaee20e1cd6152c20ac7a8f46bdecb5) Thanks [@robphoenix](https://github.com/robphoenix)! - This change exports the `Text` and `Heading` components, which were unintenionally removed from the root index file

- Updated dependencies [[`9482e06`](https://github.com/utilitywarehouse/design-systems/commit/9482e06b14080d8fa063191570e3d8b10f12a00b)]:
  - @utilitywarehouse/design-tokens@0.0.3

## 0.0.2

### Patch Changes

- [#20](https://github.com/utilitywarehouse/design-systems/pull/20) [`f5b87a4`](https://github.com/utilitywarehouse/design-systems/commit/f5b87a470c0537b9d297a5fc6e3adac42d3def2a) Thanks [@robphoenix](https://github.com/robphoenix)! - Export custom `styled` utility, supporting typed custom theme

- [`46c06dc`](https://github.com/utilitywarehouse/design-systems/commit/46c06dce3240109fcc6a966a894f1f62b61addbb) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the `Background` component, moving the same functionality into the `Box` component. The `Background` component felt superfluous to our needs, and it feels more intuitive to have the functionality on the underlying `Box` component anyway. See also [Braid](https://seek-oss.github.io/braid-design-system/components/Box#backgrounds)

- [#28](https://github.com/utilitywarehouse/design-systems/pull/28) [`8dee2ed`](https://github.com/utilitywarehouse/design-systems/commit/8dee2eddf885c33e9283369bd8aa0c22c0dd557a) Thanks [@robphoenix](https://github.com/robphoenix)! - This change clarifies the typography components API.

  The `Text` and `Heading` components are intended to meet the majority of typography needs. These components are responsive and aware of any background context from containing `Box` components, meaning the foreground colour will change depending on whether they are rendered within a neutral background or an inverse background. They do not include the MUI system props for styling, however the `sx` prop is available to use as an escape hatch for any custom styling needs.

  The `Typography` component is available for more custom typography needs, it has no predefined styling but full access to the system props. The variant prop will be deprecated, and removed in a major release, but is currently available for backwards compatability.

- [#28](https://github.com/utilitywarehouse/design-systems/pull/28) [`8dee2ed`](https://github.com/utilitywarehouse/design-systems/commit/8dee2eddf885c33e9283369bd8aa0c22c0dd557a) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the surplus height on the Icon component, closing https://linear.app/utilitywarehouse/issue/UWDS-270/fix-icon-component

- [#18](https://github.com/utilitywarehouse/design-systems/pull/18) [`cfc802a`](https://github.com/utilitywarehouse/design-systems/commit/cfc802afa77cd72875fa88dc5a1cf4a01f031aff) Thanks [@robphoenix](https://github.com/robphoenix)! - This change enables support for MUI system props on Box and layout components. [This](https://mui.com/system/getting-started/usage/#api-tradeoff) is a good reason why we will follow MUIs precedent for this supporting system props.
