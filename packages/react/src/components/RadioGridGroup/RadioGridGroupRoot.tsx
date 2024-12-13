import * as React from 'react';

import clsx from 'clsx';

import { Root } from '@radix-ui/react-radio-group';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import type { RadioGridGroupRootProps } from './RadioGridGroup.props';
import { Box } from '../Box/Box';
import { extractProps } from '../../helpers/extract-props';
import { columnsPropDefs } from '../../props/columns.props';

const componentName = 'RadioGridGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

type RadioGridGroupRootElement = ElementRef<'div'>;

export const RadioGridGroupRoot = React.forwardRef<
  RadioGridGroupRootElement,
  RadioGridGroupRootProps
>((props, ref) => {
  const { className, width, children, ...radioGridGroupProps } = extractProps(
    props,
    columnsPropDefs
  );

  return (
    <Root ref={ref} asChild {...radioGridGroupProps}>
      <Box className={clsx(componentClassName, className)} width={width}>
        {children}
      </Box>
    </Root>
  );
});

RadioGridGroupRoot.displayName = componentName;
