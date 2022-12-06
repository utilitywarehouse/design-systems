# Web UI

Shared tools and libraries for building UW web applications.

## Getting Involved

If you have any questions, want to find out more, or would like to get involved
in the discussions around this project, please come say hi in the
[`#proj-web-ui`](https://utilitywarehouse.slack.com/archives/C03N4L8V05T) Slack
channel.

## Contributing

Please read our [contribution guide](CONTRIBUTING.md) for getting involved with
UW Web UI.

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
