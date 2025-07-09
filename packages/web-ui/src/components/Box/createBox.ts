import * as React from 'react';

import { BoxTypeMap as MuiBoxTypeMap, createBox as createMuiBox } from '@mui/system';
// eslint-disable-next-line  import/no-unresolved
import { OverridableComponent } from '@mui/types';

import { type Theme, theme } from '../../theme';
import { withGlobalPrefix } from '../../utils';

type Options = {
  componentName?: string;
};

/**
 * This is a wrapper around the MUI createBox function,
 * it adds our custom theme so that we can access theme values,
 * specifically the custom breakpoints in responsive values.
 *
 * It is intended to be used to create components that need to be polymorphic,
 * and have the full range of system props available on them.
 * It should not be used to create more custom components,
 * for that please use the styled utility.
 */
export function createBox<
  RootComponent extends React.ElementType = MuiBoxTypeMap['defaultComponent'],
>(options: Options = {}) {
  const { componentName = 'Box' } = options;
  const BaseBox = createMuiBox<Theme>({
    defaultTheme: theme,
    defaultClassName: withGlobalPrefix(componentName),
  });
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  return BaseBox as OverridableComponent<MuiBoxTypeMap<{}, RootComponent, Theme>>;
}
