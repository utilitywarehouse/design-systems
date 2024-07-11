import * as React from 'react';
import { Text } from '../Text';
import type { TextProps } from '../Text';
import { withGlobalPrefix } from '../utils';
import { PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'AlertTitle';
const componentClassName = withGlobalPrefix(componentName);

/**
 * An `AlertTitle` is a component that is used to display the title of an `Alert`.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const AlertTitle = React.forwardRef<
  React.ElementRef<'div'>,
  React.PropsWithChildren<PropsWithSx<TextProps>>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={clsx(componentClassName, className)}
    variant="body"
    bold
    component="h2"
    color="inherit"
    {...props}
  />
));

AlertTitle.displayName = componentName;
