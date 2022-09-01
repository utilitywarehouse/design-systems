---
"@utilitywarehouse/customer-ui-material": major
---

This change moves MUI dependencies to peer and export only bare essentials from MUI.

- fix historic dependency mismatch issues
- reduce bundle size
- provide greater insight into what components are specific to CWUI and what are
  stock MUI
- give us greater ownership over the custom components and their documentation
  and indicate that docs for stock MUI components should be sourced from MUI
  themselves, while providing docs & guidelines for our custom CWUI components
- avoid breaking API changes, and a major version release, when we move a
  component from stock MUI to custom CWUI as they will be imported from
  different libraries.
- no need to maintain a long list of components, hooks, functions, types etc.
  that are being exported from MUI

To update, please re-install CWUI along with it's peer dependencies, as
described in the README, and update any relevant imports.
