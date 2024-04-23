# Codemod

Codemods, primarily for migrating between major versions.

## Available codemods

### Web UI

#### v0

##### migration

This is the main codemod, and contains all the transforms that will do most of
the heavy lifting for migrating from `customer-ui-material` to `web-ui` of. This
codemod should only be run **once** per folder.

```console
npx @utilitywarehouse/web-ui-codemod cwui-migration <path>
```

Please be aware that there are limitations to these codemods as they cannot
predict every edge case. While they can update prop values, they
cannot deal with prop values derived from some sort of logic. For instance,
updating the prop `variant="contained"` is fine, however the following may not
be updated as expected; `variant={true ? 'contained' : 'outlined'}`. In this
circumstance the resulting build will probably break and will require some
manual updating.

##### import-paths

This codemod transforms imports from the `customer-ui-material` library.

```diff
- import {
-   Box,
-   Button,
-   Stack,
- } from '@utilitywarehouse/customer-ui-material';
+ import { Box, Button, Stack } from 'cwui-v2';
```

### background-color-level-name

This codemod transforms the color level names for the `Background` component,
from the numbered `level` names to the literal colour names.

```diff
- <Background backgroundColor="level0"></Background>
+ <Background backgroundColor="midnight"></Background>
- <Background backgroundColor="level1"></Background>
+ <Background backgroundColor="purple"></Background>
- <Background backgroundColor="level3"></Background>
+ <Background backgroundColor="lightTint"></Background>
- <Background backgroundColor="level4"></Background>
+ <Background backgroundColor="whiteOwl"></Background>
- <Background backgroundColor="level5"></Background>
+ <Background backgroundColor="white"></Background>
```

### button-variant-prop

This codemod transforms the variant prop on the `Button` component.

```diff
- <Button variant="contained"></Button>
+ <Button variant="primary"></Button>
- <Button variant="outlined"></Button>
+ <Button variant="secondary"></Button>
- <Button variant="tertiary"></Button>
+ <Button variant="tertiary"></Button>
```

### button-size-prop

This codemod transforms the size prop on the `Button` component, adding it in if
not used as the default value has changed.

```diff
- <Button></Button>
+ <Button size="small"></Button>
- <Button size="regular"></Button>
+ <Button size="small"></Button>
- <Button size="large"></Button>
+ <Button size="large"></Button>
```



