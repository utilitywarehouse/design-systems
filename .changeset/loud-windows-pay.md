---
'@utilitywarehouse/css-reset': patch
---

Remove the text-rendering setting, as setting text-rendering to `optimizeSpeed` removes kerning & ligatures, and so noticeably affects the typography visuals of the Aeonik font.

- https://css-tricks.com/almanac/properties/t/text-rendering/
- https://marco.org/2012/11/15/text-rendering-optimize-legibility
