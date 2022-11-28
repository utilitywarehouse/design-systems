---
'@utilitywarehouse/customer-ui-material': minor
---

A Radio button and Radio group component where added. The Radio Button have a custom UW design compared to the standard MUI Radio component. The Radio group operates the same as the MUI Radio Group, except it can take in a `direction` prop, which will set the group of Radio Buttons to be in a row or column. By default, desktop and table are set to `row` were mobile is set to `column`. It's recommended to pass in an object config if you would like to override the default i.e `{desktop: 'row', table: 'row', mobile: 'column'}`. In most, if not all cases, it's recommended to make use of the Radio Group when implementing Radio Buttons. One can use a Radio Button on its own, but will need to handle the onChange and state of each button.
