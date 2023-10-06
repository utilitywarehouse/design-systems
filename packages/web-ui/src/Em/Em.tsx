import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { PropsWithSx } from '../types';
import { EmProps } from './Em.props';
import { getPrefixedName } from '../utils';
import clsx from 'clsx';

const displayName = 'Em';
const componentClassName = getPrefixedName(displayName);

/**
 * The `Em` component is based on the HTML `em` element and is used to indicate
 * text that has stress emphasis.
 *
 * `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as this
 * will result in invalid HTML.
 */
export const Em = forwardRef<ElementRef<'em'>, PropsWithChildren<PropsWithSx<EmProps>>>(
  ({ className, ...props }, ref) => {
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
  }
);

Em.displayName = displayName;
