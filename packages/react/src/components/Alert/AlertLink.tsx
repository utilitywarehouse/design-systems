import * as React from 'react';

import clsx from 'clsx';

import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import type { TextLinkProps } from '../TextLink/TextLink.props';
import { TextLink } from '../TextLink/TextLink';

const componentName = 'AlertLink';
const componentClassName = withGlobalPrefix(componentName);

type AlertLinkElement = ElementRef<'a'>;
type AlertLinkProps = TextLinkProps;

/**
 * An `AlertLink` is a component that is used to display the link of an `Alert`.
 */
export const AlertLink = React.forwardRef<AlertLinkElement, AlertLinkProps>(
  ({ className, ...props }, ref) => (
    <TextLink ref={ref} className={clsx(componentClassName, className)} {...props} />
  )
);

AlertLink.displayName = componentName;
