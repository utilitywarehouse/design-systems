---
"@utilitywarehouse/customer-ui-material": major
---

There are now 3 static sizes available on the `Button` component: `small`,
`medium` and `large`.

The `regular` size has been renamed to `small`, with a new `medium` size added.

```diff
  <Button
-  size="regular"
+  size="small"
  />
```

The horizontal padding has been increased to *32px* on all sizes, and the font
size has also been updated from *16px* to *18px*.

The responsive sizing has been removed, so the button will remain the same size
no matter what the viewport width. Please check and update any buttons that need
to be different sizes on desktop and mobile.
