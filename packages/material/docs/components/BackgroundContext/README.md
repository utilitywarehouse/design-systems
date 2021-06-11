# BackgroundContext

The `BackgroundContext` is a core component within the material package. It stores the theme in state of the resolved theme within the [Background](../Background) component.

## Usage

```TypeScript
import { BackgroundContext, useBackground } from "@utilitywarehouse/customer-ui-material";

...

// Customer UI Theme object from the closest Background component
const { theme } = useBackground()
// This is the same as using the context directly
const { theme } = React.useContext(BackgroundContext);

```
