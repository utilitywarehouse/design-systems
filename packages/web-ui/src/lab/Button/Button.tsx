import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { PropsWithSx } from '../../types';
import { withBreakpoints } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { label, classNames, StyledButton, componentName } from './Button.styled';

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button(
    {
      variant = 'solid',
      colorScheme = 'cyan',
      size = 'large',
      className,
      asChild,
      children,
      ...props
    },
    forwardedRef
  ) {
    return (
      <StyledButton
        as={asChild ? Slot : 'button'}
        ref={forwardedRef}
        data-colorscheme={colorScheme}
        // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
        data-disabled={props.disabled || undefined}
        className={clsx(
          label,
          className,
          withBreakpoints(size, 'size'),
          classNames.variant[variant]
        )}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = componentName;
