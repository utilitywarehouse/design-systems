import type { BoxProps } from '../Box';
import type { Colors } from '@utilitywarehouse/customer-ui-design-tokens';
import type { OverrideProps } from '@mui/material/OverridableComponent';

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

export type { DefaultIconComponent, CustomIconProps, IconTypeMap, IconProps };
