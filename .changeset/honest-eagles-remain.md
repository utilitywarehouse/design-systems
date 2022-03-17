---
"@utilitywarehouse/customer-ui-material": patch
---

introduce only `NavLink` component

After discussion, it is felt that best approach would be to introduce only the
`NavLink` component, and in a future major release use the `TextLink` component
but with the name `Link`, effectively introducing breaking changes to the
`Link` component.
