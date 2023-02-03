import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { dataAttributes } from '../utils';
import { BoxProps } from '../Box';

export const variantMapping: { [key: string]: string } = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export interface HeadingProps
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
    | 'ref'
  > {
  color?: 'primary' | 'secondary';
  component: BoxProps['component'];
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
}

function Heading({ color = 'primary', ...props }: HeadingProps) {
  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
  };

  return <MuiTypography {...props} variantMapping={variantMapping} {...dataAttributeProps} />;
}

export default Heading;
