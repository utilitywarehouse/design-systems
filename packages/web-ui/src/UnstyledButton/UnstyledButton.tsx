import * as React from 'react';
import { PropsWithSx } from '../types';
import { withGlobalPrefix } from '../utils';
import { UnstyledButtonProps } from './UnstyledButton.props';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { styled } from '../theme';

const componentName = 'UnstyledButton';
const componentClassName = withGlobalPrefix(componentName);

const StyledButton = styled('button')<UnstyledButtonProps>(() => {
  return {
    all: 'unset',
    outline: 'transparent',
    appearance: 'none',
    boxSizing: 'border-box',
    cursor: 'default',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    userSelect: 'none',
    verticalAlign: 'top',
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
    // make clicks not need to wait and observe a potential double click, making the buttons feel faster
    touchAction: 'manipulation',
    backgroundColor: 'transparent',
    border: 'none',
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * `UnstyledButton` resets default button styles, and includes the `asChild`
 * prop for changing the rendered element. It can be used as a base for custom
 * button components.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const UnstyledButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<UnstyledButtonProps>>
>(function UnstyledButton({ className, asChild, disabled, onClick, ...props }, forwardedRef) {
  return (
    <StyledButton
      as={asChild ? Slot : 'button'}
      ref={forwardedRef}
      aria-disabled={disabled || undefined}
      className={clsx(componentClassName, className)}
      // as we're using aria-disabled instead of disabled then we need to
      // disable the onClick event
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
});

UnstyledButton.displayName = componentName;
