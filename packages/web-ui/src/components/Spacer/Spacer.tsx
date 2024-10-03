import * as React from 'react';

import { SpacerProps } from './Spacer.props';

import { createBox } from '../Box';

import { breakpoints } from '../../tokens';
import { PropsWithSx } from '../../types';
import { px, spacing } from '../../utils';

export type DefaultSpacerComponent = 'div';

const componentName = 'Spacer';
const BaseBox = createBox({ componentName });

function getSize(size: SpacerProps['size']) {
  if (Array.isArray(size)) {
    return size.map(s => spacing(s as number));
  }
  if (typeof size === 'object') {
    return Object.keys(breakpoints).reduce((acc: { [key: string]: number }, breakpoint: string) => {
      if (size[breakpoint] !== null) {
        acc[breakpoint] = spacing(size[breakpoint] as number);
      }
      return acc;
    }, {});
  }
  return spacing(size);
}

/**
 * Spacer is a layout primitive, loosely based on [Let's Bring Spacer GIFs Back!](https://www.joshwcomeau.com/react/modern-spacer-gif/)
 * by Josh Comeau. This component, adds an extra node to the DOM, so should be used sparingly, for
 * more significant layout concerns please use Stack or Grid. The `size` prop is responsive, so you can set different values for different breakpoints.
 */
export const Spacer = React.forwardRef<React.ElementRef<'div'>, PropsWithSx<SpacerProps>>(
  function Spacer({ axis = 'vertical', size = 1, inline = false, ...props }, ref) {
    const width = axis === 'vertical' ? px(1) : getSize(size);
    const height = axis === 'horizontal' ? px(1) : getSize(size);

    return (
      <BaseBox
        ref={ref}
        component={inline ? 'span' : 'div'}
        display={inline ? 'inline-block' : 'block'}
        width={width}
        minWidth={width}
        height={height}
        minHeight={height}
        {...props}
      />
    );
  }
);

Spacer.displayName = componentName;
