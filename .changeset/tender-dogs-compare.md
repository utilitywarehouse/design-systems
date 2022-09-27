---
"@utilitywarehouse/customer-ui-material": major
---

This change updates the button variants to reflect the design variant naming
rather than mui variant naming.

    - `contained` -> `primary`
    - `outlined` -> `secondary`

To update, please rename your button variants.

```diff
  <Button
-  variant="contained"
+  variant="primary"
  />
```

```diff
  <Button
-  variant="outlined"
+  variant="secondary"
  />
```
