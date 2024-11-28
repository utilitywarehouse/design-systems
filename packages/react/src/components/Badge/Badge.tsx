import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { BadgeProps } from './Badge.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';
import { withBreakpoints } from '../../helpers/with-breakpoints';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  variant: {
    soft: withGlobalPrefix('variant-soft'),
    strong: withGlobalPrefix('variant-strong'),
    outline: withGlobalPrefix('variant-outline'),
  },
  bottomRadiusZero: withGlobalPrefix('bottom-radius-zero'),
};

type BadgeElement = ElementRef<'span'>;

/**
 * Provide additional context (such as status), or to draw attention to another
 * interface element.
 */
export const Badge = React.forwardRef<BadgeElement, BadgeProps>(
  (
    {
      className,
      colorScheme = 'cyan',
      variant = 'soft',
      size = 'medium',
      bottomRadiusZero,
      ...props
    },
    ref
  ) => {
    const sizeClassName = withBreakpoints(size, 'size');
    const dataAttributeProps = { [DATA_ATTRIBUTES.colorscheme]: colorScheme };
    return (
      <span
        ref={ref}
        className={clsx(
          componentClassName,
          classNames.variant[variant],
          sizeClassName,
          { [classNames.bottomRadiusZero]: bottomRadiusZero },
          className
        )}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Badge.displayName = componentName;
