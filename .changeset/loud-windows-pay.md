---
'@utilitywarehouse/css-reset': patch
'@utilitywarehouse/web-ui': patch
---

# text-rendering

Remove the text-rendering setting from css-reset, as setting text-rendering to
`optimizeSpeed` removes kerning & ligatures, and so noticeably affects the
typography visuals of the Aeonik font.
We will set this specifically in Web UI, differently for text & heading
components.

- https://css-tricks.com/almanac/properties/t/text-rendering/
- https://marco.org/2012/11/15/text-rendering-optimize-legibility

# font-smoothing

Setting to antialiased significantly changes the appearance of text, and is only
really beneficial with light text on dark background, so we're removing it from
the css-reset and moving it to the heading & text components in Web UI.

- https://www.joshwcomeau.com/css/custom-css-reset/#four-font-smoothing-5
- https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/

