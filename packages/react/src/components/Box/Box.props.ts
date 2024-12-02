import type { ColorProps } from '../../props/color.props';
import type { PaddingProps } from '../../props/padding.props';
import type { SizeProps } from '../../props/size.props';
import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

interface CommonBoxProps extends ColorProps, PaddingProps, SizeProps {
  as?: 'div' | 'span';
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}
type BoxDivProps = { as?: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type BoxSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
export type BoxProps = CommonBoxProps & (BoxSpanProps | BoxDivProps);
