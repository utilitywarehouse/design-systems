---
'@utilitywarehouse/web-ui': patch
---

This change reverts a previous change that attempted to simplify how we create component prop types. This earlier change came about due to issues with Storybook not showing prop controls or autogenerating prop tables, however the change also broke the polymorphic typing of components.
