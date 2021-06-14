# UIProvider

The `UIProvider` component pulls together the various context providers which contribute to the state of the UI. These include:

* StylesProvider - Uses the internal `StylesProvider` component which is a wrapper to the [Material UI StylesProvider](https://next.material-ui.com/styles/api/#stylesprovider) component, but sets some default props.
* DarkModeProvider - See [docs on the DarkModeProvider](../DarkModeProvider) for more context.
* ThemeVariantsProvider - This is a private internal provider which manages the compilation of themes from the [theme package](../../../../theme).

## Usage

```TypeScript
import { UIProvider } from "@utilitywarehouse/customer-ui-material";

...

<UIProvider>
  <MyApplication>
</UIProvider>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `styleProviderProps` | StyleProviderProps | no | See [Material UI StylesProvider](https://next.material-ui.com/styles/api/#stylesprovider) for reference |
| `darkModeProviderProps` | DarkModeProviderProps | no | See [docs on the DarkModeProvider](../DarkModeProvider) for reference |
