import * as React from 'react';
import clsx from 'clsx';
import { EmProps } from './Em.props';
import { styled } from '../theme';
import { PropsWithSx } from '../types';
import { withGlobalPrefix } from '../utils';

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
 * text that has stress emphasis. `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as this
 * will result in invalid HTML.
 */
export const Em = React.forwardRef<
  React.ElementRef<'em'>,
  React.PropsWithChildren<PropsWithSx<EmProps>>
>(({ className, ...props }, ref) => {
  return <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />;
});

Em.displayName = componentName;
