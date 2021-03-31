# MenuItem

The `MenuItem` component wraps the [Material UI MenuItem component](https://next.material-ui.com/api/menu-item/) with an additional `backgroundColor` prop.

## Usage

```TypeScript
import { Menu, MenuItem } from "@utilitywarehouse/customer-ui-material";

...

<Menu>
  <MenuItem>Item 1</MenuItem>
  <MenuItem backgroundColor="level3">Item 2</MenuItem>
</Menu>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `backgroundColor` | Enum{`level0`, `level1`, `level2`, `level3`, `level4`} | no | The background colour to apply to the menu item, defaults to `level4` |

The `MenuItem` component inherits all the props from the [Material UI MenuItem component](https://next.material-ui.com/api/menu-item/).
