---
'@utilitywarehouse/web-ui': patch
---

To make the transition smoother from `customer-ui-material`, and to better support the removal of the background colour context, this change adds back the legacy `Background` component, and removes the functionality from `Box`, so that we don't have to make any breaking changes with that component, and can deprecate the Background component and remove in the next major release.
