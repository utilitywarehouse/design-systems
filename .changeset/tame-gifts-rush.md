---
'@utilitywarehouse/web-ui': patch
---

This change enables support for MUI system props on Box and layout components,
and removes the `Background` component, moving the same functionality into the
`Box` component.

[This](https://mui.com/system/getting-started/usage/#api-tradeoff) is a good
reason why we will follow MUIs precedent for this supporting system props. The
`Background` component felt superfluous to our needs, and it feels more
intuitive to have the functionality on the underlying `Box` component anyway.
See also
[Braid](https://seek-oss.github.io/braid-design-system/components/Box#backgrounds)
