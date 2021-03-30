# Background

The `Background` is a core component within the material package. It is responsible for resolving the theme which will be consumed by child components. The background component is a simple [Box](https://next.material-ui.com/components/box/#main-content) component which applies a background based on the `backgroundColor` prop.

## Usage

```TypeScript
import { Background } from "@utilitywarehouse/customer-ui-material";

...

<Background backgroundColor="level1">
  ...
</Background>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `backgroundColor` | Enum{`level0`, `level1`, `level2`, `level3`, `level4`} | yes | The backdrop level to apply |

See [Box](https://next.material-ui.com/components/box/#main-content) documentation for additional props.
