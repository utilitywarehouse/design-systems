import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { dataAttributes } from '../utils';
import { BoxProps } from '../Box';

export const variantMapping: { [key: string]: string } = {
  subtitle: 'p', // span?
  body: 'p', // span?
  legalNote: 'p', // span?
  caption: 'span',
};

export interface TextProps
  extends Pick<
    MuiTypographyProps,
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
  bold?: boolean;
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
}

function Text({ color = 'primary', bold = false, ...props }: TextProps) {
  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
    [`data-${dataAttributes.bold}`]: bold,
  };

  return <MuiTypography {...props} variantMapping={variantMapping} {...dataAttributeProps} />;
}

export default Text;
