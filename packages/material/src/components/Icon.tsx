import * as React from 'react';
import Box, { BoxProps } from './Box';

export interface IconProps extends Pick<BoxProps, 'sx' | 'component' | 'classes'> {
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<unknown>;
}

// We currently aren't able to pass the ref down to the SVG element, due to the
// implementation in the react-icons package so we pass it to a wrapper instead
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  { color = 'inherit', icon, iconProps = {}, forwardedRef, ...props },
  ref
) {
  if (forwardedRef !== undefined) {
    console.warn(
      'forwardedRef on the Icon component is deprecated in v2 and will be removed in v3. Please use ref instead.'
    );
  }

  const IconComponent = icon;
  return (
    <Box ref={forwardedRef || ref} component="span" {...props}>
      <IconComponent {...iconProps} fill={color} />
    </Box>
  );
});

export default Icon;
