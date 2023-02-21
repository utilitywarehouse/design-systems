import Box from '../Box';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { forwardRef } from 'react';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { BoxProps } from '../Box';
import type { Colors } from '@utilitywarehouse/customer-ui-design-tokens';

type DefaultIconComponent = 'span';

interface CustomIconProps {
  color?: keyof Colors;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

interface IconTypeMap<D extends React.ElementType = DefaultIconComponent, P = {}> {
  props: Pick<BoxProps<D, P>, 'sx' | 'component' | 'classes'> & CustomIconProps;
  defaultComponent: D;
}

type IconProps<D extends React.ElementType = DefaultIconComponent, P = {}> = OverrideProps<
  IconTypeMap<D, P>,
  D
>;

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
export type { DefaultIconComponent, CustomIconProps, IconTypeMap, IconProps };
