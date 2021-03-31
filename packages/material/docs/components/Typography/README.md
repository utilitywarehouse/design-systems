# Typography

Any text based components should utilise the `Typography` component. The Typography component behaves in a similar way to the [Material UI Typography](https://next.material-ui.com/components/typography/#main-content) component. The main differences are the variants which can be used alongside the addition of the concept of `state` within the component to recolour text based on its "state".

## Usage

```TypeScript
import { Typography } from "@utilitywarehouse/customer-ui-material";

...

// h1 tag
<Typography variant="h1">H1</Typography>

// h2 tag
<Typography variant="h2">H2</Typography>

// h3 tag
<Typography variant="h3">H3</Typography>

// h4 tag
<Typography variant="h4">H4</Typography>

// h5 tag
<Typography variant="h5">H5</Typography>

// Default, body
<Typography variant="default">body</Typography>
<Typography>body</Typography>

// Smaller body text
<Typography variant="small">small body</Typography>

// label
<Typography variant="label">label</Typography>

// Headline
<Typography variant="headline">headline</Typography>

// Subheading
<Typography variant="subheading">subheading</Typography>

// Footnote
<Typography variant="footnote">footnote</Typography>

// Caption
<Typography variant="caption">caption</Typography>

// Interactive
<Typography variant="interactive">interactive</Typography>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `state` | Enum{`default`, `success`, `error`} | no | The state to apply to the text `default` |
| `gutterBottom` | Boolean | no | See [Material UI docs](https://next.material-ui.com/api/typography/#props), defaults to `false` |
| `paragraph` | Boolean | no | See [Material UI docs](https://next.material-ui.com/api/typography/#props), defaults to `false` |
| `variant` | Enum{String} | no | See the examples above for full list of variants |
| `component` | React.ElementType | no | See [Material UI docs](https://next.material-ui.com/api/typography/#props), defaults to `span` |

The typography component inherits props from the HTML span element.
