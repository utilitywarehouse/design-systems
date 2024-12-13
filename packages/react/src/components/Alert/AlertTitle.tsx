import * as React from 'react';

import clsx from 'clsx';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import type { BodyTextProps } from '../BodyText/BodyText.props';
import { BodyText } from '../BodyText/BodyText';

const componentName = 'AlertTitle';
const componentClassName = withGlobalPrefix(componentName);

type AlertTitleElement = ElementRef<'h2'>;
type AlertTitleProps = BodyTextProps;

/**
 * An `AlertTitle` is a component that is used to display the title of an `Alert`.
 */
export const AlertTitle = React.forwardRef<AlertTitleElement, AlertTitleProps>(
  ({ className, children, ...props }, ref) => (
    <BodyText
      ref={ref}
      className={clsx(componentClassName, className)}
      variant="body"
      weight="semibold"
      asChild
      {...props}
    >
      <h2>{children}</h2>
    </BodyText>
  )
);

AlertTitle.displayName = componentName;
