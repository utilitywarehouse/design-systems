# @utilitywarehouse/customer-ui-material

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
