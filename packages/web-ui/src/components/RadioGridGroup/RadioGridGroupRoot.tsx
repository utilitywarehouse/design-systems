import * as React from 'react';

import clsx from 'clsx';

import { Root } from '@radix-ui/react-radio-group';

import { RadioGridGroupRootProps } from './RadioGridGroupRoot.props';

import { Box } from '../Box';

import { getColumns } from '../../helpers';
import type { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'RadioGridGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

/**
 * The `RadioGridGroup` provides an accessible way to group and control a set
 * of `Radio` or `RadioTile` components, displayed in a grid layout, allowing
 * the user to select one option from a set. For displaying radios in a column
 * or row, please use the `RadioGroup` component. The `RadioGridGroup` is
 * responsible for handling the value, helper text, error state, error message,
 * and disabled state, as well as determining the presentation and selection of
 * the items in the list. Follows the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio groups not contained in a toolbar.
 */
export const RadioGridGroupRoot = React.forwardRef<
  HTMLDivElement,
  PropsWithSx<RadioGridGroupRootProps>
>(({ id, disabled, children, width, columns = 2, className, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      asChild
      {...props}
      disabled={disabled}
      id={id}
      className={clsx(componentClassName, className)}
    >
      <Box
        display="grid"
        gap={2}
        gridTemplateColumns={getColumns(columns)}
        minWidth="fit-content"
        width={width}
      >
        {children}
      </Box>
    </Root>
  );
});

RadioGridGroupRoot.displayName = componentName;
