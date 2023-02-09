import * as React from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { dataAttributes } from '../utils';
import { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'button';

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'> {
  /**
   * Specify the size of the Button
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Specify the variant of the Button
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * By default the button label will have only the first letter capitalized.
   * You can use this prop to override this behaviour.
   */
  disableCapitalizeFirstLetter?: boolean;
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
  {
    size = 'medium',
    variant = 'primary',
    disableCapitalizeFirstLetter,
    className,
    ...props
  }: ButtonProps,
  ref
) {
  const dataAttributeProps = {
    [`data-${dataAttributes.variant}`]: variant,
    [`data-${dataAttributes.size}`]: size,
    [`data-${dataAttributes.disableCapitalizeFirstLetter}`]: disableCapitalizeFirstLetter,
  };

  return (
    <MuiButton
      {...(props as Partial<MuiButtonProps>)}
      className={className}
      ref={ref}
      {...dataAttributeProps}
    />
  );
}) as ExtendButton<TypeMap>;

export default Button;
