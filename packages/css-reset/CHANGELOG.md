# @utilitywarehouse/css-reset

## 0.0.4

### Patch Changes

- [#149](https://github.com/utilitywarehouse/design-systems/pull/149) [`c0cd74d`](https://github.com/utilitywarehouse/design-systems/commit/c0cd74d3ee42649638b6fd9ce05007c2f73a59b8) Thanks [@robphoenix](https://github.com/robphoenix)! - # text-rendering

  Setting text-rendering to `optimizeSpeed` removes kerning & ligatures, and so
  noticeably affects the typography visuals of the Aeonik font. Therefore we will
  set it to `optimizeLegibility` for all heading elements, and in the Web UI
  `Heading` component.

  - https://css-tricks.com/almanac/properties/t/text-rendering/
  - https://marco.org/2012/11/15/text-rendering-optimize-legibility

- [#150](https://github.com/utilitywarehouse/design-systems/pull/150) [`4079bef`](https://github.com/utilitywarehouse/design-systems/commit/4079bef2ae827b1ecb16ea8601a5a8da361a177f) Thanks [@vivaldi-va](https://github.com/vivaldi-va)! - fix all family and generic names being quoted

## 0.0.3

### Patch Changes

- [#147](https://github.com/utilitywarehouse/design-systems/pull/147) [`44ccfeb`](https://github.com/utilitywarehouse/design-systems/commit/44ccfeb988d51e362607a4ce94c9db8bbea097ae) Thanks [@robphoenix](https://github.com/robphoenix)! - Remove `CssBaseline` theme, and stop including the `CssBaseline` component in the `ThemeProvider`. Recommend using `@utilitywarehouse/css-reset` instead.

## 0.0.2

### Patch Changes

- [#145](https://github.com/utilitywarehouse/design-systems/pull/145) [`750cc5d`](https://github.com/utilitywarehouse/design-systems/commit/750cc5db36db17afa6f06650729f5cde68cbc158) Thanks [@robphoenix](https://github.com/robphoenix)! - Initial release of css-reset package
