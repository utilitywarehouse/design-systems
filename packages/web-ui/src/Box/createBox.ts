import { BoxTypeMap as MuiBoxTypeMap, createBox as createMuiBox } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { theme, type Theme } from '../theme';
import { globalPrefix } from '../utils';

export const createBox = (
  options: {
    componentClassName?: string;
    removePrefix?: boolean;
  } = {}
) => {
  const { componentClassName = 'Box', removePrefix } = options;
  const defaultClassName = removePrefix
    ? componentClassName
    : `${globalPrefix}-${componentClassName}`;
  const BaseBox = createMuiBox<Theme>({
    defaultTheme: theme,
    defaultClassName,
  });
  return BaseBox as OverridableComponent<
    MuiBoxTypeMap<{}, MuiBoxTypeMap['defaultComponent'], Theme>
  >;
};
