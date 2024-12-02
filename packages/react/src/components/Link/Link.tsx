import * as React from 'react';

import clsx from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import type { LinkProps } from './Link.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { withBreakpoints } from '../../helpers/with-breakpoints';

const componentName = 'Link';
const componentClassName = withGlobalPrefix(componentName);

type LinkElement = ElementRef<'a'>;

/**
 * A semantic Call To Action for navigating between pages.
 */
export const Link = React.forwardRef<LinkElement, LinkProps>(
  ({ className, asChild, children, size = 'large', ...props }, ref) => {
    return (
      <Slot
        ref={ref}
        className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
        {...props}
      >
        {asChild ? children : <a>{children}</a>}
      </Slot>
    );
  }
);

Link.displayName = componentName;
