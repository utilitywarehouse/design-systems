# @utilitywarehouse/customer-ui-material

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
