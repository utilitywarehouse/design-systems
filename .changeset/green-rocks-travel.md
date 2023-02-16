---
'@utilitywarehouse/web-ui': patch
---

This change removes the `Background` component, moving the same functionality into the `Box` component. The `Background` component felt superfluous to our needs, and it feels more intuitive to have the functionality on the underlying `Box` component anyway. See also [Braid](https://seek-oss.github.io/braid-design-system/components/Box#backgrounds)
