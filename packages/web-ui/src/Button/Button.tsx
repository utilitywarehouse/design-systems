import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import { dataAttributes } from '../utils';
import { ButtonTypeMap } from './Button.types';

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
