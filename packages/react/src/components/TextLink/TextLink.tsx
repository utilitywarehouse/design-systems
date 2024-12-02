import * as React from 'react';

import clsx from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import type { TextLinkProps } from './TextLink.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';

const componentName = 'TextLink';
const componentClassName = withGlobalPrefix(componentName);

type TextLinkElement = ElementRef<'a'>;

/**
 * A semantic element for navigating between pages. The `TextLink` component is
 * intended to be used within a block of text, and should be nested in a `Text`
 * component. This should happen even when using as a standalone link element
 * as it will inherit many styles from the parent `Text` component.
 */
export const TextLink = React.forwardRef<TextLinkElement, TextLinkProps>(
  ({ className, color, asChild, children, style, ...props }, ref) => {
    const styleProps = { '--text-link-color-custom': color, ...style };
    return (
      <Slot
        ref={ref}
        className={clsx(componentClassName, className)}
        data-color-custom={color ? '' : undefined}
        style={styleProps}
        {...props}
      >
        {asChild ? children : <a>{children}</a>}
      </Slot>
    );
  }
);

TextLink.displayName = componentName;
