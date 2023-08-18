---
'@utilitywarehouse/css-reset': patch
'@utilitywarehouse/web-ui': patch
---

# text-rendering

Setting text-rendering to `optimizeSpeed` removes kerning & ligatures, and so
noticeably affects the typography visuals of the Aeonik font. Therefore we will
set it to `optimizeLegibility` for all heading elements, and in the Web UI
`Heading` component.

- https://css-tricks.com/almanac/properties/t/text-rendering/
- https://marco.org/2012/11/15/text-rendering-optimize-legibility
