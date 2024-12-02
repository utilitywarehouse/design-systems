import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { BodyTextProps } from './BodyText.props';
import { withBreakpoints } from '../../helpers/with-breakpoints';
import { Slot } from '@radix-ui/react-slot';

const componentName = 'BodyText';
const componentClassName = 'uwp-' + componentName;

const classNames = {
  variant: {
    subtitle: 'uwp-variant-subtitle',
    body: 'uwp-variant-body',
    legalNote: 'uwp-variant-legalNote',
    caption: 'uwp-variant-caption',
  },
  truncate: 'uwp-truncate',
};

type BodyTextElement = ElementRef<'p'>;

/**
 * BodyText renders the secondary UW font, Work Sans, to be used for body text.
 */
export const BodyText = React.forwardRef<BodyTextElement, BodyTextProps>(
  (
    {
      children,
      asChild,
      as: Tag = 'p',
      variant = 'body',
      weight = 'regular',
      align,
      truncate,
      color,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const fontWeightClassName = withBreakpoints(weight, 'weight');
    const textAlignClassName = withBreakpoints(align, 'text-align');
    const styleProps = { '--body-text-color': color, ...style };
    return (
      <Slot
        ref={ref}
        className={clsx(
          componentClassName,
          classNames.variant[variant],
          fontWeightClassName,
          textAlignClassName,
          { [classNames.truncate]: truncate },
          className
        )}
        style={styleProps}
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

BodyText.displayName = componentName;
