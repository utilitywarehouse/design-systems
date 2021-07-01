# Icon

The `Icon` component accepts React components which accept SVG props and is designed to be used with [@utilitywarehouse/customer-ui-react-icons](../react-icons).

For a full list of icons see [storybook icons](http://alpha.storybook.customer-ui-material-uw.surge.sh/?path=/story/stories-components-icons).

## Usage

```TypeScript
import { Icon } from "@utilitywarehouse/customer-ui-material";
import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";

...

// This icon will inherit the colour of the closest Typography color
<Icon icon={Dropdown} />

// Define the colour of the icon
<Icon icon={Dropdown} color="#ff0000" />

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `icon` | React.ComponentType<React.SVGProps<SVGSVGElement>> | yes | The icon component to render |
| `color` | string | no | The colour of the icon, defaults to `inherit` |
| `iconProps` | React.SVGProps<SVGSVGElement> | no | Props to forward to the SVG icon component |
| `forwardedRef` | React.Ref<unknown> | no | The ref to forward to the DOM element |

The icon component inherits the props from the [Box component](../Box).
