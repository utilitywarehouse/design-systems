# DarkModeProvider

**NOTE** dark mode is not yet supported. It can be used, but the theme is not implemented. Make sure users of your application cannot inadvertantly enable dark mode.

The `DarkModeProvider` allows for managing whether or not dark mode should be enabled.

## Usage

```TypeScript
import { DarkModeProvider, DarkModeContext } from "@utilitywarehouse/customer-ui-material";

...

<DarkModeProvider
  useSystemColorScheme={false}
>
  ...
</DarkModeProvider>

const {
  // Allows you to set the value for dark mode
  setDarkMode,
  // Boolean
  darkModeEnabled,
  // Boolean
  darkModeEnabledSystemValue
} = React.useContext(DarkModeContext);

// Turn dark mode on
setDarkMode("on");

// Turn dark mode off
setDarkMode("off");

// Use the system value for dark mode
setDarkMode("system");

```

## Provider API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `defaultValue` | Enum{`on`, `off`} | no | The initial value for dark mode, defaults to `off` |
| `value` | Enum{`on`, `off`} | no | The value to use for dark mode, this allows you to set dark mode at a higher level and cascade through to this provider. Defaults to `undefined` |
| `useSystemColorScheme` | Boolean | no | Whether to use the system colour scheme to detect if dark mode should be enabled or not. Defaults to `true` |

See [Box](https://next.material-ui.com/components/box/#main-content) documentation for additional props.
