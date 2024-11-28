import * as React from 'react';

import clsx from 'clsx';

import { EmProps } from './Em.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

import type { ElementRef } from 'react';

const componentName = 'Em';
const componentClassName = withGlobalPrefix(componentName);

type EmElement = ElementRef<'em'>;

/**
 * The `Em` component is based on the HTML `em` element and is used to indicate
 * text that has stress emphasis. `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as this
 * will result in invalid HTML.
 */
export const Em = React.forwardRef<EmElement, EmProps>(({ className, ...props }, ref) => {
  return <em ref={ref} className={clsx(componentClassName, className)} {...props} />;
});

Em.displayName = componentName;
