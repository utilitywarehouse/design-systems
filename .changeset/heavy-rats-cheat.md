---
'@utilitywarehouse/web-ui': major
---

Rename the `large` Button size to `medium`.

```diff
- <Button size='large'></Button>
+ <Button size='medium'></Button>
  <Button
    size={{
      mobile: 'small',
-     desktop: 'large',
+     desktop: 'medium',
    }}
  ></Button>
```
