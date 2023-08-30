import { PropsWithStyleOverrides, PropsWithSx } from '../types';
import { PropsWithChildren } from 'react';
import { BoxProps as MuiBoxProps, ResponsiveStyleValue } from '@mui/system';
import { OverrideProps } from '@mui/types';

export type DefaultTextComponent = 'span';

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
  props: PropsWithChildren<PropsWithSx<CustomTextProps>>;
  defaultComponent: D;
}

export type TextProps<D extends React.ElementType<any> = DefaultTextComponent> = OverrideProps<
  TextTypeMap,
  D
>;
