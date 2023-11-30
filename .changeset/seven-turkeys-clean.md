---
'@utilitywarehouse/web-ui': patch
---

This is a housekeeping PR.

- sync component naming convention; `componentName`, `componentClassName` & `StyledElement`
- standardise usage of `createBox` & `styled`
  - `createBox` for general polymorphic components
  - `styled` for custom components
- settle on react import; `import * as React from "react"` rather than named imports; clarifies what's react and what's custom
- clean up `createBox` utility
- clean up usage of data attributes and mark what needs removing in v1
- [uppercase only const variables when exported](https://github.com/airbnb/javascript/#naming--uppercase)
- update styling to use declarative CSS rather than JS; with a view to lean on CSS more heavily in the future, isolating CSS-in-JS to separate styling packages.
- Fixes
  - `RadioTile` label when disabled
  - `RadioGroup` aria-orientation
