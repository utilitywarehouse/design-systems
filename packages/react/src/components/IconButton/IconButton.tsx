import * as React from 'react';

import clsx from 'clsx';
import { iconButtonPropDefs, IconButtonProps } from './IconButton.props';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import type { ButtonBaseElement } from '../ButtonBase/ButtonBase';
import { extractProps } from '../../helpers/extract-props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'IconButton';
const componentClassName = withGlobalPrefix(componentName);

export const IconButton = React.forwardRef<ButtonBaseElement, IconButtonProps>(
  (props, forwardedRef) => {
    const { className, label, ...iconButtonProps } = extractProps(props, iconButtonPropDefs);
    return (
      <ButtonBase
        ref={forwardedRef}
        className={clsx(componentClassName, className)}
        aria-label={label}
        {...iconButtonProps}
      />
    );
  }
);

IconButton.displayName = componentName;
