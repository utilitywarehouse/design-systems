# BackgroundProvider

The `BackgroundProvider` provides the context which is consumed by the [Background component](../Background). The provider can be used without outputting a background colour. This might be useful when you want background context for theme purposes without persisting a div with a background colour to the DOM.

## Usage

```TypeScript
import { BackgroundProvider } from "@utilitywarehouse/customer-ui-material";

...

<BackgroundProvider backgroundColor="level1">
  ...
</BackgroundProvider>

```

## API reference

| Prop name | Type | Required | Description |
| --------- | ---- |:--------:| ----------- |
| `backgroundColor` | Enum{`level0`, `level1`, `level2`, `level3`, `level4`} | yes | The backdrop level to apply |
