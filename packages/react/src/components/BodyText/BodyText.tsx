import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { bodyTextPropDefs, BodyTextProps } from './BodyText.props';
import { Slot } from '@radix-ui/react-slot';
import { extractProps } from '../../helpers/extract-props';
import { textAlignPropDefs } from '../../props/text-align.props';
import { colorPropDefs } from '../../props/color.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'BodyText';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  truncate: withGlobalPrefix('truncate'),
};

type BodyTextElement = ElementRef<'p'>;

/**
 * BodyText renders the secondary UW font, Work Sans, to be used for body text.
 */
export const BodyText = React.forwardRef<BodyTextElement, BodyTextProps>(
  ({ children, truncate, ...props }, ref) => {
    const {
      className,
      asChild,
      as: Tag = 'p',
      ...bodyTextProps
    } = extractProps(props, bodyTextPropDefs, textAlignPropDefs, colorPropDefs);

    return (
      <Slot
        ref={ref}
        className={clsx(componentClassName, { [classNames.truncate]: truncate }, className)}
        {...bodyTextProps}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

BodyText.displayName = componentName;
