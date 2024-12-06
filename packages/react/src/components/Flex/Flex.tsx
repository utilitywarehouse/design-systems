import * as React from 'react';
import clsx from 'clsx';

import { flexPropDefs, type FlexProps } from './Flex.props';

import type { ElementRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { extractProps } from '../../helpers/extract-props';
import { paddingPropDefs } from '../../props/padding.props';
import { colorPropDefs } from '../../props/color.props';
import { sizePropDefs } from '../../props/size.props';
import { gapPropDefs } from '../../props/gap.props';

const componentName = 'Flex';
const componentClassName = withGlobalPrefix(componentName);

type FlexElement = ElementRef<'div'>;

export const Flex = React.forwardRef<FlexElement, FlexProps>((props, ref) => {
  const {
    className,
    asChild,
    as: Tag = 'div',
    ...flexProps
  } = extractProps(props, flexPropDefs, paddingPropDefs, colorPropDefs, sizePropDefs, gapPropDefs);

  const Component = asChild ? Slot : Tag;

  return <Component ref={ref} className={clsx(componentClassName, className)} {...flexProps} />;
});

Flex.displayName = componentName;
