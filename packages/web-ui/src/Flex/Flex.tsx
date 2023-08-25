import { BoxProps as MuiBoxProps, createBox } from '@mui/system';
import { PropsWithChildren } from 'react';
import { theme, type Theme } from '../theme';
import { globalPrefix } from '../utils';

const displayName = 'Flex';

export interface FlexProps extends Omit<MuiBoxProps, 'display'> {
  display?: 'flex' | 'inline-flex';
  direction?: MuiBoxProps['flexDirection'];
  align?: MuiBoxProps['alignItems'];
  justify?: MuiBoxProps['justifyContent'];
  wrap?: MuiBoxProps['flexWrap'];
  basis?: MuiBoxProps['flexBasis'];
  grow?: MuiBoxProps['flexGrow'];
  shrink?: MuiBoxProps['flexShrink'];
}

const BaseBox = createBox<Theme>({
  defaultTheme: theme,
  defaultClassName: `${globalPrefix}-${displayName}`,
});

/**
 * Flex is a low-level primitive, with display set to `flex`.
 *
 * As well as the same style props as the `Box` component, it supports a set of
 * shorthand, flexbox specific props.
 *
 * - `direction` is `flexDirection`
 * - `wrap` is `flexWrap`
 * - `basis` is `flexBasis`
 * - `grow` is `flexGrow`
 * - `shrink` is `flexShrink`
 * - `align` is `alignItems`
 * - `justify` is `justifyContent`
 *
 * This component should be used to create vertical and horizontal stacked layouts.
 */
export const Flex = ({
  display = 'flex',
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  shrink,
  component,
  ...props
}: PropsWithChildren<FlexProps>) => {
  const combinedProps = {
    as: component,
    display,
    flexDirection: direction,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    alignItems: align,
    justifyContent: justify,
    ...props,
  };

  return <BaseBox {...combinedProps} />;
};

Flex.displayName = displayName;
