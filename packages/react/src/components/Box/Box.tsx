import * as React from 'react';
import clsx from 'clsx';

import type { BoxProps } from './Box.props';

import type { ElementRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { extractProps } from '../../helpers/extract-props';
import { paddingPropDefs } from '../../props/padding.props';
import { colorPropDefs } from '../../props/color.props';
import { sizePropDefs } from '../../props/size.props';
import { backgroundColorPropDefs } from '../../props/background-color.props';

const componentName = 'Box';
const componentClassName = 'uwp-' + componentName;

type BoxElement = ElementRef<'div'>;

export const Box = React.forwardRef<BoxElement, BoxProps>((props, ref) => {
  const {
    className,
    asChild,
    as: Tag = 'div',
    ...boxProps
  } = extractProps(props, paddingPropDefs, colorPropDefs, backgroundColorPropDefs, sizePropDefs);

  const Component = asChild ? Slot : Tag;

  return <Component ref={ref} className={clsx(componentClassName, className)} {...boxProps} />;
});

Box.displayName = componentName;
