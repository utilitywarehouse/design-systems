# Interactive card

The `InteractiveCard` component is similar to the [Card](../Card) component, except it can be interacted with and essentially becomes a button component.

## Usage

```TypeScript
import { InteractiveCard } from "@utilitywarehous/customer-ui-material";

...

<InteractiveCard onClick={clickHandler}>
  ...
  // content, any components can be rendered here
  ...
</InteractiveCard>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `backgroundColor` | Enum{`level0`, `level1`, `level2`, `level3`, `level4`} | no | The background color variant of the card. The default value is resolved based on the background context of where the card is being placed. |
| `Background` | React.ComponentType | no | An optional component to use as the background of the card which is placed on top of the card, underneath the content. E.g for placing full background images onto the card which will not be contained to the cards content area. |

The `InteractiveCard` component inherits all the props you'd expect from the HTML button element.
