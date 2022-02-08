# Icons

Customer UI SVG icons, from the [UW Foundation Design Library](https://www.figma.com/file/R3NKpDsHVjcFt9vXqReoKZ/UW-Foundation?node-id=561%3A33). Icons are organised by size; 24x24 & 48x48.

## Colour

Icons have a single colour which can be set using the `fill` property in the CSS
class `customer-ui__icon`.

```css
.customer-ui__icon {
  fill: #bada55
}
```

## Adding icons

Include the `customer-ui__icon` CSS class on the `svg` element.

```xml
<svg width="24" height="24" class="customer-ui__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
```

Ensure the fill colour of the icon is inherited from the fill property on the
`<svg />` tag. This allows for overriding the fill colour at the top level of
the SVG in consuming libraries.

```xml
<path d="..." fill="inherit" />
```

Icon file names must be lowercase and contain only alpha characters and hyphens.

