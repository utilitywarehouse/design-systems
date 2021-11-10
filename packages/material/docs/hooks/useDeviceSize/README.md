# useDeviceSize

Returns the responsive device size.

## Usage

```TypeScript
import { useDeviceSize } from "@utilitywarehouse/customer-ui-material";

...

const {
  deviceSize, // "mobile", "tablet" or "desktop"
  isMobile, // boolean
  isTablet, // boolean
  isDesktop, // boolean
} = useDeviceSize();

```
