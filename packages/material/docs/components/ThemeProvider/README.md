# ThemeProvider

The `ThemeProvider` manages the compilation of themes from the [theme package](../../../../theme). The themes can then be fetched via the `useTheme` React hook.

## Usage

```TypeScript
import { ThemeProvider, useTheme } from "@utilitywarehouse/customer-ui-material";

...

<ThemeProvider>
  ...
</ThemeProvider>

const {
  // For fetching a customer UI theme
  // You should use the BackgroundContext to fetch themes if you need
  // to access them as they are resolved at that point
  getCustomerUITheme,
  // For fetching a customer MUI theme
  getMuiTheme,
} = useTheme();

```

## Provider API reference

The theme provider accepts no props other than `children`.
