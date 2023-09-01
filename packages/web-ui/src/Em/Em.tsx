import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { PropsWithSx } from '../types';
import { EmProps } from './Em.props';
import { globalPrefix } from '../utils';
import clsx from 'clsx';

const displayName = 'Em';
const componentClassName = `${globalPrefix}-${displayName}`;

/**
 * The `Em` component is based on the HTML `em` element and is used to indicate
 * text that has stress emphasis.
 *
 * `Em` should be wrapped in a `Text` component, and will inherit the parent
 * styles. It should __not__ be used within the `Heading` component, as it is
 * not valid HTML to use `em` inside headings.
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
