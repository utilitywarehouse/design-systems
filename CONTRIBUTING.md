# Contributing

Thank you for your interest in contributing to UW Web UI!
This project is made possible by contributors like you, and we welcome any
contributions to the codebase and documentation.

## Getting Started

Run setup in the root of the repo. This will install [pnpm](https://pnpm.io/),
which we use to manage this monorepo.

**Make sure you're using node v16.10+ before running the below commands**

```console
npm run setup
```

Next, install install dependencies across all packages, and build the local
packages.

```console
pnpm install
pnpm build
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

## Making Changes

Pull requests are encouraged. If you want to add a feature or fix a bug:

1. Clone this repository
1. [Create a separate branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)
   for your changes
1. Make your changes, and ensure they are formatted by
   [Prettier](https://prettier.io), a pre-commit hook will ensure linting &
   formatting checks pass
1. Create a changeset by running `pnpm changeset`. [More info](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).
1. Push your branch and open a PR 🚀

## Changesets

Customer UI uses [changesets](https://github.com/changesets/changesets) for
versioning, publishing and automating changelogs. This means that you need to
add a changeset by running `pnpm changeset`, you will then be prompted to select
which package(s) to include in the changeset, and then a bump type from `major`,
`minor` or `patch`, and finally you will need to add a message to be included in
the next release and associated changelog.

Not all changes require changesets, so Pull Requests are not blocked if missing
a changeset, however you may be asked to add one, or one may be added for your
change.

## Remote Caching

We're using Turborepo for our build workflows, which gives you out-of-the-box
local caching. We also have a remote caching server set up which enables our CI
process to take advantage of this local caching. To set your workspace up for
remote caching you will need to export a `TURBO_TOKEN` environment variable.
This token is available via 1Password, and to avoid having to temporarily export
it over and over again you will need to set up your bash or zsh files in a way
that doesn't commit this token to version control. For help with this please
reach out in the `#proj-uw-web-ui` Slack channel.
