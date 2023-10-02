import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import { getClassName, px, pxToRem, spacing } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';

const componentName = 'Button';
const componentClassName = getClassName(componentName);

const StyledButton = styled('button', { label: componentClassName })<ButtonProps>(
  ({ potentialStates = 'activeFocus' }) => {
    const potentialStatesStyles = {
      activeFocus: {
        // all button variants focus colours
        '&:where(:focus),:active': {
          outline: '4px solid',
          [`&[data-colorscheme=cyan]`]: {
            outlineColor: colors.cyan700,
          },
          [`&[data-colorscheme=red]`]: {
            outlineColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            outlineColor: colors.green700,
          },
        },
      },
      separateActiveFocus: {
        // all button variants focus colours
        '&:active': {
          [`&[data-colorscheme=cyan]`]: {
            backgroundColor: colors.cyan300,
          },
          [`&[data-colorscheme=red]`]: {
            backgroundColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            backgroundColor: colors.green700,
          },
        },
        '&:focus': {
          outline: '4px solid',
          [`&[data-colorscheme=cyan]`]: {
            outlineColor: colors.cyan700,
          },
          [`&[data-colorscheme=grey]`]: {
            outlineColor: colors.grey700,
          },
          [`&[data-colorscheme=red]`]: {
            outlineColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            outlineColor: colors.green700,
          },
          [`&[data-colorscheme=gold]`]: {
            outlineColor: colors.gold700,
          },
        },
      },
      focusVisible: {
        // all button variants focus colours
        '&:active': {
          [`&[data-colorscheme=cyan]`]: {
            backgroundColor: colors.cyan300,
          },
          [`&[data-colorscheme=red]`]: {
            backgroundColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            backgroundColor: colors.green700,
          },
        },
        '&:focus-visible': {
          outline: '4px solid',
          [`&[data-colorscheme=cyan]`]: {
            outlineColor: colors.cyan700,
          },
          [`&[data-colorscheme=grey]`]: {
            outlineColor: colors.grey700,
          },
          [`&[data-colorscheme=red]`]: {
            outlineColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            outlineColor: colors.green700,
          },
          [`&[data-colorscheme=gold]`]: {
            outlineColor: colors.gold700,
          },
        },
      },
      outlineOffset: {
        // all button variants focus colours
        '&:active': {
          [`&[data-colorscheme=cyan]`]: {
            backgroundColor: colors.cyan300,
          },
          [`&[data-colorscheme=red]`]: {
            backgroundColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            backgroundColor: colors.green700,
          },
        },
        '&:focus-visible': {
          outline: '4px solid',
          outlineOffset: '2px',
          [`&[data-colorscheme=cyan]`]: {
            outlineColor: colors.cyan700,
          },
          [`&[data-colorscheme=grey]`]: {
            outlineColor: colors.grey700,
          },
          [`&[data-colorscheme=red]`]: {
            outlineColor: colors.red700,
          },
          [`&[data-colorscheme=green]`]: {
            outlineColor: colors.green700,
          },
          [`&[data-colorscheme=gold]`]: {
            outlineColor: colors.gold700,
          },
        },
      },
    };
    return {
      all: 'unset',
      appearance: 'none',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flexShrink: 0,
      userSelect: 'none',
      verticalAlign: 'top',
      '-webkit-tap-highlight-color': 'transparent',
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary.semibold,
      borderRadius: px(32),
      [`&.${getClassName('variant-solid')}`]: {
        border: 'none',
        // solid variant color schemes default colours
        [`&[data-colorscheme=cyan]`]: {
          color: colors.cyan1000,
          backgroundColor: colors.cyan400,
        },
        [`&[data-colorscheme=red]`]: {
          color: colorsCommon.brandWhite,
          backgroundColor: colors.red500,
        },
        [`&[data-colorscheme=green]`]: {
          color: colorsCommon.brandWhite,
          backgroundColor: colors.green500,
        },
        // solid variant color schemes hover colours
        '@media (hover: hover)': {
          '&:where(:hover)': {
            [`&[data-colorscheme=cyan]`]: {
              backgroundColor: colors.cyan500,
            },
            [`&[data-colorscheme=red]`]: {
              backgroundColor: colors.red600,
            },
            [`&[data-colorscheme=green]`]: {
              backgroundColor: colors.green600,
            },
          },
        },
      },
      [`&.${getClassName('variant-outline')}`]: {
        backgroundColor: 'transparent',
        border: '2px solid',
        // outline variant color schemes default colours
        [`&[data-colorscheme=cyan]`]: {
          color: colors.cyan1000,
          borderColor: colors.cyan400,
        },
        [`&[data-colorscheme=grey]`]: {
          color: colors.grey1000,
          borderColor: colors.grey500,
        },
        [`&[data-colorscheme=red]`]: {
          color: colors.red900,
          borderColor: colors.red500,
        },
        [`&[data-colorscheme=green]`]: {
          color: colors.green900,
          borderColor: colors.green600,
        },
        [`&[data-colorscheme=gold]`]: {
          color: colors.gold900,
          borderColor: colors.gold500,
        },
        // outline variant color schemes hover colours
        '@media (hover: hover)': {
          '&:where(:hover)': {
            [`&[data-colorscheme=cyan]`]: {
              backgroundColor: colors.cyan75,
            },
            [`&[data-colorscheme=grey]`]: {
              backgroundColor: colors.grey100,
            },
            [`&[data-colorscheme=red]`]: {
              backgroundColor: colors.red100,
            },
            [`&[data-colorscheme=green]`]: {
              backgroundColor: colors.green100,
            },
            [`&[data-colorscheme=gold]`]: {
              backgroundColor: colors.gold100,
            },
          },
        },
      },
      [`&.${getClassName('size-large')}`]: {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(24),
        minWidth: 160,
        height: 48,
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        paddingTop: spacing(1.5),
        paddingBottom: spacing(1.5),
      },
      [`&.${getClassName('size-small')}`]: {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(16),
        minWidth: 56,
        height: 32,
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
      },
      ...potentialStatesStyles[potentialStates],
    };
  }
);

export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button(
    { variant = 'solid', colorScheme = 'cyan', size = 'large', className, ...props },
    forwardedRef
  ) {
    return (
      <StyledButton
        ref={forwardedRef}
        data-colorscheme={colorScheme}
        className={clsx(
          componentClassName,
          className,
          getClassName(`size-${size}`),
          getClassName(`variant-${variant}`)
        )}
        {...props}
      />
    );
  }
);

Button.displayName = componentName;
