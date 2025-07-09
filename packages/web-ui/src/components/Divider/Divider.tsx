import * as React from 'react';

import clsx from 'clsx';

import { colors } from '@utilitywarehouse/colour-system';

import { DividerProps, ORIENTATIONS, Orientation } from './Divider.props';

import { styled } from '../../theme';
import { px, withGlobalPrefix } from '../../utils';

const componentName = 'Divider';
const componentClassName = withGlobalPrefix(componentName);
const defaultOrientation = 'horizontal';

function isValidOrientation(orientation: Orientation) {
  return ORIENTATIONS.includes(orientation);
}

const StyledElement = styled('hr', {
  shouldForwardProp: prop => prop !== 'color',
})<{ color: string }>(({ color }) => {
  return {
    all: 'unset',
    display: 'block', // explicitly set this so horizontal dividers show inside block elements
    alignSelf: 'stretch',
    flexShrink: 0,
    backgroundColor: color,
    ':where([data-orientation="horizontal"])': {
      height: px(1),
      width: 'auto',
    },
    ':where([data-orientation="vertical"])': {
      height: 'auto',
      width: px(1),
    },
  };
});

/**
 * Used to provide a visual break and semantically divide content. Supports
 * vertical and horizontal orientations. Vertical dividers will only be visible
 * when contained inside an element with display set to `flexbox` or `grid`.
 */
export const Divider = React.forwardRef<React.ElementRef<'hr'>, DividerProps>(
  (
    {
      decorative,
      orientation: orientationProp = defaultOrientation,
      color = colors.grey175,
      className,
      ...props
    },
    ref
  ) => {
    const orientation = isValidOrientation(orientationProp) ? orientationProp : defaultOrientation;

    // `aria-orientation` defaults to `horizontal` so we only need it if `orientation` is vertical
    const ariaOrientation = orientation === 'vertical' ? orientation : undefined;
    const semanticProps = decorative
      ? { 'aria-hidden': true }
      : { 'aria-orientation': ariaOrientation };

    return (
      /* @ts-expect-error - upgrade issue. TODO: Fix this */
      <StyledElement
        color={color}
        className={clsx(componentClassName, className)}
        data-orientation={orientation}
        {...semanticProps}
        {...props}
        ref={ref}
      />
    );
  }
);

Divider.displayName = componentName;
