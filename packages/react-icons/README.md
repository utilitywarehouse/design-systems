# React icons

React components for the corresponding icons in [@utilitywarehouse/customer-ui-icons](../icons).

## Usage

```TypeScript
import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";

...

<Dropdown fill="#ff0000" />

```

## Adding new icons

When new icons are added to [@utilitywarehouse/customer-ui-icons](../icons) this package will need to be published. To do this bump the version on the `@utilitywarehouse/customer-ui-icons`. CI will then rebuild the package and deploy the changes based on the semantic commit.
