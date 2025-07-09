import * as React from 'react';

import clsx from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import { UnstyledButtonProps } from './UnstyledButton.props';

import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'UnstyledButton';
const componentClassName = withGlobalPrefix(componentName);

const StyledButton = styled('button')<UnstyledButtonProps>(() => {
  return {
    all: 'unset',
    outline: 'transparent',
    appearance: 'none',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexShrink: 0,
    userSelect: 'none', // make inner text unselectable
    verticalAlign: 'top',
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
    touchAction: 'manipulation', // make clicks not need to wait and observe a potential double click, making the buttons feel faster
    backgroundColor: 'transparent',
    border: 'none',
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a
 * dialog. `UnstyledButton` resets default button styles, and includes the
 * `asChild` prop for changing the rendered element. It can be used as a base
 * for custom button components.
 */
export const UnstyledButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<UnstyledButtonProps>>
>(function UnstyledButton({ className, asChild, disabled, onClick, ...props }, forwardedRef) {
  return (
    /* @ts-expect-error - upgrade issue. TODO: Fix this */
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
