import * as React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { colors, Colors } from '@utilitywarehouse/customer-ui-design-tokens';

export interface IconProps extends Pick<MuiBoxProps, 'sx' | 'component' | 'classes'> {
  color?: keyof Colors;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

// We currently aren't able to pass the ref down to the SVG element, due to the
// implementation in the react-icons package so we pass it to a wrapper instead
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { color, icon, iconProps = {}, component = 'span', ...props },
  ref
) {
  const IconComponent = icon;
  return (
    <MuiBox ref={ref} component={component} {...props}>
      <IconComponent {...iconProps} fill={!!color ? colors[color] : 'inherit'} />
    </MuiBox>
  );
});

export default Icon;
