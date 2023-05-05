---
'@utilitywarehouse/web-ui': patch
---

This changes the way color is handled by the `Text` and `Heading` components. As a result of the newly introduced `colour-system` library, these components, and `Typography`, will accept a `string` value, ideally from the `colour-system` library. Until we get more solid semantic understanding of how colours are used, we will support this more open approach to typography colours.
This change also preempts the deprecation, and future removal, of the background colour context that enables typography components to change their colour based on the parent background colour. Because of this, the `Text` and `Heading` components will not support this functionality. If they need to be used on a darker brand background, the appropriate text color should be passed in to the `color` prop.
