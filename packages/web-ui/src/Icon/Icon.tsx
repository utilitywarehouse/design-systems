import Box from '../Box';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import { IconTypeMap } from './Icon.types';

// We currently aren't able to pass the ref down to the SVG element, due to the
// implementation in the react-icons package so we pass it to a wrapper instead
const Icon = forwardRef(function Icon(
  { color, icon, iconProps = {}, component = 'span', ...props },
  ref
) {
  const IconComponent = icon;
  return (
    <Box ref={ref} component={component} {...props}>
      <IconComponent {...iconProps} fill={!!color ? colors[color] : 'inherit'} />
    </Box>
  );
}) as OverridableComponent<IconTypeMap>;

export default Icon;
