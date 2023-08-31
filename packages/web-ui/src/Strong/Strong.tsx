import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { PropsWithStyleOverrides } from '../types';
import { StrongProps } from './Strong.props';

/**
 * The `Strong` component is based on the HTML `strong` element and is used to
 * indicate text that is of strong importance, seriousness, or urgency.
 *
 * `Strong` should be wrapped in a `Text` component, and will inherit it's
 * styles from it's parent. You can also use this component within the
 * `Heading` component, however as `Heading` has only one font-weight there will
 * be no visual distinction, and so this is discouraged.
 */
export const Strong = forwardRef<
  ElementRef<'strong'>,
  PropsWithChildren<PropsWithStyleOverrides<StrongProps>>
>(({ ...props }, ref) => {
  return (
    <Typography
      ref={ref}
      component="strong"
      fontFamily="inherit"
      fontSize="inherit"
      lineHeight="inherit"
      weight="semibold"
      color="inherit"
      {...props}
    />
  );
});

Strong.displayName = 'Strong';
