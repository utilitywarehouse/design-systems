import { ElementType } from 'react';

import { Theme } from '../theme';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverrideProps } from '@mui/types';

export interface BoxOwnProps {
  /**
   * Sets the background colour.
   *
   * When 'purple' and 'midnight' brand colours are used, child `Text` &
   * `Heading` components have their foreground colour set to 'white'.
   */
  background?: string; // we are not setting this as MuiBoxProps['backgroundColor'] as we don't believe there is any need for it to be responsive, yet.
}

export type BoxProps<
  RootComponent extends ElementType = MuiBoxTypeMap['defaultComponent'],
  AdditionalProps = object,
> = OverrideProps<
  MuiBoxTypeMap<BoxOwnProps & AdditionalProps, RootComponent, Theme>,
  RootComponent
> & {
  component?: ElementType;
};
