import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';

type DefaultBoxComponent = 'div';

interface CustomBoxProps extends MuiBoxProps {
  /**
   * Set the background colour according to predefined theme
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

interface BoxTypeMap<D extends React.ElementType = DefaultBoxComponent, P = {}> {
  props: MuiBoxProps<D, P> & CustomBoxProps;
  defaultComponent: D;
}

type BoxProps<D extends React.ElementType = DefaultBoxComponent, P = {}> = OverrideProps<
  BoxTypeMap<D, P>,
  D
>;

export const Box = forwardRef(function Box({ background, sx, ...props }, ref) {
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = inverse ? { [`data-${dataAttributes.inverse}`]: true } : {};
  const backgroundColor = background ? colors[background] : 'transparent';

  return (
    <MuiBox
      ref={ref}
      {...props}
      {...dataAttributeProps}
      sx={{
        backgroundColor,
        ...sx,
      }}
    />
  );
}) as OverridableComponent<BoxTypeMap>;

export type { CustomBoxProps, DefaultBoxComponent, BoxTypeMap, BoxProps };
