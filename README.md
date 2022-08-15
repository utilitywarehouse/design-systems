# Customer Web UI

This monorepo contains packages for building Customer web applications.

For more information about how this fits into the wider UI landscape, please
have a look at [the wiki](https://wiki.prod.uw.systems/en/Technology/ui-development)
(requires VPN connection).

## Packages

- [@utilitywarehouse/customer-ui-design-tokens](packages/design-tokens)
- [@utilitywarehouse/customer-ui-fonts](packages/fonts)
- [@utilitywarehouse/customer-ui-icons](packages/icons)
- [@utilitywarehouse/customer-ui-react-icons](packages/react-icons)
- [@utilitywarehouse/customer-ui-theme](packages/theme)
- [@utilitywarehouse/customer-ui-material](packages/material)

## Getting started

Run setup. This will install [pnpm](https://pnpm.io/), which we use to manage
this monorepo.

**Make sure you're using node v16.10+ before running the below commands**

```console
npm run setup
```

### Install dependencies

This will install all dependencies across all packages.

```console
pnpm install
```

### Linting

This will run ESLint & prettier across all packages, and take advantage of turborepo's caching.

```console
pnpm lint
```

To fix linting & formatting issues, run:

```console
pnpm lint:fix
```

To run lint & build with turborepo:

```console
pnpm run checks
```

### Remote Caching

We're using Turborepo for our build workflows, which gives you out-of-the-box
local caching. We also have a remote caching server set up which enables our CI
process to take advantage of this local caching. To set your workspace up for
remote caching you will need to export a `TURBO_TOKEN` environment variable.
This token is available via 1Password, and to avoid having to temporarily export
it over and over again you will need to set up your bash or zsh files in a way
that doesn't commit this token to version control. For help with this please
reach out in the [Slack channel](https://utilitywarehouse.slack.com/archives/C01CFKS9GUE).

## Migration

Please see the [migration guide](MIGRATION_GUIDE.md) for details about migrating between major
versions.

## Tools

1. [pnpm](https://pnpm.io/), fast, disk space efficient package manager.
1. [turborepo](https://turborepo.org/) runs npm scripts and build processes, including remote caching.
1. [changesets](https://github.com/changesets/changesets), handles versioning, publishing and changelog generation.
1. [chromatic](https://www.chromatic.com/) is used for visual regression testing.
1. [ESLint](https://eslint.org/), JavaScript linter used to fix problems in our code as well as enforcing code style rules.
1. [prettier](https://prettier.io/), opinionated code formatter.
1. [Github Actions](https://github.com/utilitywarehouse/customer-web-ui/actions) runs our CI workflows.
1. [linear](https://linear.app/utilitywarehouse/team/CWUI/all) for issue tracking.
1. [husky](https://typicode.github.io/husky/#/), a tool making it easier to manage and create git hooks.
1. [pinst](https://github.com/typicode/pinst), works alongside husky to ensure `postinstall` doesn't run for published packages.

## Contributing

Please read our [contribution guide](CONTRIBUTING.md) for contributing changes
to Customer UI.

### Issues

Please feel free to open issues here, however we are using
[linear](https://linear.app/utilitywarehouse/team/CWUI/all) for issue tracking,
so it may be moved there after being evaluated.

## Publishing

All changes are published through [Github Actions](https://github.com/features/actions) on the
`main` branch. All development should take place on branches from `main` then
submit a PR to merge back to `main`.

[Changesets](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)
will be added as changes are contributed. When changes are merged to `main` the
release workflow will run which will open, and keep updated, a Version Pull
Request containing all changes. When this is merged to `main` all packages will
be versioned, published to npm and changelogs will be generated based on the
changesets.

**PLEASE NOTE** When adding icons, you must ensure your changeset bumps both the
`icons` and the `react-icons` packages. Please see the `react-icons` README for
more details.

