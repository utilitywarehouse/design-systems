import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { badgePropDefs, BadgeProps } from './Badge.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';
import { extractProps } from '../../helpers/extract-props';

const componentName = 'Badge';
const componentClassName = withGlobalPrefix(componentName);

type BadgeElement = ElementRef<'span'>;

/**
 * Provide additional context (such as status), or to draw attention to another
 * interface element.
 */
export const Badge = React.forwardRef<BadgeElement, BadgeProps>((props, ref) => {
  const {
    className,
    colorScheme = 'cyan',
    bottomRadiusZero,
    ...badgeProps
  } = extractProps(props, badgePropDefs);
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.colorscheme]: colorScheme,
    'data-bottom-radius-zero': bottomRadiusZero ? '' : undefined,
  };
  return (
    <span
      ref={ref}
      className={clsx(componentClassName, className)}
      {...dataAttributeProps}
      {...badgeProps}
    />
  );
});

Badge.displayName = componentName;
