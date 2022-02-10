# React icons

React components for [@utilitywarehouse/customer-ui-icons](../icons).

## Usage

There are a couple of recommended ways of using these icon components.

```TypeScript
import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { Icon } from "@utilitywarehouse/customer-ui-material";

...

<Dropdown fill={colors.cyan} />
// or
<Icon icon={HomePhoneIcon} sx={{ fill: colors.cyan }} />
```

Please DO NOT use the color prop on the icon component.
See [issue #358](https://github.com/utilitywarehouse/customer-ui/issues/358)

```
<Icon icon={HomePhoneIcon} color={colors.cyan} />
```

## Adding new icons

When new icons are added to [@utilitywarehouse/customer-ui-icons](../icons) this
package will need to be published. To do this you need to bump both the `icons`
and `react-icons` packages in your changeset.

```yaml
---
"@utilitywarehouse/customer-ui-icons": patch
"@utilitywarehouse/customer-ui-react-icons": patch
---

add service-landline icons (24x24 & 48x48) for Home Phone services
```

When your PR is merged, Changesets will create a Versioning PR, which, when
merged, will version, build and publish both packages, with your new icon, to
the NPM registry.

