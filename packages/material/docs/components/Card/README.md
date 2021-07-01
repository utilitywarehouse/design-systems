# Card

The `Card` component differs from the Material UI card component and is more similar to the Paper component provided by Material UI. The card component is simply a surface on which to put content.

## Usage

```TypeScript
import { Card } from "@utilitywarehous/customer-ui-material";

...

<Card>
  ...
  // content, any components can be rendered here
  ...
</Card>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `backgroundColor` | Enum{`level0`, `level1`, `level2`, `level3`, `level4`} | no | The background color variant of the card. The default value is resolved based on the background context of where the card is being placed. |
| `forwardedRef` | React.Ref<HTMLDivElement> | no | The ref to forward to the DOM element |

See [Box](https://next.material-ui.com/components/box/#main-content) documentation for additional props.
