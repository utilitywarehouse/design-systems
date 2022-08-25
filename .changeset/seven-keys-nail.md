---
"@utilitywarehouse/customer-ui-material": major
---

Move MUI dependencies to peer and export only bare essentials from MUI. This
will solve the historic dependency mismatch issues we've encountered. It will
also reduce our bundle size, provide greater insight into what components are
specific to CWUI and what are stock MUI, give us greater ownership over the
custom components and their documentation and indicate that docs for stock MUI
components should be sourced from MUI themselves, as well as avoiding breaking
API changes, and a major version release, when we move a component from stock
MUI to custom CWUI as they will be imported from different libraries.
