import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultButtonComponent = 'button';

interface CustomButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disableCapitalizeFirstLetter?: boolean;
}

type ButtonTypeMap<P = {}, D extends React.ElementType = DefaultButtonComponent> = {
  props: Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'> &
    CustomButtonProps;
  defaultComponent: D;
};

type ButtonProps<D extends React.ElementType = DefaultButtonComponent, P = {}> = OverrideProps<
  ButtonTypeMap<P, D>,
  D
>;

const Button = forwardRef(function Button(
  { size = 'medium', variant = 'primary', disableCapitalizeFirstLetter, ...props },
  ref
) {
  const dataAttributeProps = {
    [`data-${dataAttributes.variant}`]: variant,
    [`data-${dataAttributes.size}`]: size,
    [`data-${dataAttributes.disableCapitalizeFirstLetter}`]: disableCapitalizeFirstLetter,
  };

  return <MuiButton {...(props as Partial<MuiButtonProps>)} ref={ref} {...dataAttributeProps} />;
}) as ExtendButton<ButtonTypeMap>;

export default Button;
export type { DefaultButtonComponent, CustomButtonProps, ButtonTypeMap, ButtonProps };
