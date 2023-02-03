import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps {}

const Typography = function Typography({
  fontFamily = 'fontFamily.secondary',
  color = 'text.body.primary',
  ...props
}: TypographyProps) {
  return <MuiTypography fontFamily={fontFamily} color={color} {...props} />;
};

export default Typography;
