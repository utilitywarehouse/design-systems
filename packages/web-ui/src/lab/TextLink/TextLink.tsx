import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { PropsWithSx } from '../../types';
import { getPrefixedName } from '../../utils';
import clsx from 'clsx';
import { Typography } from '../../Typography';
import { TextLinkProps } from './TextLink.props';
import { styled } from '../../theme';
import { colors } from '@utilitywarehouse/colour-system';

const componentName = 'TextLink';
const componentClassName = getPrefixedName(componentName);

const StyledTypography = styled(Typography)({
  cursor: 'pointer',
  textDecoration: 'underline',
  '--text-link-color-default': colors.cyan600,
  '--text-link-color-hover': colors.cyan700,
  '--text-link-color-active': colors.cyan800,
  '--text-link-color': 'var(--text-link-color-default)',
  color: 'var(--text-link-color)',
  textDecorationColor: 'currentColor',
  '@media (hover: hover)': {
    '&:where(:hover)': {
      '--text-link-color': 'var(--text-link-color-hover)',
    },
  },
  '&:where(:active)': {
    '--text-link-color': 'var(--text-link-color-active)',
  },
});

/**
 * A semantic element for navigating between pages, the `TextLink` should be wrapped in a `Text` component.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const TextLink = forwardRef<ElementRef<'a'>, PropsWithChildren<PropsWithSx<TextLinkProps>>>(
  ({ className, ...props }, ref) => {
    return (
      <StyledTypography
        ref={ref}
        component="a"
        className={clsx(componentClassName, className)}
        fontFamily="inherit"
        fontSize="inherit"
        lineHeight="inherit"
        weight="inherit"
        color="inherit"
        {...props}
      />
    );
  }
);

TextLink.displayName = componentName;
