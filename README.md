# Customer UI

This monorepo contains all the packages used for Customer UI. See [individual packages](#packages) for more info.

## Packages

- [@utilitywarehouse/customer-ui-design-tokens](packages/design-tokens)
- [@utilitywarehouse/customer-ui-fonts](packages/fonts)
- [@utilitywarehouse/customer-ui-icons](packages/icons)
- [@utilitywarehouse/customer-ui-react-icons](packages/react-icons)
- [@utilitywarehouse/customer-ui-theme](packages/theme)
- [@utilitywarehouse/customer-ui-material](packages/material)

## Contents

- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [Running linter](#running-linter)
- [Committing to the repository](#committing-to-the-repository)
- [Tools](#tools)
- [Common actions and commands](#common-actions-and-commands)
  - [How to create a new package](#how-to-create-a-new-package)
  - [How to add a shared dependency](#how-to-add-a-shared-dependency)
  - [Publishing changes](#publishing-changes)
- [CI](#ci)
  - [Deployments](#deployments)
  - [Environment variables](#environment-variables)
  - [Running tasks only on packages which have changed](#running-tasks-only-on-packages-which-have-changed)

### Getting started

Run setup. This will install [pnpm](https://pnpm.io/), which we use to manage
this monorepo.

```console
npm setup
# or
yarn setup
```

Install dependencies

```console
pnpm install
```

### Lint & format

```console
pnpm lint
```

And automatically attempting to fix linter errors/warnings

```console
pnpm lint:fix
```

### Committing to the repository

We use
[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
to enforce structured commit messages.

To assist with the commit message structure you can run the following command:

```console
pnpm commit
```

This will prompt [Commitizen](https://www.npmjs.com/package/commitizen) to build
the commit message through their interactive CLI. Alternatively commit messages
can be created manually, and will be validated with a git hook.

### Tools

1. [pnpm](https://pnpm.io/), fast, disk space efficient package manager
1. [changesets](https://github.com/changesets/changesets), handles versioning, publishing and changelog generation.
1. [ESLint](https://eslint.org/), JavaScript linter used to fix problems in our code as well as enforcing code style rules
1. [Prettier](https://prettier.io/), opinionated code formatter
1. [Commitizen](https://www.npmjs.com/package/commitizen), a tool used to enforce commit message formatting
1. [husky](https://typicode.github.io/husky/#/), a tool making it easier to manage and create git hooks
1. [pinst](https://github.com/typicode/pinst), works alongside husky to ensure `postinstall` doesn't run for published packages

### Common actions and commands

#### Contributing

Please read our [contribution guide](CONTRIBUTING.md) for contributing changes
to Customer UI.

#### Creating a new package

```shell
pnpm new-package
```

This will prompt for a package name and description and will create a
boilerplate Typescript package under the packages directory with the required
script commands.

#### Publishing changes

All changes are published through [Github Actions](https://github.com/features/actions) on the
`main` branch. All development should take place on branches from `main` then
submit a PR to merge back to `main`.

[Changesets](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)
will be added as changes are contributed. When changes are merged to `main` the
release workflow will run which will open, and keep updated, a Version Pull
Request containing all changes. When this is merged to `main` all packages will
be versioned, published to npm and changelogs will be generated based on the
changesets.

