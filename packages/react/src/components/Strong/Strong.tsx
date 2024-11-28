import * as React from 'react';

import clsx from 'clsx';

import { StrongProps } from './Strong.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

import type { ElementRef } from 'react';

const componentName = 'Strong';
const componentClassName = withGlobalPrefix(componentName);

type StrongElement = ElementRef<'strong'>;

/**
 * The `Em` component is based on the HTML `em` element and is used to indicate
 * text that has stress emphasis. `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as this
 * will result in invalid HTML.
 */
export const Strong = React.forwardRef<StrongElement, StrongProps>(
  ({ className, ...props }, ref) => {
    return <strong ref={ref} className={clsx(componentClassName, className)} {...props} />;
  }
);

Strong.displayName = componentName;
