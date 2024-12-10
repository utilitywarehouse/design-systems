import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';
import { buttonBasePropDefs, ButtonBaseProps } from './ButtonBase.props';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';
import type { ElementRef } from 'react';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { extractProps } from '../../helpers/extract-props';

const componentName = 'ButtonBase';
const componentClassName = withGlobalPrefix(componentName);

export type ButtonBaseElement = ElementRef<'button'>;

export const ButtonBase = React.forwardRef<ButtonBaseElement, ButtonBaseProps>((props, ref) => {
  const {
    colorScheme = 'cyan',
    className,
    disabled,
    onClick,
    asChild,
    ...buttonBaseProps
  } = extractProps(props, buttonBasePropDefs);
  const dataAttributeProps = { [DATA_ATTRIBUTES.colorscheme]: colorScheme };

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      ref={ref}
      aria-disabled={disabled || undefined}
      className={clsx(componentClassName, className)}
      // as we're using aria-disabled instead of disabled then we need to
      // disable the onClick event
      onClick={disabled ? undefined : onClick}
      {...dataAttributeProps}
      {...buttonBaseProps}
    />
  );
});

ButtonBase.displayName = componentName;
