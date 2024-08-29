---
'@utilitywarehouse/web-ui': major
---

Rename the `large` IconButton size to `medium`.

```diff
- <IconButton size='large'></IconButton>
+ <IconButton size='medium'></IconButton>
  <IconButton
    size={{
      mobile: 'small',
-     desktop: 'large',
+     desktop: 'medium',
    }}
  ></IconButton>
```
