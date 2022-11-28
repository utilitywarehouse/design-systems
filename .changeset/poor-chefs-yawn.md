---
'@utilitywarehouse/customer-ui-material': minor
---

Adds `RadioButton` and `RadioGroup` components. The `RadioButton` has a custom UW design compared to the standard MUI Radio component. The `RadioGroup` operates the same as the MUI Radio Group, except it can take in a `direction` prop, which will set the group of Radio Buttons to be in a row or column. By default, desktop and table are set to `row` were mobile is set to `column`. You can override this default with a string value, an array or an object, please see the [responsive values documentation](https://github.com/utilitywarehouse/customer-web-ui/blob/main/packages/material/tsconfig.build.json). In most, if not all cases, it's recommended to make use of the `RadioGroup` when implementing `RadioButton`s. One can use a Radio Button on its own, but will need to handle the `onChange` and state of each button.
