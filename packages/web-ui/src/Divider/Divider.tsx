import * as React from 'react';
import { createBox } from '../Box';
import { DividerProps, ORIENTATIONS, Orientation } from './Divider.props';
import { styled } from '../theme';
import { dataAttributes, px } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';

const componentName = 'Divider';
const BaseBox = createBox({ componentClassName: componentName });

const StyledBox = styled(BaseBox)({
  alignSelf: 'stretch',
  flexShrink: 0,
  [dataAttributes.orientation.horizontal]: {
    height: px(1),
    width: 'auto',
  },
  [dataAttributes.orientation.vertical]: {
    height: 'auto',
    width: px(1),
  },
});

const DEFAULT_ORIENTATION = 'horizontal';

function isValidOrientation(orientation: any): orientation is Orientation {
  return ORIENTATIONS.includes(orientation);
}

/**
 * Create a visual or semantic separation or divide between content or sections
 * on a page.
 *
 * Supports vertical and horizontal orientations.
 */
export const Divider = React.forwardRef<React.ElementRef<'div'>, DividerProps>(
  (
    {
      decorative,
      orientation: orientationProp = DEFAULT_ORIENTATION,
      color = colors.grey175,
      ...props
    },
    ref
  ) => {
    const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;

    // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative
      ? { role: 'none' }
      : { 'aria-orientation': ariaOrientation, role: 'separator' };

    return (
      <StyledBox
        data-orientation={orientation}
        bgcolor={color}
        {...semanticProps}
        {...props}
        ref={ref}
      />
    );
  }
);

Divider.displayName = componentName;
