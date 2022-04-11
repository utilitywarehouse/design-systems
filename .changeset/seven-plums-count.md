---
"@utilitywarehouse/customer-ui-material": major
---

Updates to the `Typography` component and `TypographyProps`.

Breaking changes included in this change;

- remove `default` variant because it is unused and undocumented
- restrict `success` and `error` colours to non-heading variants, they should
  only be used for secondary text variants.

Other changes included in this change

- add `fontWeight` prop and other standard typography props (`letterSpacing`,
  `textTransform` & `align`). These are commonly used and so should be more
  easily accessible for devs.
- include `sx` prop for custom styling.

To update your code you will need to

- ensure you are not expecting the `default` Typography variant anywhere
- check you are not using `error` or `success` colours in heading variants.
- you can also update any hacky ways of styling your typography to using the new
  props or the `sx` prop.
