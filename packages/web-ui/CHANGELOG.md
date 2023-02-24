# @utilitywarehouse/web-ui

## 0.0.2

### Patch Changes

- [#20](https://github.com/utilitywarehouse/design-systems/pull/20) [`f5b87a4`](https://github.com/utilitywarehouse/design-systems/commit/f5b87a470c0537b9d297a5fc6e3adac42d3def2a) Thanks [@robphoenix](https://github.com/robphoenix)! - Export custom `styled` utility, supporting typed custom theme

- [`46c06dc`](https://github.com/utilitywarehouse/design-systems/commit/46c06dce3240109fcc6a966a894f1f62b61addbb) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the `Background` component, moving the same functionality into the `Box` component. The `Background` component felt superfluous to our needs, and it feels more intuitive to have the functionality on the underlying `Box` component anyway. See also [Braid](https://seek-oss.github.io/braid-design-system/components/Box#backgrounds)

- [#28](https://github.com/utilitywarehouse/design-systems/pull/28) [`8dee2ed`](https://github.com/utilitywarehouse/design-systems/commit/8dee2eddf885c33e9283369bd8aa0c22c0dd557a) Thanks [@robphoenix](https://github.com/robphoenix)! - This change clarifies the typography components API.

  The `Text` and `Heading` components are intended to meet the majority of typography needs. These components are responsive and aware of any background context from containing `Box` components, meaning the foreground colour will change depending on whether they are rendered within a neutral background or an inverse background. They do not include the MUI system props for styling, however the `sx` prop is available to use as an escape hatch for any custom styling needs.

  The `Typography` component is available for more custom typography needs, it has no predefined styling but full access to the system props. The variant prop will be deprecated, and removed in a major release, but is currently available for backwards compatability.

- [#28](https://github.com/utilitywarehouse/design-systems/pull/28) [`8dee2ed`](https://github.com/utilitywarehouse/design-systems/commit/8dee2eddf885c33e9283369bd8aa0c22c0dd557a) Thanks [@robphoenix](https://github.com/robphoenix)! - This change removes the surplus height on the Icon component, closing https://linear.app/utilitywarehouse/issue/UWDS-270/fix-icon-component

- [#18](https://github.com/utilitywarehouse/design-systems/pull/18) [`cfc802a`](https://github.com/utilitywarehouse/design-systems/commit/cfc802afa77cd72875fa88dc5a1cf4a01f031aff) Thanks [@robphoenix](https://github.com/robphoenix)! - This change enables support for MUI system props on Box and layout components. [This](https://mui.com/system/getting-started/usage/#api-tradeoff) is a good reason why we will follow MUIs precedent for this supporting system props.
