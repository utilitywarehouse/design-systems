import * as React from 'react';
import clsx from 'clsx';

import type { FlexProps } from './Flex.props';

import type { ElementRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { withBreakpointStyles } from '../../helpers/with-breakpoint-styles';
import { withBreakpoints } from '../../helpers/with-breakpoints';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'Flex';
const componentClassName = withGlobalPrefix(componentName);

type FlexElement = ElementRef<'div'>;

export const Flex = React.forwardRef<FlexElement, FlexProps>(
  (
    {
      className,
      asChild,
      as: Tag = 'div',
      display,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      color,
      backgroundColor,
      padding,
      paddingTop,
      paddingLeft,
      paddingBlock,
      paddingRight,
      paddingBottom,
      paddingInline,
      gap,
      direction,
      align,
      justify,
      style = undefined,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : Tag;

    const displayClassName = withBreakpoints(display, 'display');
    const directionClassName = withBreakpoints(direction, 'flex-direction');
    const alignClassName = withBreakpoints(align, 'align-items');
    const justifyClassName = withBreakpoints(justify, 'justify-content');

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

    const gapProps = withBreakpointStyles(gap, 'gap');

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
      ...gapProps?.style,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          componentClassName,
          colorClassNames,
          displayClassName,
          directionClassName,
          alignClassName,
          justifyClassName,
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
          gapProps?.className,
          className
        )}
        {...props}
        style={styleProps}
      />
    );
  }
);

Flex.displayName = componentName;
