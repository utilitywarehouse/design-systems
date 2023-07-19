import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { useBackground } from '../Box';

export type DefaultButtonComponent = 'button';

export interface CustomButtonProps {
  /**
   * Sets the button's visual variant
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Sets the button height. Does not apply to `tertiary` buttons.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /** An icon to include alongside the button label */
  icon?: MuiButtonProps['startIcon'];
  /**
   * The position of the icon, either to the left or right of the label
   * @default left
   */
  iconPosition?: 'left' | 'right';
}

export type ButtonTypeMap<P = {}, D extends React.ElementType = DefaultButtonComponent> = {
  props: CustomButtonProps &
    Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'>;
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
  { size = 'medium', variant = 'primary', icon, iconPosition = 'left', ...props },
  ref
) {
  const { isBrandBackground } = useBackground();
  const dataAttributeProps = {
    [`data-${dataAttributes.variant}`]: variant,
    [`data-${dataAttributes.size}`]: size,
    [`data-${dataAttributes.bgcolorBrand}`]: isBrandBackground,
  };
  return (
    <MuiButton
      {...(props as Partial<MuiButtonProps>)}
      ref={ref}
      startIcon={iconPosition === 'left' ? icon : undefined}
      endIcon={iconPosition === 'right' ? icon : undefined}
      {...dataAttributeProps}
    />
  );
}) as ExtendButton<ButtonTypeMap>;
