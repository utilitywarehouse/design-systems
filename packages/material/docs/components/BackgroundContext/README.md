# BackgroundContext

The `BackgroundContext` is a core component within the material package. It stores the theme in state of the resolved theme within the [Background](../Background) component.

## Usage

```TypeScript
import { BackgroundContext } from "@utilitywarehouse/customer-ui-material";

...

// Customer UI Theme object from the closest Background component
const { theme } = React.useContext(BackgroundContext);

```
