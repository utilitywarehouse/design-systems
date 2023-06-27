---
'@utilitywarehouse/web-ui': patch
---

Remove default Button capitalization.

This was implemented based on an incorrect assumption that screen readers would read out capital letters differently, and it actually breaks the visual layout of the button when an href is added.
