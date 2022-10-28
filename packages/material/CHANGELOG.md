# @utilitywarehouse/customer-ui-material

## 2.0.3

### Patch Changes

- [#509](https://github.com/utilitywarehouse/customer-web-ui/pull/509) [`9548d35`](https://github.com/utilitywarehouse/customer-web-ui/commit/9548d3547a67ef5d40c37bb4210aafa1b7d15e2b) Thanks [@robphoenix](https://github.com/robphoenix)! - Export px util

- Updated dependencies [[`a15d4a6`](https://github.com/utilitywarehouse/customer-web-ui/commit/a15d4a6015c28d5741066bcdb994ca5f78c0166a)]:
  - @utilitywarehouse/customer-ui-design-tokens@2.0.0

## 2.0.2

### Patch Changes

- [#506](https://github.com/utilitywarehouse/customer-web-ui/pull/506) [`75e70fa`](https://github.com/utilitywarehouse/customer-web-ui/commit/75e70fa54872479c090d08dbdc90571659076e26) Thanks [@robphoenix](https://github.com/robphoenix)! - This changeset adds the Stack component.

  In the process of adding this layout component, the Spacer layout component was
  updated. The `space` prop has been removed, as it is not reflected in the other
  layout components and spacing is under review in UX. Spacer has also been
  updated to accept responsive size values, again to better reflect what is
  possible with the other layout components. It is now possible to pass an array
  or object of responsive values to the size prop, ie. `size={{ mobile: 2, tablet: 4, desktop: 8 }}`.

## 2.0.1

### Patch Changes

- [#500](https://github.com/utilitywarehouse/customer-web-ui/pull/500) [`43599e2`](https://github.com/utilitywarehouse/customer-web-ui/commit/43599e299712b7ac2a9679100a21c013762aa618) Thanks [@robphoenix](https://github.com/robphoenix)! - Add children prop to ThemeProviderProps

## 2.0.0

### Major Changes

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`039ff0f`](https://github.com/utilitywarehouse/customer-web-ui/commit/039ff0f6766d87941c3a2bf3d91f85be09ec1418) Thanks [@robphoenix](https://github.com/robphoenix)! - This change deprecates and removes the `theme` package as it no longer provides
  styling for components. As a result of this the Background context no longer
  provides a theme and now only instead provides the current `backgroundColor`
  from the nearest `Background` component.

  The `useTheme` hook now returns the MUI theme, with the `backgroundColor`
  available from the `useBackground` hook. The incomplete dark mode implementation
  has been removed, so the `colorScheme` value is no longer available.

  ```diff
  - const { backdropLevel, colorScheme } = useTheme();
  + const theme = useTheme();
  + const { backgroundColor } = useBackground();
  ```

* [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`5079eb1`](https://github.com/utilitywarehouse/customer-web-ui/commit/5079eb163e37a3381668254a31d68ce6130075d6) Thanks [@robphoenix](https://github.com/robphoenix)! - This change updates the `Grid` component to be a convenience wrapper around the
  MUI `Grid` component rather than a custom component.

  The custom `Grid` component was introduced by developers who are no longer
  involved with Customer UI and so their reasoning for it is not fully
  understood. I believe it is because it is not currently possible to easily use
  custom breakpoints with the MUI `Grid` component
  ([mui/material-ui/issues/26369](https://github.com/mui/material-ui/issues/26369)),
  and possibly to include some Customer UI specific defaults.

  However the component has gained a really negative reputation for having an
  overly complicated implementation, lacking in functionality, being buggy and
  essentially not fit for purpose. Therefore this change replaces the custom `Grid`
  with the MUI `Grid` but with some convenience defaults and a workaround to use
  our custom breakpoints.

  This changes the expected props and the behaviour of the current `Grid`
  component, so layouts that use it may have to be refactored. This change also
  removes the `GridSpacer` component, as it is rendered unnecessary by these
  changes and we will soon be introducing a more generic Spacer component.

  Also add missing `component` prop to `Grid`.
  https://github.com/mui/material-ui/issues/29191

- [#458](https://github.com/utilitywarehouse/customer-web-ui/pull/458) [`39f0265`](https://github.com/utilitywarehouse/customer-web-ui/commit/39f02659fb6c2cace0301f510805e9cd8e6b8425) Thanks [@robphoenix](https://github.com/robphoenix)! - This change renames the root provider to `ThemeProvider`, so as to better
  describe it's usage and to bring it in line with current styling library
  conventions.

  At the same time it adds a `theme` prop that will accept a partial theme and
  merge it with the default theme.

  ```diff
  - <UIProvider>
  + <ThemeProvider>
      <App />
  - </UIProvider>
  + </ThemeProvider>
  ```

* [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`dcbaec8`](https://github.com/utilitywarehouse/customer-web-ui/commit/dcbaec8887dbb7ee08c6cb33b0034eb517a21f27) Thanks [@robphoenix](https://github.com/robphoenix)! - The `variant` prop on the InteractiveCard does nothing, so it is being removed.
  Devs should ensure they are not using it.

- [#462](https://github.com/utilitywarehouse/customer-web-ui/pull/462) [`38f5c5d`](https://github.com/utilitywarehouse/customer-web-ui/commit/38f5c5d1fe15b7ebc9cdb6386bbe4d7a4190de23) Thanks [@robphoenix](https://github.com/robphoenix)! - Remove `withBackground` hoc. Please wrap your components with a Background
  component instead.

* [#483](https://github.com/utilitywarehouse/customer-web-ui/pull/483) [`9db2157`](https://github.com/utilitywarehouse/customer-web-ui/commit/9db215770c84da48414c023788c530ff4411ebb7) Thanks [@robphoenix](https://github.com/robphoenix)! - Deprecate the `makeStyles` styling method. Please use the `sx` prop or the
  `styled` utility.

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`54c520e`](https://github.com/utilitywarehouse/customer-web-ui/commit/54c520eb7295e2d7705b094ee721d512c23e36fd) Thanks [@robphoenix](https://github.com/robphoenix)! - There are now 3 static sizes available on the `Button` component: `small`,
  `medium` and `large`.

  The `regular` size has been renamed to `small`, with a new `medium` size added.

  ```diff
    <Button
  -  size="regular"
  +  size="small"
    />
  ```

  The horizontal padding has been increased to _32px_ on all sizes, and the font
  size has also been updated from _16px_ to _18px_.

  The responsive sizing has been removed, so the button will remain the same size
  no matter what the viewport width. Please check and update any buttons that need
  to be different sizes on desktop and mobile.

* [#449](https://github.com/utilitywarehouse/customer-web-ui/pull/449) [`daa2b98`](https://github.com/utilitywarehouse/customer-web-ui/commit/daa2b98d0b26ab1266bf3f96c280abaefc9eccc9) Thanks [@robphoenix](https://github.com/robphoenix)! - This change moves MUI dependencies to peer and export only bare essentials from MUI.

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

  To update, please re-install CWUI along with it's peer dependencies, as
  described in the README, and update any relevant imports.

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`89ccdc3`](https://github.com/utilitywarehouse/customer-web-ui/commit/89ccdc36d0a7c2ac7f87c8f6a4f094b5ca9cb371) Thanks [@robphoenix](https://github.com/robphoenix)! - Updates to the `Typography` component and `TypographyProps`.

  Breaking changes included in this change;

  - remove `default` variant because it is unused and undocumented
  - restrict `success` and `error` colours to non-heading variants, they should
    only be used for secondary text variants.

  Other changes included in this change

  - add `fontWeight` prop and other standard typography props (`letterSpacing`,
    `textTransform` & `align`). These are commonly used and so should be more
    easily accessible for devs.
  - include `sx` prop for custom styling.

  To update your code you will need to

  - ensure you are not expecting the `default` Typography variant anywhere
  - check you are not using `error` or `success` colours in heading variants.
  - you can also update any hacky ways of styling your typography to using the new
    props or the `sx` prop.

* [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`8f61cbb`](https://github.com/utilitywarehouse/customer-web-ui/commit/8f61cbbc36f83b42274d890c4c066efd4950847f) Thanks [@robphoenix](https://github.com/robphoenix)! - This change updates the Link component to be visually and behaviourally
  different from the NavLink component. This is a breaking change and consumers
  should ensure they are using the appropriate link for their UI.

  The `active` & `secondary` variants have been removed from the `Link` component,
  if you wish to use these you need to use the `NavLink` component instead. The
  `variant` prop now mimics the variants of the `Typography` component, otherwise
  the `Link` will inherit any wrapping `Typography` component styles.

  ```diff
  - <Link variant={isCurrentPage ? 'active' : 'secondary'} href={'/services'}>Services</Link>
  + <NavLink active={!!isCurrentPage} href={'/services'}>Services</NavLink>
  ```

- [#479](https://github.com/utilitywarehouse/customer-web-ui/pull/479) [`be49e67`](https://github.com/utilitywarehouse/customer-web-ui/commit/be49e67790ac8a4c90da14cdc92a3dba1ec1b0fb) Thanks [@robphoenix](https://github.com/robphoenix)! - This changeset replaces the Background components backgroundColor `levels`
  naming convention with the colour names. While there were conversations around
  establishing a semantic naming convention, these have stalled and would benefit
  from a wider approach that considers all colour usage and intent, across
  components and designs. This change was felt to be the lowest impact interim
  solution as it requires no changes to UX designs or conventions, and provides a
  simple clarity when translating designs to code.

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

* [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`22adfc2`](https://github.com/utilitywarehouse/customer-web-ui/commit/22adfc2c1cfec6eb475a07ff51196f976a4fe7de) Thanks [@robphoenix](https://github.com/robphoenix)! - This change updates the button variants to reflect the design variant naming
  rather than mui variant naming.

      - `contained` -> `primary`
      - `outlined` -> `secondary`

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

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`6525005`](https://github.com/utilitywarehouse/customer-web-ui/commit/6525005965d70690a42f4f54d3e6dc892fc743b8) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the level2 (mid tint) background color. It is no longer a
  valid background color for this component and so should not be used.

  Developers should remove any use of it and check with UX if they need to
  replace any midTint backgrounds.

### Minor Changes

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`40c8ab8`](https://github.com/utilitywarehouse/customer-web-ui/commit/40c8ab864efa7c3faff533f2c9296c4ac839043b) Thanks [@robphoenix](https://github.com/robphoenix)! - The MUI system props used for styling are being deprecated or in some cases have
  already been removed. This focuses the styling options for components on a
  consistent API, settling on the `sx` prop and `styled` utility, in line with
  other components in Customer Web UI and also adds some future proofing. To
  update, developers will need to move any custom styling into an sx prop. Any
  components that did not previously expose the `sx` prop will now have it
  available for styling.

  Components affected:

  - Icon
  - Background
  - Card

### Patch Changes

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`2c0c9d2`](https://github.com/utilitywarehouse/customer-web-ui/commit/2c0c9d20dc3bbfaf909d0f60d9aa3338cb385273) Thanks [@robphoenix](https://github.com/robphoenix)! - - Add spacer component (#346)

* [#489](https://github.com/utilitywarehouse/customer-web-ui/pull/489) [`d088da6`](https://github.com/utilitywarehouse/customer-web-ui/commit/d088da67877da7c99269c5d920d5649cea88b73f) Thanks [@robphoenix](https://github.com/robphoenix)! - This change deprecates the `forwardedRef` prop on components in favour of using
  `React.forwardRef`. The `forwardedRef` prop will be removed in the next major
  release.

  To prepare for this please update any refs you have.

  ```diff
  - forwardedRef={el}
  + ref={el}
  ```

- [#401](https://github.com/utilitywarehouse/customer-web-ui/pull/401) [`a162a80`](https://github.com/utilitywarehouse/customer-web-ui/commit/a162a80182bedf98042b648c095ea885ee725e64) Thanks [@robphoenix](https://github.com/robphoenix)! - Fixed padding syntax issue on Container component

## 1.0.12

### Patch Changes

- [#491](https://github.com/utilitywarehouse/customer-web-ui/pull/491) [`a4318d4`](https://github.com/utilitywarehouse/customer-web-ui/commit/a4318d4a91111ece15cb574af8de560748433fea) Thanks [@gosiamermon](https://github.com/gosiamermon)! - Fix the background color in active state of InteractiveCard component

## 1.0.11

### Patch Changes

- [#467](https://github.com/utilitywarehouse/customer-web-ui/pull/467) [`9375cb6`](https://github.com/utilitywarehouse/customer-web-ui/commit/9375cb64e47d58a02fc9e87cce3163818f22a77e) Thanks [@treborb](https://github.com/treborb)! - Explicitly set "children" prop on React components to comply with changes to React.FunctionComponent in React v18

## 1.0.10

### Patch Changes

- [#464](https://github.com/utilitywarehouse/customer-web-ui/pull/464) [`f9aa029`](https://github.com/utilitywarehouse/customer-web-ui/commit/f9aa02916b6c80c467d14f4663f5bdcfea32aaa1) Thanks [@robphoenix](https://github.com/robphoenix)! - Fix Link component onClick

## 1.0.9

### Patch Changes

- [#455](https://github.com/utilitywarehouse/customer-web-ui/pull/455) [`a361f7d`](https://github.com/utilitywarehouse/customer-web-ui/commit/a361f7d9afe4ee488f8f3e95251413718c92f093) Thanks [@jordmccord](https://github.com/jordmccord)! - Fixed padding syntax issue on Container component

## 1.0.8

### Patch Changes

- [#446](https://github.com/utilitywarehouse/customer-web-ui/pull/446) [`ec85c67`](https://github.com/utilitywarehouse/customer-web-ui/commit/ec85c674fc4f05a2dd414319b29536c3a7cc107a) Thanks [@robphoenix](https://github.com/robphoenix)! - fix Button disabled styles

## 1.0.7

### Patch Changes

- [#439](https://github.com/utilitywarehouse/customer-ui/pull/439) [`9d4c0ad`](https://github.com/utilitywarehouse/customer-ui/commit/9d4c0ad275880eb459959d577bf37ff93d74c6ec) Thanks [@robphoenix](https://github.com/robphoenix)! - update mui deps & fix build for SSR apps

## 1.0.6

### Patch Changes

- [#424](https://github.com/utilitywarehouse/customer-ui/pull/424) [`faf5af9`](https://github.com/utilitywarehouse/customer-ui/commit/faf5af918afea9e927aac500e4d1faf2f4c75d36) Thanks [@robphoenix](https://github.com/robphoenix)! - Fix Link colours when on inverse background colours

## 1.0.4

### Patch Changes

- [#377](https://github.com/utilitywarehouse/customer-ui/pull/377) [`e8b0797`](https://github.com/utilitywarehouse/customer-ui/commit/e8b07970382ba8521a5d96cb193a512b59377210) Thanks [@robphoenix](https://github.com/robphoenix)! - introduce only `NavLink` component

  After discussion, it is felt that best approach would be to introduce only the
  `NavLink` component, and in a future major release use the `TextLink` component
  but with the name `Link`, effectively introducing breaking changes to the
  `Link` component.

* [#369](https://github.com/utilitywarehouse/customer-ui/pull/369) [`50f101d`](https://github.com/utilitywarehouse/customer-ui/commit/50f101d7bd62bf83f6ecdff35c4cc7c8fa04b40d) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Background component styles from theme package to component

- [#372](https://github.com/utilitywarehouse/customer-ui/pull/372) [`872007a`](https://github.com/utilitywarehouse/customer-ui/commit/872007aabf7604182966a825674571fe9fb705ae) Thanks [@robphoenix](https://github.com/robphoenix)! - Move InteractiveCard styles from theme package to component

* [#371](https://github.com/utilitywarehouse/customer-ui/pull/371) [`7b75136`](https://github.com/utilitywarehouse/customer-ui/commit/7b751364dcd929e5a64ecf6f81b41a0f3a28aa3c) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Grid configuration from theme package to component

- [#373](https://github.com/utilitywarehouse/customer-ui/pull/373) [`f75d0f1`](https://github.com/utilitywarehouse/customer-ui/commit/f75d0f11870de4491a1d105c301cf192701ff19b) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Menu styling from theme package to components

* [#380](https://github.com/utilitywarehouse/customer-ui/pull/380) [`01ef6a1`](https://github.com/utilitywarehouse/customer-ui/commit/01ef6a1d71a9178b0f76972e1830ef0dd53a3637) Thanks [@robphoenix](https://github.com/robphoenix)! - use tokens instead of the theme package when creating the mui theme

- [#378](https://github.com/utilitywarehouse/customer-ui/pull/378) [`78c417e`](https://github.com/utilitywarehouse/customer-ui/commit/78c417e35fc0e6727217389354c8351f4b307648) Thanks [@robphoenix](https://github.com/robphoenix)! - Move `Textfield` styles from theme package to component

* [#367](https://github.com/utilitywarehouse/customer-ui/pull/367) [`c97aa51`](https://github.com/utilitywarehouse/customer-ui/commit/c97aa519052816d6818b1f055a2669c1d5814436) Thanks [@robphoenix](https://github.com/robphoenix)! - Add `TextLink` & `NavLink` components to replace `Link` component, with a deprecation warning.

* Updated dependencies [[`ec8c4ae`](https://github.com/utilitywarehouse/customer-ui/commit/ec8c4ae8447adc127f4eb3a643c936f2f937f7ff), [`50f101d`](https://github.com/utilitywarehouse/customer-ui/commit/50f101d7bd62bf83f6ecdff35c4cc7c8fa04b40d), [`872007a`](https://github.com/utilitywarehouse/customer-ui/commit/872007aabf7604182966a825674571fe9fb705ae), [`7b75136`](https://github.com/utilitywarehouse/customer-ui/commit/7b751364dcd929e5a64ecf6f81b41a0f3a28aa3c), [`f75d0f1`](https://github.com/utilitywarehouse/customer-ui/commit/f75d0f11870de4491a1d105c301cf192701ff19b), [`c97aa51`](https://github.com/utilitywarehouse/customer-ui/commit/c97aa519052816d6818b1f055a2669c1d5814436), [`78c417e`](https://github.com/utilitywarehouse/customer-ui/commit/78c417e35fc0e6727217389354c8351f4b307648)]:
  - @utilitywarehouse/customer-ui-design-tokens@1.0.3
  - @utilitywarehouse/customer-ui-theme@1.1.2

## 1.0.3

### Patch Changes

- [#363](https://github.com/utilitywarehouse/customer-ui/pull/363) [`6c35336`](https://github.com/utilitywarehouse/customer-ui/commit/6c35336128d21792d0e0ab10a34489f31146d1c2) Thanks [@robphoenix](https://github.com/robphoenix)! - This change bumps the @mui deps to the latest versions.

  This is being done now due to an issue raised where Customer UI styles were not being applied to all components.
  This was due to mismatches between @mui dependencies in an application using Customer UI and separately installed versions of the same @mui packages used in Customer UI.

- Updated dependencies [[`268e60b`](https://github.com/utilitywarehouse/customer-ui/commit/268e60b09d85c1d08d64bf85d538c8119bdda812)]:
  - @utilitywarehouse/customer-ui-design-tokens@1.0.2
  - @utilitywarehouse/customer-ui-theme@1.1.1

## 1.0.2

### Patch Changes

- [#350](https://github.com/utilitywarehouse/customer-ui/pull/350) [`102db82`](https://github.com/utilitywarehouse/customer-ui/commit/102db82f38482e8389c82518d534aa9e68be0b42) Thanks [@robphoenix](https://github.com/robphoenix)! - Move `Card` styles from the `theme` package to the component. Part of the deprecation of the `theme` package #254

- Updated dependencies [[`102db82`](https://github.com/utilitywarehouse/customer-ui/commit/102db82f38482e8389c82518d534aa9e68be0b42), [`a39fe50`](https://github.com/utilitywarehouse/customer-ui/commit/a39fe506bd7a7a9fe405f6c7a175ed44cbb1ad14)]:
  - @utilitywarehouse/customer-ui-theme@1.1.0
  - @utilitywarehouse/customer-ui-react-icons@1.0.1

## 1.0.1

### Patch Changes

- [#337](https://github.com/utilitywarehouse/customer-ui/pull/337) [`68f16af`](https://github.com/utilitywarehouse/customer-ui/commit/68f16afb5c97aca9d9478ca185872dfe64e3ef1d) Thanks [@robphoenix](https://github.com/robphoenix)! - This change pulls in the updates from `customer-ui-theme` v1.0.1. Specifically the backdrop color change.

## 1.0.0

### Major Changes

- [#330](https://github.com/utilitywarehouse/customer-ui/pull/330) [`7f3bbf6`](https://github.com/utilitywarehouse/customer-ui/commit/7f3bbf61cb88cdf84b7f9c8d801232c318d8bc95) Thanks [@robphoenix](https://github.com/robphoenix)! - [Release v1.0.0](https://github.com/utilitywarehouse/customer-ui/pull/266)

  This first major release of the Customer UI packages doesn't actually introduce
  any code changes or new features that directly affect consumers of these
  libraries. This is more about semantics and processes. Customer UI is now being
  used in production, and at the same still has significant features missing or
  that have the potential for change. It was therefore felt that we needed to move
  away from a `prerelease` naming convention and provide a properly supported
  release process with a well documented upgrade path. So the changes in this
  release are related to the improved management of the contribution to, and
  publishing of, Customer UI. These changes are detailed below.

  To upgrade `customer-ui-material` from an alpha release please see
  [the migration guide](https://github.com/utilitywarehouse/customer-ui/blob/main/packages/material/README.md#migration-from-alpha-pre-release-to-v1)

  ***

  Alpha releases were managed by `semantic-release-monorepo`, this tool & process
  has now been replaced by
  [`changesets`](https://github.com/changesets/changesets).

  With `semantic-release-monorepo` releases happened on every commit, which is not
  always what we want. `changesets` gives us more control over the type of release
  and the frequency at which releases happen.

  Further to this, `changesets` provides a better way document changes and
  generate release changelogs. Where `semantic-release-monorepo` used specifically
  formatted commit messages to document changes and generate changelogs,
  `changesets` uses a contributor defined documentation of changes. This separates
  the documentation from the commit history, enables contributors to better define
  their change, if this documentation is even needed, and also how their change
  should be released.

  `changesets` will also handle the versioning and publishing of packages within
  this monorepo, automated through CI.

  The CI process is moving from CircleCI to Github Actions. this reflects a wider
  move throughout UW, and also means CI is closer to the repo, making it easier to
  view and manage.

  The alpha version of the `customer-ui-material` storybook is hosted by
  [Surge](https://surge.sh/). Moving forward, hosting will be done through
  [Netlify](https://www.netlify.com/).

  We get a couple of things out of the box with Netlify that were previously
  missing; SSL so we get a `https` url, and deploy previews. That we get deploy
  previews means we don't have to maintain custom scripts to add this
  functionality.

  With the `v1.0.0` release it would be great to increase contributions, so a Code
  of Conduct has been added to ensure anyone considering getting involved feels
  welcome. This document has been taken from the
  [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct.html)

  Again, this is an attempt to make contributing to Customer UI as frictionless as
  possible. Also, with the introduction of `changesets` there may be devs that
  have not contributed to a project that uses this mechanism before, so these
  guidelines help to explain what is involved in contributing.

  Firstly, any npm scripts that are not used have been removed, and Makefiles have
  also been removed. Makefiles are not a common tool in Frontend projects and are
  also redundant with the standard tooling in a project such as this.

  The following custom scripts have also been removed

  - `deployment-preview.sh` replaced by Netlify Deploy Previews
  - `deployment-preview-comment-on-pr.js` replaced by Netlify Deploy Previews
  - `ci-package-changed.js` this can be reproduced with config in Github Actions workflows
  - `get-pr-number.js` not used with Github Actions
