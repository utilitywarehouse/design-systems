# @utilitywarehouse/customer-ui-theme

## 1.1.3

### Patch Changes

- [#441](https://github.com/utilitywarehouse/customer-ui/pull/441) [`fd343c2`](https://github.com/utilitywarehouse/customer-ui/commit/fd343c2cef3403d766e427c93741bad40e3f739b) Thanks [@robphoenix](https://github.com/robphoenix)! - Just need to check the release & publish process

## 1.1.2

### Patch Changes

- [#369](https://github.com/utilitywarehouse/customer-ui/pull/369) [`50f101d`](https://github.com/utilitywarehouse/customer-ui/commit/50f101d7bd62bf83f6ecdff35c4cc7c8fa04b40d) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Background component styles from theme package to component

* [#372](https://github.com/utilitywarehouse/customer-ui/pull/372) [`872007a`](https://github.com/utilitywarehouse/customer-ui/commit/872007aabf7604182966a825674571fe9fb705ae) Thanks [@robphoenix](https://github.com/robphoenix)! - Move InteractiveCard styles from theme package to component

- [#371](https://github.com/utilitywarehouse/customer-ui/pull/371) [`7b75136`](https://github.com/utilitywarehouse/customer-ui/commit/7b751364dcd929e5a64ecf6f81b41a0f3a28aa3c) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Grid configuration from theme package to component

* [#373](https://github.com/utilitywarehouse/customer-ui/pull/373) [`f75d0f1`](https://github.com/utilitywarehouse/customer-ui/commit/f75d0f11870de4491a1d105c301cf192701ff19b) Thanks [@robphoenix](https://github.com/robphoenix)! - Move Menu styling from theme package to components

- [#367](https://github.com/utilitywarehouse/customer-ui/pull/367) [`c97aa51`](https://github.com/utilitywarehouse/customer-ui/commit/c97aa519052816d6818b1f055a2669c1d5814436) Thanks [@robphoenix](https://github.com/robphoenix)! - Remove link styling

* [#378](https://github.com/utilitywarehouse/customer-ui/pull/378) [`78c417e`](https://github.com/utilitywarehouse/customer-ui/commit/78c417e35fc0e6727217389354c8351f4b307648) Thanks [@robphoenix](https://github.com/robphoenix)! - Move `Textfield` styles from theme package to component

* Updated dependencies [[`ec8c4ae`](https://github.com/utilitywarehouse/customer-ui/commit/ec8c4ae8447adc127f4eb3a643c936f2f937f7ff)]:
  - @utilitywarehouse/customer-ui-design-tokens@1.0.3

## 1.1.1

### Patch Changes

- Updated dependencies [[`268e60b`](https://github.com/utilitywarehouse/customer-ui/commit/268e60b09d85c1d08d64bf85d538c8119bdda812)]:
  - @utilitywarehouse/customer-ui-design-tokens@1.0.2

## 1.1.0

### Minor Changes

- [#350](https://github.com/utilitywarehouse/customer-ui/pull/350) [`102db82`](https://github.com/utilitywarehouse/customer-ui/commit/102db82f38482e8389c82518d534aa9e68be0b42) Thanks [@robphoenix](https://github.com/robphoenix)! - Move `Card` styles from the `theme` package to the component. Part of the deprecation of the `theme` package #254

## 1.0.1

### Patch Changes

- [#335](https://github.com/utilitywarehouse/customer-ui/pull/335) [`27250d6`](https://github.com/utilitywarehouse/customer-ui/commit/27250d6c0ec74aaf4f10bd53498d028b5e31b666) Thanks [@robphoenix](https://github.com/robphoenix)! - This change reverts the `level1` backgroundColor for the backdrop theme back to `purple`, from `darkTint`.

  This was originally changed in #197 because of [the DSM](https://utilitywarehouse.invisionapp.com/dsm/utilitywarehouse/web-beta/nav/5fa7cb708c012000183622c4/folder/6086ce784353602d543228dc?mode=preview) at the time.
  This change was then available in the `customer-ui-theme` package from version
  `v1.0.0-alpha.20`, and subsequently in the `customer-ui-material` package from
  version `v1.0.0-alpha.72`

  The [current Design System](https://www.figma.com/file/R3NKpDsHVjcFt9vXqReoKZ/UW-Foundation?node-id=649%3A2),
  does not include `darkTint` but does have `purple`.

## 1.0.0

### Major Changes

- [#327](https://github.com/utilitywarehouse/customer-ui/pull/327) [`2b87356`](https://github.com/utilitywarehouse/customer-ui/commit/2b87356a83940c372e528f590b61fc800bc47a3c) Thanks [@robphoenix](https://github.com/robphoenix)! - This major bump is documented in the `packages/material` changelog.
