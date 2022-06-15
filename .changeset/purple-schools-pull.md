---
"@utilitywarehouse/customer-ui-material": major
---

This change updates the button sizing.

    - add `small` size
    - rename `regular` size to `medium`
    - update large size button height
    - remove responsive sizing
    - update horizontal padding

To update, please review the responsive sizing of your buttons, as the button component will no longer change size in response to the viewport resizing. There are now 3 static sizes to make use of: `small`, `medium` & `large`.
You will also need to update any `regular` buttons to the `medium` size.

```diff
  <Button
-  size="regular"
+  size="medium"
  />
```
