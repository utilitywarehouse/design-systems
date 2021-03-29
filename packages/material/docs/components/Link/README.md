# Link

The `Link` component wraps the [Material UI Link component](https://next.material-ui.com/components/links/#main-content) and provides a lighter interface. You have access to all the props available on a regular anchor tag `<a />` as well as an additional `variant` prop.

## Usage

```TypeScript
import { Link, Typography } from "@utilitywarehouse/customer-ui-material";

...

// Active links, this lets users know they are already
// visiting this part of your site
<Link variant="active" href="/subsection">Subsection</Link>

// Handle clicks via the handler function
<Link onClick={handler}>Do something</Link>

// Optionally wrap the link within a typography component
// to inherit font styles
<Typography variant="small">
  Some text with a <Link variant="secondary" href="/">link</Link>
</Typography>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `variant` | Enum{`default`, `active`, `secondary`} | no | The link variant, defaults to `default` |

The link component inherits all the props you'd expect from the HTML anchor element.
