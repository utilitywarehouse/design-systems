import * as React from 'react';

import clsx from 'clsx';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import type { BodyTextProps } from '../BodyText/BodyText.props';
import { BodyText } from '../BodyText/BodyText';

const componentName = 'AlertText';
const componentClassName = withGlobalPrefix(componentName);

type AlertTextElement = ElementRef<'h2'>;
type AlertTextProps = BodyTextProps;

/**
 * An `AlertText` is a component that is used to display the text of an `Alert`.
 */
export const AlertText = React.forwardRef<AlertTextElement, AlertTextProps>(
  ({ className, ...props }, ref) => (
    <BodyText
      ref={ref}
      className={clsx(componentClassName, className)}
      variant="body"
      color="inherit"
      as="p"
      {...props}
    />
  )
);

AlertText.displayName = componentName;
