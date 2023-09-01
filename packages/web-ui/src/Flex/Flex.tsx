import { ElementRef, forwardRef } from 'react';
import { FlexProps } from './Flex.props';
import { createBox } from '../Box';

const componentClassName = 'Flex';
const BaseBox = createBox({ componentClassName });

/**
 * Flex is a low-level primitive, with display set to `flex`.
 *
 * As well as the same style props as the `Box` component, it supports a set of
 * shorthand, flexbox specific props.
 *
 * - `direction` is `flexDirection`
 * - `wrap` is `flexWrap`
 * - `basis` is `flexBasis`
 * - `grow` is `flexGrow`
 * - `shrink` is `flexShrink`
 * - `align` is `alignItems`
 * - `justify` is `justifyContent`
 *
 * This component should be used to create vertical and horizontal stacked layouts.
 */
export const Flex = forwardRef<ElementRef<'div'>, FlexProps>(function Flex(
  {
    display = 'flex',
    direction,
    flexDirection,
    align,
    alignItems,
    justify,
    justifyContent,
    wrap,
    flexWrap,
    basis,
    flexBasis,
    grow,
    flexGrow,
    shrink,
    flexShrink,
    ...props
  },
  ref
) {
  return (
    <BaseBox
      ref={ref}
      display={display}
      flexDirection={direction || flexDirection}
      alignItems={align || alignItems}
      justifyContent={justify || justifyContent}
      flexWrap={wrap || flexWrap}
      flexBasis={basis || flexBasis}
      flexGrow={grow || flexGrow}
      flexShrink={shrink || flexShrink}
      {...props}
    />
  );
});

Flex.displayName = componentClassName;
