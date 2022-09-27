---
"@utilitywarehouse/customer-ui-material": patch
---

This change deprecates the `forwardedRef` prop on components in favour of using
`React.forwardRef`. The `forwardedRef` prop will be removed in the next major
release.

To prepare for this please update any refs you have.

```diff
- forwardedRef={el}
+ ref={el}
```
