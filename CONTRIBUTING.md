# Contributing

Thank you for your interest in contributing to Customer UI! This project is made
possible by contributors like you, and we welcome any contributions to the code
base and the documentation.

## Environment

- Ensure you have the latest version of Node and Yarn.
- Run `yarn` to install all needed dev dependencies.

## Making Changes

Pull requests are encouraged. If you want to add a feature or fix a bug:

1. Clone this repository
1. [Create a separate branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)
   for your changes
1. Make your changes, and ensure they are formatted by
   [Prettier](https://prettier.io), a pre-commit hook will ensure linting &
   formatting checks pass
1. Create a changeset by running `yarn changeset`. [More info](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).
1. Push your branch and open a PR 🚀

## Changesets

Customer UI uses [changesets](https://github.com/changesets/changesets) for
versioning, publishing and automating changelogs. This means that you need to
add a changeset by running `yarn changeset`, you will then be prompted to select
which package(s) to include in the changeset, and then a bump type from `major`,
`minor` or `patch`, and finally you will need to add a message to be included in
the next release and associated changelog.

Not all changes require changesets, so Pull Requests are not blocked if missing
a changeset, however you may be asked to add one, or one may be added for your
change.
