---
'@utilitywarehouse/web-ui': patch
---

This change replaces the CSS implementation of the background colour context with React context. This is because the CSS was not working for nested contexts, and unfortunately I don't have the time, or depth of CSS knowledge, to get it working. While I'm reluctant to add in a context provider in every box where the `background` prop is used, for now it's the best way.
