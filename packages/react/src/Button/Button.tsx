import * as React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { globalClassPrefix, isInverseBackgroundColor } from '../utils';
import { clsx } from 'clsx';
import { OverrideProps } from '@mui/material/OverridableComponent';
import { useBackground } from '../Background';

const PREFIX = `${globalClassPrefix}-Button`;
export const buttonClasses = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  tertiary: `${PREFIX}-tertiary`,
  inverse: `${PREFIX}-inverse`,
  small: `${PREFIX}-small`,
  medium: `${PREFIX}-medium`,
  large: `${PREFIX}-large`,
};

type DefaultComponent = 'button';

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

type TypeMap<P = {}, D extends React.ElementType = DefaultComponent> = {
  props: CustomProps<D, P>;
  defaultComponent: D;
};

export type ButtonProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<P, D>,
  D
>;

const Button = React.forwardRef(function Button(
  { size = 'medium', variant = 'primary', className, ...props },
  ref
) {
  const { backgroundColor } = useBackground();

  const classNames = clsx(buttonClasses[variant], buttonClasses[size], {
    [buttonClasses.inverse]: isInverseBackgroundColor(backgroundColor),
    className: !!className,
  });

  return <MuiButton {...(props as Partial<MuiButtonProps>)} className={classNames} ref={ref} />;
}) as ExtendButton<TypeMap>;

export default Button;
