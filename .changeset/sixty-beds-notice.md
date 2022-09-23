---
"@utilitywarehouse/customer-ui-material": major
---

This change updates the Link component to be visually and behaviourally
different from the NavLink component. This is a breaking change and consumers
should ensure they are using the appropriate link for their UI.

The `active` & `secondary` variants have been removed from the `Link` component,
if you wish to use these you need to use the `NavLink` component instead. The
`variant` prop now mimics the variants of the `Typography` component, otherwise
the `Link` will inherit any wrapping `Typography` component styles.

```diff
- <Link variant={isCurrentPage ? 'active' : 'secondary'} href={'/services'}>Services</Link>
+ <NavLink active={!!isCurrentPage} href={'/services'}>Services</NavLink>
```
