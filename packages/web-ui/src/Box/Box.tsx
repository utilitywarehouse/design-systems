import MuiBox from '@mui/material/Box';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import { BoxTypeMap } from './Box.types';

const Box = forwardRef(function Box({ background, sx, ...props }, ref) {
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = {
    [`data-${dataAttributes.inverse}`]: inverse,
  };
  const backgroundColor = background ? colors[background] : 'transparent';

  return (
    <MuiBox
      ref={ref}
      {...props}
      {...dataAttributeProps}
      sx={{
        backgroundColor,
        ...sx,
      }}
    />
  );
}) as OverridableComponent<BoxTypeMap>;

export default Box;
