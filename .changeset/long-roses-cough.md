---
"@utilitywarehouse/customer-ui-material": patch
---

This changeset adds the Stack component.

In the process of adding this layout component, the Spacer layout component was
updated. The `space` prop has been removed, as it is not reflected in the other
layout components and spacing is under review in UX. Spacer has also been
updated to accept responsive size values, again to better reflect what is
possible with the other layout components. It is now possible to pass an array
or object of responsive values to the size prop, ie. `size={{ mobile: 2, tablet: 4, desktop: 8 }}`.
