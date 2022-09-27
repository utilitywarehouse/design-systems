---
"@utilitywarehouse/customer-ui-material": major
---

This changeset replaces the Background components backgroundColor `levels`
naming convention with the colour names. While there were conversations around
establishing a semantic naming convention, these have stalled and would benefit
from a wider approach that considers all colour usage and intent, across
components and designs. This change was felt to be the lowest impact interim
solution as it requires no changes to UX designs or conventions, and provides a
simple clarity when translating designs to code.

When updating to this change the `backgroundColor` prop on the `Background` &
`BackgroundProvider` components will need to be changed:

```diff
  <Background
-  backgroundColor="level5"
+  backgroundColor="white"
  >
```

According to the following:

```
level5 -> white
level4 -> whiteOwl
level3 -> lightTint
level2 -> purple
level1 -> midnight
```

You should also be aware that when using `useBackground`, the `backgroundColor`
value that is returned will also now be one of the colour names rather than a
level name.

The type of this value has also been renamed from `BackdropLevel` to
`BackgroundColor`, and all instances of `backdropLevel` have similarly been
renamed.
