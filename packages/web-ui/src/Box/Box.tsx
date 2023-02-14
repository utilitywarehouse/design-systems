import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

export type BoxProps<C extends React.ElementType = 'div'> = MuiBoxProps<
  C,
  { component?: C; background?: NeutralBackgroundColor | InverseBackgroundColor }
>;

function Box<C extends React.ElementType>(props: BoxProps<C>) {
  const { background, sx, ...rest } = props;
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = {
    [`data-${dataAttributes.inverse}`]: inverse,
  };
  const backgroundColor = background ? colors[background] : 'transparent';

  return (
    <MuiBox
      {...rest}
      {...dataAttributeProps}
      sx={{
        backgroundColor,
        ...sx,
      }}
    />
  );
}

export default Box;
