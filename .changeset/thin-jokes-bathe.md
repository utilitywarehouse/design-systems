---
"@utilitywarehouse/customer-ui-theme": patch
---

This change reverts the `level1` backgroundColor for the backdrop theme back to `purple`, from `darkTint`.

This was originally changed in #197 because of [the DSM](https://utilitywarehouse.invisionapp.com/dsm/utilitywarehouse/web-beta/nav/5fa7cb708c012000183622c4/folder/6086ce784353602d543228dc?mode=preview) at the time.
This change was then available in the `customer-ui-theme` package from version
`v1.0.0-alpha.20`, and subsequently in the `customer-ui-material` package from
version `v1.0.0-alpha.72`

The [current Design System](https://www.figma.com/file/R3NKpDsHVjcFt9vXqReoKZ/UW-Foundation?node-id=649%3A2),
does not include `darkTint` but does have `purple`.


