import { BoxTypeMap as MuiBoxTypeMap, createBox as createMuiBox } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { ElementType } from 'react';
import { theme, type Theme } from '../theme';
import { globalPrefix } from '../utils';

export function createBox<RootComponent extends ElementType = MuiBoxTypeMap['defaultComponent']>(
  options: {
    componentClassName?: string;
    removeClassNamePrefix?: boolean;
  } = {}
) {
  const { componentClassName = 'Box', removeClassNamePrefix } = options;
  const defaultClassName = removeClassNamePrefix
    ? componentClassName
    : `${globalPrefix}-${componentClassName}`;
  const BaseBox = createMuiBox<Theme>({
    defaultTheme: theme,
    defaultClassName,
  });
  return BaseBox as OverridableComponent<MuiBoxTypeMap<{}, RootComponent, Theme>>;
}
