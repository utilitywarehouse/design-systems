import * as React from 'react';

import clsx from 'clsx';
import { ButtonBaseProps } from './ButtonBase.props';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';
import type { ElementRef } from 'react';

const componentName = 'ButtonBase';
const componentClassName = 'uwp-' + componentName;

const classNames = {
  variant: {
    solid: 'uwp-variant-solid',
    outline: 'uwp-variant-outline',
    ghost: 'uwp-variant-ghost',
  },
};

export type ButtonBaseElement = ElementRef<'button'>;

export const ButtonBase = React.forwardRef<ButtonBaseElement, ButtonBaseProps>(
  (
    { variant = 'solid', colorScheme = 'cyan', className, disabled, onClick, ...props },
    forwardedRef
  ) => {
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
    };
    return (
      <button
        ref={forwardedRef}
        aria-disabled={disabled || undefined}
        className={clsx(componentClassName, classNames.variant[variant], className)}
        // as we're using aria-disabled instead of disabled then we need to
        // disable the onClick event
        onClick={disabled ? undefined : onClick}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

ButtonBase.displayName = componentName;
