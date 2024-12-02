import * as React from 'react';
import clsx from 'clsx';

import type { BoxProps } from './Box.props';

import type { ElementRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { withBreakpointStyles } from '../../helpers/with-breakpoint-styles';

const componentName = 'Box';
const componentClassName = 'uwp-' + componentName;

type BoxElement = ElementRef<'div'>;

export const Box = React.forwardRef<BoxElement, BoxProps>(
  (
    {
      className,
      asChild,
      as: Tag = 'div',
      color,
      backgroundColor,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      padding,
      paddingTop,
      paddingLeft,
      paddingBlock,
      paddingRight,
      paddingBottom,
      paddingInline,
      style = undefined,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : Tag;

    const widthProps = withBreakpointStyles(width, 'width');
    const maxWidthProps = withBreakpointStyles(maxWidth, 'max-width');
    const minWidthProps = withBreakpointStyles(minWidth, 'min-width');
    const heightProps = withBreakpointStyles(height, 'height');
    const maxHeightProps = withBreakpointStyles(maxHeight, 'max-height');
    const minHeightProps = withBreakpointStyles(minHeight, 'min-height');

    const paddingProps = withBreakpointStyles(padding, 'padding');
    const paddingTopProps = withBreakpointStyles(paddingTop, 'padding-top');
    const paddingRightProps = withBreakpointStyles(paddingRight, 'padding-right');
    const paddingBottomProps = withBreakpointStyles(paddingBottom, 'padding-bottom');
    const paddingLeftProps = withBreakpointStyles(paddingLeft, 'padding-left');
    const paddingInlineProps = withBreakpointStyles(paddingInline, 'padding-inline');
    const paddingBlockProps = withBreakpointStyles(paddingBlock, 'padding-block');

    const colorClassNames = {
      'uwp-color': !!color,
      'uwp-background-color': !!backgroundColor,
    };
    const colorStyleProps = {
      '--color': color,
      '--background-color': backgroundColor,
    };

    const styleProps = {
      ...colorStyleProps,
      ...widthProps?.style,
      ...maxWidthProps?.style,
      ...minWidthProps?.style,
      ...heightProps?.style,
      ...maxHeightProps?.style,
      ...minHeightProps?.style,
      ...paddingProps?.style,
      ...paddingTopProps?.style,
      ...paddingRightProps?.style,
      ...paddingBottomProps?.style,
      ...paddingLeftProps?.style,
      ...paddingInlineProps?.style,
      ...paddingBlockProps?.style,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          componentClassName,
          colorClassNames,
          widthProps?.className,
          maxWidthProps?.className,
          minWidthProps?.className,
          heightProps?.className,
          maxHeightProps?.className,
          minHeightProps?.className,
          paddingProps?.className,
          paddingInlineProps?.className,
          paddingBlockProps?.className,
          paddingTopProps?.className,
          paddingRightProps?.className,
          paddingBottomProps?.className,
          paddingLeftProps?.className,
          className
        )}
        {...props}
        style={styleProps}
      />
    );
  }
);

Box.displayName = componentName;
