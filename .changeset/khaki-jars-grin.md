---
"@utilitywarehouse/customer-ui-material": major
---

Small but breaking changes to the Background, Card & InteractiveCard components

The Background & Card components don't need all the mui style props, any custom
styling can be done with the `sx` prop. This change reduces brings the styling
options for this component in line with other components in Customer UI and
adds some future proofing. To update, developers will need to move any custom
styling into an sx prop.

The `variant` prop on the InteractiveCard does nothing, so it is being removed.
Devs should ensure they are not using it.

Alongside these changes, a bunch of unused code was removed; we currently have
no solid testing strategy, pretending we do creates a false sense of security,
so all jest/enzyme code has been removed. We also currently make no use of dark
mode, and do not want to try and shoehorn a dark mode into the current
implementation in the future, so some unnecessary dark mode code has been
removed.
