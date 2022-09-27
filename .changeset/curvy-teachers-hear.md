---
"@utilitywarehouse/customer-ui-material": major
---

This change deprecates and removes the `theme` package as it no longer provides
styling for components. As a result of this the Background context no longer
provides a theme and now only instead provides the  current `backgroundColor`
from the nearest `Background` component.

The `useTheme` hook now returns the MUI theme, with the `backgroundColor`
available from the `useBackground` hook. The incomplete dark mode implementation
has been removed, so the `colorScheme` value is no longer available.

```diff
- const { backdropLevel, colorScheme } = useTheme();
+ const theme = useTheme();
+ const { backgroundColor } = useBackground();
```
