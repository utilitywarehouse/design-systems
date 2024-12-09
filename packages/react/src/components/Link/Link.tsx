import * as React from 'react';

import clsx from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import { linkPropDefs, type LinkProps } from './Link.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { extractProps } from '../../helpers/extract-props';

const componentName = 'Link';
const componentClassName = withGlobalPrefix(componentName);

type LinkElement = ElementRef<'a'>;

/**
 * A semantic Call To Action for navigating between pages.
 */
export const Link = React.forwardRef<LinkElement, LinkProps>((props, ref) => {
  const { className, asChild, children, ...linkProps } = extractProps(props, linkPropDefs);
  return (
    <Slot ref={ref} className={clsx(componentClassName, className)} {...linkProps}>
      {asChild ? children : <a>{children}</a>}
    </Slot>
  );
});

Link.displayName = componentName;
