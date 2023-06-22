import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';
import { dataAttributes } from '../utils';
import { colorsCommon } from '@utilitywarehouse/colour-system';

export type DefaultBoxComponent = 'div';

export interface CustomBoxProps {
  /**
   * Sets the background colour.
   *
   * When 'purple' and 'midnight' brand colours are used, child `Text` &
   * `Heading` components have their foreground colour set to 'white'.
   */
  backgroundColor?: string; // we are not setting this as MuiBoxProps['backgroundColor'] as we don't believe there is any need for it to be responsive, yet.
}

export type BoxProps<
  D extends React.ElementType<any> = DefaultBoxComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBoxProps & P, D, Theme>, D>;

/**
 * Box is a low-level primitive, which supports theme-aware styling props, and can
 * be used for building any styled element.
 */
export const Box = forwardRef(function Box({ backgroundColor, bgcolor, ...props }, ref) {
  const dataAttributeProps =
    !!backgroundColor &&
    [colorsCommon.brandMidnight, colorsCommon.brandPrimaryPurple].includes(backgroundColor)
      ? { [`data-${dataAttributes.bgcolorBrand}`]: true }
      : {};

  const bg = bgcolor || backgroundColor;

  return <MuiBox ref={ref} {...dataAttributeProps} bgcolor={bg} {...props} />;
}) as OverridableComponent<MuiBoxTypeMap<CustomBoxProps, DefaultBoxComponent, Theme>>;
