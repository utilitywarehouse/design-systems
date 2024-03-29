import * as React from 'react';
import { Typography } from '../Typography';
import { PropsWithSx } from '../types';
import { EmProps } from './Em.props';
import { withGlobalPrefix } from '../utils';
import clsx from 'clsx';

const componentName = 'Em';
const componentClassName = withGlobalPrefix(componentName);

/**
 * The `Em` component is based on the HTML `em` element and is used to indicate
 * text that has stress emphasis.
 *
 * `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as this
 * will result in invalid HTML.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Em = React.forwardRef<
  React.ElementRef<'em'>,
  React.PropsWithChildren<PropsWithSx<EmProps>>
>(({ className, ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      component="em"
      className={clsx(componentClassName, className)}
      fontStyle="italic"
      fontFamily="inherit"
      fontSize="inherit"
      lineHeight="inherit"
      weight="inherit"
      color="inherit"
      {...props}
    />
  );
});

Em.displayName = componentName;
