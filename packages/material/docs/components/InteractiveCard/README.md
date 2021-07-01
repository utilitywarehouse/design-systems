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
| `size` | Enum{`small`, `regular`, `large`} | no | Defaults to `regular`, defines the padding style of the card |
| `variant` | Enum{`primary`, `secondary`} | no | Defaults to `primary`, defines the hover colour behaviour |
| `containerProps` | BoxProps | no | See [Box component props](https://next.material-ui.com/components/box/#main-content) |
| `forwardedRef` | React.Ref<HTMLButtonElement>, React.Ref<HTMLAnchorElement> | no | The ref to forward to the root DOM element. Use `HTMLAnchorElement` when specifying a `href` prop, otherwise use `HTMLButtonElement` |

The interactive card component can either take the shape of a `<button />` or `<a />` tag depending on the props it is passed. By passing a `href` prop the result will be `<a />` otherwise a button is output.
