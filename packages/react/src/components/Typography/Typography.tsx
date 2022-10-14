import React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { Theme } from '@mui/material/styles';
import { useBackground } from '../Background';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';
import { clsx } from 'clsx';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { globalClassPrefix, isBrandBackgroundColor } from '../../utils';
import { BoxProps } from '../Box';

const PREFIX = `${globalClassPrefix}-typography`;
export const typographyClasses = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  inverse: `${PREFIX}-inverse`,
  semibold: `${PREFIX}-semibold`,
};

type DefaultComponent = 'span';

const variantMapping = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<
    MuiTypographyProps<D, P>,
    | 'align'
    | 'children'
    | 'className'
    | 'classes'
    | 'gutterBottom'
    | 'letterSpacing'
    | 'noWrap'
    | 'paragraph'
    | 'sx'
    | 'textTransform'
  > {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  component: BoxProps['component'];
  fontWeight?: 'regular' | 'semibold';
  variant: MuiTypographyProps['variant'];
}

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type TypographyProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Typography = React.forwardRef(function Typography(
  { color = 'primary', fontWeight = 'regular', className, ...props },
  ref
) {
  const { backgroundColor } = useBackground();

  const classNames = clsx(typographyClasses[color], {
    [typographyClasses.inverse]: isBrandBackgroundColor(backgroundColor),
    [typographyClasses.semibold]: fontWeight === 'semibold',
    className: !!className,
  });

  return (
    <MuiTypography {...props} variantMapping={variantMapping} className={classNames} ref={ref} />
  );
}) as OverridableComponent<TypeMap>;

export default Typography;

export const getTypographyConfiguration = (
  theme: Theme
): {
  displayHeading: TypographyStyleOptions;
  h1: TypographyStyleOptions;
  h2: TypographyStyleOptions;
  h3: TypographyStyleOptions;
  h4: TypographyStyleOptions;
  subtitle: TypographyStyleOptions;
  body: TypographyStyleOptions;
  legalNote: TypographyStyleOptions;
  caption: TypographyStyleOptions;
} => {
  const headingStyles = {
    fontFamily: fonts.primary,
    color: colors.purple,
    [`&.${typographyClasses.secondary}`]: {
      color: colors.midnight,
    },
    [`&.${typographyClasses.inverse}`]: {
      color: colors.white,
    },
  };
  const bodyStyles = {
    fontFamily: fonts.secondary,
    color: colors.midnight,
    [`&.${typographyClasses.semibold}`]: {
      fontWeight: fontWeights.secondary.semibold,
    },
    [`&.${typographyClasses.inverse}`]: {
      color: colors.white,
    },
    [`&.${typographyClasses.success}`]: {
      color: colors.jewel,
    },
    [`&.${typographyClasses.success}.${typographyClasses.inverse}`]: {
      color: colors.apple,
    },
    [`&.${typographyClasses.error}`]: {
      color: colors.maroonFlush,
    },
    [`&.${typographyClasses.error}.${typographyClasses.inverse}`]: {
      color: colors.rose,
    },
  };

  return {
    displayHeading: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(42),
      lineHeight: 1,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(64),
      },
    },
    h1: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(32),
      lineHeight: 1.2,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(42),
      },
    },
    h2: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(28),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: 1.2,
      },
    },
    h3: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(22),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    h4: {
      ...headingStyles,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    body: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1.5,
    },
    subtitle: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: 1.5,
      [theme.breakpoints.up('desktop')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    legalNote: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.5,
    },
    caption: {
      ...bodyStyles,
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 2,
    },
  };
};
