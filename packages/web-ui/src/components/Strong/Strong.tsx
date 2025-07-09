import * as React from 'react';

import clsx from 'clsx';

import type { StrongProps } from './Strong.props';

import { styled } from '../../theme';
import { fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'Strong';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled('strong')({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: fontWeights.secondary.semibold,
  lineHeight: 'inherit',
  color: 'inherit',
});

/**
 * The `Strong` component is based on the HTML `strong` element and is used to
 * indicate text that is of strong importance, seriousness, or urgency.
 * `Strong` should be wrapped in a `Text` component, and will inherit it's
 * styles from it's parent. You can also use this component within the
 * `Heading` component, however as `Heading` has only one font-weight there
 * will be no visual distinction, and so this is discouraged.
 */
export const Strong = React.forwardRef<
  React.ElementRef<'strong'>,
  React.PropsWithChildren<PropsWithSx<StrongProps>>
>(({ className, ...props }, ref) => {
  /* @ts-expect-error - upgrade issue. TODO: Fix this */
  return <StyledElement ref={ref} className={clsx(componentClassName, className)} {...props} />;
});

Strong.displayName = componentName;
