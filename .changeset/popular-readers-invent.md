---
"@utilitywarehouse/customer-ui-material": patch
---

This change deprecates the `forwardedRef` prop on components and introduces `React.forwardRef` as a replacement. The `forwardedRef` prop will be removed in the next major release; `v3`. To prepare for this please update any refs you have.

```diff
- forwardedRef={el}
+ ref={el}
```
