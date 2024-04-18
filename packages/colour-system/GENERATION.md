# Colour System generation

The colour system package is generated from the Figma source. This process can be
done manually on your local machine, or via GitHub Actions, which is the
preferred method. Manually running the generation script should only really be
done to debug any problems.

## Generating a new release

1. Open an issue on Linear, using the `Colour System Release` template, updating the
   title with the version number.
1. In the Design Systems GitHub repo, navigate to the Actions tab, and click on the
   `Generate` workflow on the left.
1. On the right hand side click on the `Run workflow` dropdown, this will
   present you with a small form.
1. Update the branch name with the branch name from the above Linear issue.
1. Select the [semver](https://semver.org/) version bump you require. This
   should be `minor` when adding new colours, and any potential breaking changes should be
   discussed before release.
   If the version type needs to be changed after the release has been generated,
   you will need to manually update the changeset to reflect this.
1. Click `Run workflow`.
1. This will generate a new PR with the changes. Please share this in the
   `#team-design-systems` channel, requesting design review.
1. When the changes have been approved, merge the generated PR. This will in
   turn generate a versioning PR, to be merged when ready.
1. This will publish the changes and post the release in the
   `#help-design-systems` channel.

