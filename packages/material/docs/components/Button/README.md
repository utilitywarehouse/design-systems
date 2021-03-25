# Button

The `Button` component inherits some props from the [Material UI Button](https://next.material-ui.com/components/buttons/#main-content) component, but abstracts and modifies some props to better suit the use case within the customer design space.

## Usage

```TypeScript
import { Button } from "@utilitywarehouse/customer-ui-material";

...

// Contained button
<Button variant="contained">
  Contained
</Button>

// Outlined button
<Button variant="outlined">
  Outlined
</Button>

// Tertiary button
<Button variant="tertiary">
  Tertiary
</Button>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `size` | Enum{`regular`, `large`} | no | The button size, defaults to `regular` |
| `variant` | Enum{`contained`, `outlined`, `tertiary`} | no | The button variant, defaults to `contained` |
| `fullSize` | Boolean | no | Whether or not the button should be full width, defaults to `false` |
| `href` | String | no | The button will behave as a link |

The button component inherits all the props you'd expect from the HTML button element.
