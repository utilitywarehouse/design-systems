import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps {
  /**
   * Specify the font fontFamily
   */
  fontFamily?: MuiTypographyProps['fontFamily'];
} //extends MuiTypographyProps {}

const Typography: React.FC<MuiTypographyProps> = ({
  fontFamily = 'fontFamily.secondary',
  color = 'text.body.primary',
  ...props
}) => {
  return <MuiTypography fontFamily={fontFamily} color={color} {...props} />;
};

export default Typography;
