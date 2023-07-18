---
'@utilitywarehouse/web-ui': patch
---

Refactor `RadioGroup` to use Radix UI. This change is mainly due to the interoperability problems between Next 12 & react-aria. While this change is mostly invisible to consumers, there are some API differences to be aware of:

- Add `RadioGridGroup`
- Remove `columns` prop from `RadioGroup`
- Use `label` prop instead of children on `Radio` & `RadioTile`
