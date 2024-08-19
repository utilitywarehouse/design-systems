---
'@utilitywarehouse/web-ui': major
---

Remove `isBrandBackground` from `Box` context, please use `isInvertedBackground`
instead.

```diff
- const { isBrandBackground } = useBackground();
- const bg = isBrandBackground ? colorsCommon.brandWhite : colorsCommon.brandPrimaryPurple;
+ const { isInvertedBackground } = useBackground();
+ const bg = isInvertedBackground ? colorsCommon.brandWhite : colorsCommon.brandPrimaryPurple;
```

