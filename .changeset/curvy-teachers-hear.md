---
"@utilitywarehouse/customer-ui-material": major
---

This change deprecates and removes the `theme` package as it is no longer
providing styling for components. As a result of this the Background context
has changed; it no longer provides a theme and now only provides the
`backgroundLevel` for the `Background` component.

To update you will need to replace the removed `useTheme` hook with the new
`useBackground` & `useDarkMode` hooks. The mui theme is still available through
the `useMuiTheme` hook.

```diff
- const { backdropLevel, colorScheme } = useTheme();
+ const { backdropLevel } = useBackground();
+ const { darkModeEnabled } = useDarkMode();
```
