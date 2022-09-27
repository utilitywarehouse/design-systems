---
"@utilitywarehouse/customer-ui-material": minor
---

The MUI system props used for styling are being deprecated or in some cases have
already been removed. This focuses the styling options for components on a
consistent API, settling on the `sx` prop and `styled` utility, in line with
other components in Customer Web UI and also adds some future proofing. To
update, developers will need to move any custom styling into an sx prop. Any
components that did not previously expose the `sx` prop will now have it
available for styling.

Components affected:
- Icon
- Background
- Card
