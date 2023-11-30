import * as React from 'react';
import { BoxTypeMap as MuiBoxTypeMap, createBox as createMuiBox } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { theme, type Theme } from '../theme';
import { withGlobalPrefix } from '../utils';

type Options = {
  componentName?: string;
};

export function createBox<
  RootComponent extends React.ElementType = MuiBoxTypeMap['defaultComponent']
>(options: Options = {}) {
  const { componentName = 'Box' } = options;
  const BaseBox = createMuiBox<Theme>({
    defaultTheme: theme,
    defaultClassName: withGlobalPrefix(componentName),
  });
  return BaseBox as OverridableComponent<MuiBoxTypeMap<{}, RootComponent, Theme>>;
}
