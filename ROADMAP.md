# UW Web UI Roadmap

## Current

### Fonts

Fonts used in all web projects are located in multiple places, and can also
sometimes be stored locally to a project. There are a number of libraries where
a more shareable approach is taken:

- [partner-ui-assets](https://github.com/utilitywarehouse/partner-ui/blob/master/packages/assets)
- [customer-ui-fonts](https://github.com/utilitywarehouse/customer-web-ui/tree/main/packages/fonts)
- [uw-fontsource](https://github.com/utilitywarehouse/fontsource)

Combining these efforts under the UW Web UI project would provide a Single
Source of Truth for all user facing fonts that could be well-documented and
linked to any related Brand & Design guidelines. It would also benefit from
being a single project to maintain, reducing burden on multiple teams, as well
as providing different methods for using these web fonts, whether via NPM or a
CDN, as well as ensuring best practices are being used for font quality and
performance.

## Next

### Components

As a way of unifying products across Customer & Partner there have been
discussions around creating a library of shared components to replace the
Customer UI & Partner UI libraries. This replacement could also be used for any
other project that requires the same styling, such as the CMS rewrite.

There are some considerations to this project that mean it may not be suitable
for current Partner UI libraries and associated applications. Firstly, this is
because Partner projects generally use version 16 of React and version 4 of
Material UI, whereas Customer UI is using React version 17 and Material UI
version 5. It would not be possible to use a newer library like Customer UI
within Partner projects due to this dependency mismatch, and upgrading
Partner projects to these more recent versions would require a significant
amount of work and rewriting of the current codebases. Secondly, Customer UI
has taken a different approach to the Partner UI libraries, creating
self-contained components where Partner uses stock Material UI components
with a custom theme and component overrides.

The general consensus in both Customer & Partner teams is for any new library to
aim for newer Partner projects, and not attempt to fit into legacy Partner
applications. This does suggest the possibility of repurposing, and renaming,
Customer UI for more general consumption than solely Customer products.

