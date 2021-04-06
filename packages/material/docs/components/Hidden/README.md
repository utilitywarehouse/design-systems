# Hidden

Similar to the [Material UI Hidden component](https://next.material-ui.com/api/hidden/), except the props refer to the breakpoints we are using in customer UI. Resolution is also done via JS exclusively.

## Usage

```TypeScript
import { Hidden } from "@utilitywarehouse/customer-ui-material";

...

// Hide only on mobile
<Hidden only="mobile">...</Hidden>

// Hide on mobile and desktop
<Hidden only={["mobile", "desktop"]}>...</Hidden>

// Hide on tablet and desktop
<Hidden tabletUp>...</Hidden>

// Hide on tablet and mobile
<Hidden tabletDown>...</Hidden>

// Hide on mobile tablet and desktop
<Hidden mobile tablet desktop>...</Hidden>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `mobile` | boolean | no | Hide on mobile devices |
| `tablet` | boolean | no | Hide on tablet devices |
| `desktop` | boolean | no | Hide on desktop devices |
| `tabletDown` | boolean | no | Hide mobile and tablet devices |
| `tabletUp` | boolean | no | Hide tablet and desktop devices |
| `only` | Enum<`mobile`, `tablet`, `desktop`> | Enum<`mobile`, `tablet`, `desktop`>[] | no | Hide on a selected breakpoint or selected breakpoints |

The props above have some overlap, but it comes down to personal preference over what to use to achieve the same end result.
