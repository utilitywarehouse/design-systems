---
'@utilitywarehouse/web-ui': patch
---

This change clarifies the typography components API.

The `Text` and `Heading` components are intended to meet the majority of typography needs. These components are responsive and aware of any background context from containing `Box` components, meaning the foreground colour will change depending on whether they are rendered within a neutral background or an inverse background. They do not include the MUI system props for styling, however the `sx` prop is available to use as an escape hatch for any custom styling needs.

The `Typography` component is available for more custom typography needs, it has no predefined styling but full access to the system props. The variant prop will be deprecated, and removed in a major release, but is currently available for backwards compatability.
