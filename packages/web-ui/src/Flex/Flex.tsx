import { createBox, BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { forwardRef } from 'react';
import { theme, type Theme } from '../theme';
import { globalPrefix } from '../utils';
import { FlexOwnProps } from './Flex.props';

const BaseBox = createBox<Theme>({
  defaultTheme: theme,
  defaultClassName: `${globalPrefix}-Flex`,
});

/**
 * Flex is a low-level primitive, with display set to `flex`.
 *
 * As well as the same style props as the `Box` component, it supports a set of
 * shorthand, flexbox specific props.
 *
 * - `direction` is `flexDirection`
 * - `wrap` is `flexWrap`
 * - `basis` is `flexBasis`
 * - `grow` is `flexGrow`
 * - `shrink` is `flexShrink`
 * - `align` is `alignItems`
 * - `justify` is `justifyContent`
 *
 * This component should be used to create vertical and horizontal stacked layouts.
 */
export const Flex = forwardRef(function Flex(
  {
    display = 'flex',
    direction,
    flexDirection,
    align,
    alignItems,
    justify,
    justifyContent,
    wrap,
    flexWrap,
    basis,
    flexBasis,
    grow,
    flexGrow,
    shrink,
    flexShrink,
    ...props
  },
  ref
) {
  return (
    <BaseBox
      ref={ref}
      display={display}
      flexDirection={direction || flexDirection}
      alignItems={align || alignItems}
      justifyContent={justify || justifyContent}
      flexWrap={wrap || flexWrap}
      flexBasis={basis || flexBasis}
      flexGrow={grow || flexGrow}
      flexShrink={shrink || flexShrink}
      {...props}
    />
  );
}) as OverridableComponent<MuiBoxTypeMap<FlexOwnProps, MuiBoxTypeMap['defaultComponent'], Theme>>;
