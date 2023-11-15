import * as React from 'react';
import { forwardRef } from 'react';
import { FlexOwnProps } from './Flex.props';
import { createBox } from '../Box';
import { OverridableComponent } from '@mui/types';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { type Theme } from '../theme';

const componentClassName = 'Flex';
const BaseBox = createBox({ componentClassName });

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
 * This component should be used for flexbox based layouts, and to create
 * vertical and horizontal stacked layouts.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
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
