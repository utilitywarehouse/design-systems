import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { PropsWithSx } from '../types';
import { StrongProps } from './Strong.props';
import clsx from 'clsx';
import { getClassName } from '../utils';

const displayName = 'Strong';
const componentClassName = getClassName(displayName);

/**
 * The `Strong` component is based on the HTML `strong` element and is used to
 * indicate text that is of strong importance, seriousness, or urgency.
 *
 * `Strong` should be wrapped in a `Text` component, and will inherit it's
 * styles from it's parent. You can also use this component within the
 * `Heading` component, however as `Heading` has only one font-weight there will
 * be no visual distinction, and so this is discouraged.
 */
export const Strong = forwardRef<ElementRef<'strong'>, PropsWithChildren<PropsWithSx<StrongProps>>>(
  ({ className, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        component="strong"
        className={clsx(componentClassName, className)}
        fontFamily="inherit"
        fontSize="inherit"
        lineHeight="inherit"
        weight="semibold"
        color="inherit"
        {...props}
      />
    );
  }
);

Strong.displayName = displayName;
