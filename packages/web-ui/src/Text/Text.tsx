import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem } from '../utils';
import { PropsWithStyleOverrides } from '../types';
import { forwardRef, PropsWithChildren } from 'react';
import { BoxProps as MuiBoxProps, ResponsiveStyleValue } from '@mui/system';
import { Typography } from '../Typography';
import { OverridableComponent, OverrideProps } from '@mui/types';

export type DefaultTextComponent = 'p';

export interface CustomTextProps {
  /**
   * Applies the text font styles.
   * @default body
   */
  variant?: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * Sets the text color.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * The default color is `colorsCommon.brandMidnight` unless within a `Box`
   * component with the background prop set to a darker brand background, then
   * it will be `colorsCommon.brandWhite`.
   *
   * @default colorsCommon.brandMidnight
   */
  color?: string;
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  bold?: boolean;
  /**
   * Sets the HTML component that is rendered.
   * @default p
   */
  component?: MuiBoxProps['component'];
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   * Note that text overflow can only happen with block or inline-block level elements (the element needs to have a width in order to overflow).
   */
  noWrap?: boolean | undefined;
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: ResponsiveStyleValue<'right' | 'left' | 'inherit' | 'center' | 'justify' | undefined>;
  /**
   * Set the text-transform on the component.
   * @default 'none'
   */
  textTransform?: ResponsiveStyleValue<
    'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined
  >;
}

export interface TextTypeMap<D extends React.ElementType = DefaultTextComponent> {
  props: PropsWithChildren<PropsWithStyleOverrides<CustomTextProps>>;
  defaultComponent: D;
}

export type TextProps<D extends React.ElementType<any> = DefaultTextComponent> = OverrideProps<
  TextTypeMap,
  D
>;

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 */
export const Text = forwardRef(function Text(
  { component = 'p', variant = 'body', align, bold, color, ...props },
  ref
) {
  const fontSizes = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
  };
  const { isBrandBackground } = useBackground();
  const textColor = !!color
    ? color
    : isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandMidnight;
  return (
    <Typography
      ref={ref}
      component={component}
      fontFamily="secondary"
      fontSize={fontSizes[variant]}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      fontWeight={bold ? 'semibold' : 'regular'}
      textAlign={align}
      color={textColor}
      {...props}
    />
  );
}) as OverridableComponent<TextTypeMap>;
