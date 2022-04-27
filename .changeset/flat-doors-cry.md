---
"@utilitywarehouse/customer-ui-material": minor
---

The Icon component doesn't need all the mui style props, any custom
styling can be done with the sx prop. This change reduces brings the styling
options for this component in line with other components in Customer UI and
adds some future proofing. To update, developers will need to move any custom
styling into an sx prop.
