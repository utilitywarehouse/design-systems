import { Box } from '../Box';
import { forwardRef } from 'react';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { BoxProps } from '../Box';
import { legacyColors } from './legacy-colors';

export type DefaultIconComponent = 'span';

export interface CustomIconProps {
  color?: keyof typeof legacyColors;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

export interface IconTypeMap<D extends React.ElementType = DefaultIconComponent, P = {}> {
  props: Pick<BoxProps<D, P>, 'sx' | 'component' | 'classes'> & CustomIconProps;
  defaultComponent: D;
}

export type IconProps<D extends React.ElementType = DefaultIconComponent, P = {}> = OverrideProps<
  IconTypeMap<D, P>,
  D
>;

// We currently aren't able to pass the ref down to the SVG element, due to the
// implementation in the react-icons package so we pass it to a wrapper instead
export const Icon = forwardRef(function Icon(
  { color, icon, iconProps = {}, component = 'span', ...props },
  ref
) {
  const IconComponent = icon;
  return (
    <Box ref={ref} component={component} {...props}>
      <IconComponent
        style={{ verticalAlign: 'top' }}
        fill={!!color ? legacyColors[color] : 'inherit'}
        {...iconProps}
      />
    </Box>
  );
}) as OverridableComponent<IconTypeMap>;
