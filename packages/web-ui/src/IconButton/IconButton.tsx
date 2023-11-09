import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { classSelector, getPrefixedName, pxToRem } from '../utils';
import { styled } from '../theme';
import { BaseButton } from '../BaseButton';
import { IconButtonProps } from './IconButton.props';
import { PropsWithSx } from '../types';

const componentName = 'IconButton';
const label = getPrefixedName(componentName);

const classNames: { [key: string]: { [key: string]: string } } = {
  size: {
    large: getPrefixedName('size-large'),
    small: getPrefixedName('size-small'),
    xsmall: getPrefixedName('size-x-small'),
  },
};

const classSelectors = {
  size: {
    large: classSelector(classNames.size.large),
    small: classSelector(classNames.size.small),
    xsmall: classSelector(classNames.size.xsmall),
  },
};

const StyledButton = styled(BaseButton, { label })<IconButtonProps>(() => {
  return {
    height: 'var(--icon-button-height)',
    width: 'var(--icon-button-height)',
    [classSelectors.size.large]: {
      '--icon-button-height': pxToRem(48),
      '--focus-outline-width': '4px',
    },
    [classSelectors.size.small]: {
      '--icon-button-height': pxToRem(32),
      '--focus-outline-width': '2px',
    },
    [classSelectors.size.xsmall]: {
      '--icon-button-height': pxToRem(24),
      '--focus-outline-width': '2px',
    },
  };
});

/**
 * Trigger an action or event, such as submitting a form or displaying a dialog.
 *
 * This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const IconButton = forwardRef<
  ElementRef<'button'>,
  PropsWithChildren<PropsWithSx<IconButtonProps>>
>(function IconButton({ size = 'large', className, ...props }, forwardedRef) {
  return (
    <StyledButton
      ref={forwardedRef}
      className={clsx(label, className, classNames.size[size])}
      {...props}
    />
  );
});

IconButton.displayName = componentName;
