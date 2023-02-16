import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultTypographyComponent = 'p';
type DefaultTextComponent = 'span';

interface CustomTypographyProps {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  bold?: boolean;
  variant: MuiTypographyProps['variant'];
}

interface TypographyTypeMap<D extends React.ElementType = DefaultTypographyComponent, P = {}> {
  props: MuiTypographyProps<D, P> & CustomTypographyProps;
  defaultComponent: D;
}

type TypographyProps<
  D extends React.ElementType = DefaultTypographyComponent,
  P = {}
> = OverrideProps<TypographyTypeMap<D, P>, D>;

/**
 * Text component types
 */

interface CustomTextProps {
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  color?: 'primary' | 'success' | 'error';
}

interface TextTypeMap<D extends React.ElementType = DefaultTextComponent, P = {}> {
  props: Omit<TypographyProps<D, P>, 'variant' | 'fontWeight' | 'color'> & CustomTextProps;
  defaultComponent: D;
}

type TextProps<D extends React.ElementType = DefaultTextComponent, P = {}> = OverrideProps<
  TextTypeMap<D, P>,
  D
>;

/**
 * Heading component types
 */

type DefaultHeadingComponent = 'h2';

interface CustomHeadingProps {
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'primary' | 'secondary';
}

interface HeadingTypeMap<D extends React.ElementType = DefaultHeadingComponent, P = {}> {
  props: Omit<TypographyProps<D, P>, 'variant' | 'fontWeight' | 'color' | 'bold'> &
    CustomHeadingProps;
  defaultComponent: D;
}

type HeadingProps<D extends React.ElementType = DefaultHeadingComponent, P = {}> = OverrideProps<
  HeadingTypeMap<D, P>,
  D
>;

export type {
  DefaultTypographyComponent,
  CustomTypographyProps,
  TypographyTypeMap,
  TypographyProps,
  DefaultTextComponent,
  CustomTextProps,
  TextTypeMap,
  TextProps,
  DefaultHeadingComponent,
  CustomHeadingProps,
  HeadingTypeMap,
  HeadingProps,
};
