import * as React from 'react';
import { PropsWithSx } from '../types';
import { EmProps } from './Em.props';
import { withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';

const componentName = 'Em';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('em')({
  fontStyle: 'italic',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
});

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
  return <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />;
});

Em.displayName = componentName;
