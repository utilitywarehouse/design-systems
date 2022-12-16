# UW Design System

Shared tools and libraries for building UW applications.

## Prettier config

A UW standard config for Prettier code formatting.

## Web UI

A set of UW React components.

## Contributing

Please read our [contribution guide](CONTRIBUTING.md).

### Issues

Please feel free to open issues here, however we are using
[linear](https://linear.app/utilitywarehouse/team/UWUI/all) for issue tracking,
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
