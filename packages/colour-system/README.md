# UW Colour System

Colour scales for building UW Web UIs.

## Installation

```console
yarn add @utilitywarehouse/colour-system
```

## Usage

The colour system package exports 3 _color_ objects, `colors` is the default
colour scales for light mode, and `colorsDark` is colour scales for dark mode,
used in native mobile applications. The `colorsCommon` object includes semantic
brand & service colours used across both light & dark modes.

```tsx
import { colors, colorsDark, colorsCommon } from '@utilitywarehouse/colour-system'

[...]

<Box color={isDarkMode ? colors.grey500 : colorsDark.grey500} />

[...]

<Box bgcolor={colorsCommon.serviceBroadband} />
<Box bgcolor={colorsCommon.brandPrimaryPurple} />
```
