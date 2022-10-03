# Customer Web UI

This monorepo contains packages for building Customer web applications.

For more information about how this fits into the wider UI landscape, please
have a look at [the wiki](https://wiki.prod.uw.systems/en/Technology/ui-development)
(requires VPN connection).

## Packages

- [@utilitywarehouse/customer-ui-design-tokens](packages/design-tokens)
- [@utilitywarehouse/customer-ui-icons](packages/icons)
- [@utilitywarehouse/customer-ui-react-icons](packages/react-icons)
- [@utilitywarehouse/customer-ui-material](packages/material)

## Contributing

Please read our [contribution guide](CONTRIBUTING.md) for getting involved with
Customer Web UI.

### Issues

Please feel free to open issues here, however we are using
[linear](https://linear.app/utilitywarehouse/team/CWUI/all) for issue tracking,
so it may be moved there after being evaluated.

## Upgrading

Please see the [migration guide](MIGRATION_GUIDE.md) for details about migrating between major
versions.

## Tools we use

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

