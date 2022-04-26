---
"@utilitywarehouse/customer-ui-material": major
---

This change updates the Grid component to be a convenience wrapper around the
mui Grid component rather than a custom component.

The custom Grid component was introduced by developers who are no longer
involved with Customer UI and so their reasoning for it is not fully
understood. I believe it is because it is not currently possible to easily use
custom breakpoints with the mui Grid component
([mui/material-ui/issues/26369](https://github.com/mui/material-ui/issues/26369)),
and possibly to include some Customer UI specific defaults.

However the component has gained a really negative reputation for having an
overly complicated implementation, lacking in functionality, being buggy and
essentially not fit for purpose. Therefore this change replaces the custom Grid
with the mui Grid but with some convenience defaults and a workaround to use
our custom breakpoints.

This changes the expected props and the behaviour of the current Grid
component, so layouts that use it may have to be refactored. This change also
removes the GridSpacer component, as it is rendered unnecessary by these
changes and we will soon be introducing a more generic Spacer component.
