import * as React from 'react';

import { createBox } from '../Box';
import { FlexOwnProps } from './Flex.props';

import { type Theme } from '../theme';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';

const componentName = 'Flex';
const BaseBox = createBox({ componentName });

/**
 * The `Flex` is a low-level primitive, based on the `div` element with display
 * set to `flex`. This component should be used for flexbox based layouts, and
 * to create vertical and horizontal stacked layouts.
 */
export const Flex = React.forwardRef(function Flex(
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
