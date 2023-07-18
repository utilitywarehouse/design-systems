---
'@utilitywarehouse/web-ui': patch
---

Remove `Icon` component. This component only really works with the legacy Customer UI icons, and it will be possible to use the same component from Customer Web UI alonside Web UI, so there is really no reason at all to keep this implementation. We can look at reintroducing this component in the future if there is a reason to have it as well as the new icons packages.
