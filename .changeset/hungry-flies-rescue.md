---
"@utilitywarehouse/customer-ui-material": major
---

This change renames the root provider to `ThemeProvider`, so as to better
describe it's usage and to bring it in line with current styling library
conventions.

At the same time it adds a `theme` prop that will accept a partial theme and
merge it with the default theme.

```diff
- <UIProvider>
+ <ThemeProvider>
    <App />
- </UIProvider>
+ </ThemeProvider>
```
