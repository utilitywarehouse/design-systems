import * as React from 'react';

import clsx from 'clsx';
import { buttonPropDefs } from './Button.props';
import type { ButtonProps } from './Button.props';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import type { ButtonBaseElement } from '../ButtonBase/ButtonBase';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { extractProps } from '../../helpers/extract-props';

const componentName = 'Button';
const componentClassName = withGlobalPrefix(componentName);

export const Button = React.forwardRef<ButtonBaseElement, ButtonProps>((props, forwardedRef) => {
  const { className, ...buttonProps } = extractProps(props, buttonPropDefs);
  return (
    <ButtonBase
      ref={forwardedRef}
      className={clsx(componentClassName, className)}
      {...buttonProps}
    />
  );
});

Button.displayName = componentName;
