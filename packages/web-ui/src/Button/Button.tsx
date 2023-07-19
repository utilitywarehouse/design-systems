import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { useBackground } from '../Box';

export type DefaultButtonComponent = 'button';

export interface CustomButtonProps {
  /** Sets the button's visual variant */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Sets the button height. Does not apply to `tertiary` buttons. */
  size?: 'small' | 'medium' | 'large';
}

export type ButtonTypeMap<P = {}, D extends React.ElementType = DefaultButtonComponent> = {
  props: CustomButtonProps &
    Pick<
      MuiButtonProps<D, P>,
      'sx' | 'classes' | 'fullWidth' | 'children' | 'href' | 'startIcon' | 'endIcon'
    >;
  defaultComponent: D;
};

export type ButtonProps<
  D extends React.ElementType = DefaultButtonComponent,
  P = {}
> = OverrideProps<ButtonTypeMap<P, D>, D>;

/**
 * A Button should be used for actions.
 */
export const Button = forwardRef(function Button(
  { size = 'medium', variant = 'primary', ...props },
  ref
) {
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [`data-${dataAttributes.variant}`]: variant,
    [`data-${dataAttributes.size}`]: size,
    [`data-${dataAttributes.bgcolorBrand}`]: isBrandBackground,
  };
  return <MuiButton {...(props as Partial<MuiButtonProps>)} ref={ref} {...dataAttributeProps} />;
}) as ExtendButton<ButtonTypeMap>;
