import * as React from 'react';

import clsx from 'clsx';

import { headingPropDefs, HeadingProps } from './Heading.props';
import type { ElementRef } from 'react';
import { extractProps } from '../../helpers/extract-props';
import { textAlignPropDefs } from '../../props/text-align.props';
import { Slot } from '@radix-ui/react-slot';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'Heading';
const componentClassName = withGlobalPrefix(componentName);

type HeadingElement = ElementRef<'h2'>;

export const Heading = React.forwardRef<HeadingElement, HeadingProps>(
  ({ variant, ...props }, ref) => {
    const { className, as, asChild, children, ...headingProps } = extractProps(
      { variant, ...props },
      headingPropDefs,
      textAlignPropDefs
    );
    const defaultElement = 'h2';
    const variantElement = variant === 'displayHeading' ? 'h1' : variant || defaultElement;
    const Tag = as ? as : variant ? variantElement : defaultElement;
    return (
      <Slot ref={ref} className={clsx(componentClassName, className)} {...headingProps}>
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Heading.displayName = componentName;
