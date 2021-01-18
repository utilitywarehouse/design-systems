# Customer UI

This monorepo contains all the packages used for Customer UI. See [individual packages](#packages) for more info.

## Packages

- [@utilitywarehouse/customer-ui-design-tokens](packages/design-tokens)
- [@utilitywarehouse/customer-ui-material](packages/material)

## Working with this monorepo

This monorepo makes use of [Lerna](https://lerna.js.org/) to manage our multiple packages, alongside yarn workspaces to assist with dependency management. For a full list of tools and what they do see the [tools](#tools) section of this documentation

- [Getting started](#getting-started)
- [Running tests](#running-tests)
- [Running linter](#running-linter)
- [Committing to the repository](#committing-to-the-repository)
- [Tools](#tools)
- [Common actions and commands](#common-actions-and-commands)
  - [How to create a new package](#how-to-create-a-new-package)
  - [How to add a shared dependency](#how-to-add-a-shared-dependency)
  - [Publishing changes](#publishing-changes)

### Getting started

Install dependencies

```shell
make install
```

### Running tests

```shell
make test
```

### Running linter

```shell
make lint
```

And automatically attempting to fix linter errors/warnings

```shell
make lint-fix
```

### Committing to the repository

All commit messages for Customer UI are used to automate releases, in order for this to function correctly we are using [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) to enforce structured commit messages.

To assist with the commit message structure you can run the following command:

```shell
make commit
```

This will prompt [Commitizen](https://www.npmjs.com/package/commitizen) to build the commit message through their interactive CLI. Alternatively commit messages can be created manually through any git tool you might be familiar with and will be rejected through the git hook should they be invalid.

### Tools

1. [Lerna](https://lerna.js.org/), a tool for managing JavaScript projects with multiple packages
1. [Yarn](https://yarnpkg.com/), dependency management
1. [ESLint](https://eslint.org/), JavaScript linter used to fix problems in our code as well as enforcing code style rules
1. [Commitizen](https://www.npmjs.com/package/commitizen), a tool used to enforce commit message formatting. This helps us automate versioning when publishing packages
1. [husky](https://typicode.github.io/husky/#/), a tool making it easier to manage and create git hooks
1. [pinst](https://github.com/typicode/pinst), works alongside husky to ensure postinstall doesn't run for published packages
1. [semantic-release-monorepo](https://github.com/pmowrer/semantic-release-monorepo), [semantic-release](https://github.com/semantic-release/semantic-release), but for monorepos

### Common actions and commands

#### How to create a new package

```shell
make new-package
```

This will prompt for a package name and description and will create a boilerplate Typescript package under the packages directory with the required script commands.

#### How to add a shared dependency

Commonly dev dependencies may be used across all packages, in which case adding this dependency to the root can make it cleaner to manage.

```shell
yarn add --dev -W <package>
```

The `-W` flag specifies the package to be installed in the workspace root. From there on packages within `packages/` have access to this dependency.

#### Publishing changes

All changes are published through [CircleCI](https://circleci.com/) on the `master` branch. All development should take place on branches from `master` then submit a PR to merge back to `master`.

CI will detect what packages need to be updated and what the new version should be based on commit messages since the last release for each package. The release will then be published to npm, tagged in git and the changelog updated.
