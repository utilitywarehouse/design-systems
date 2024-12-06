import { BackgroundColorProps } from '../../props/background-color.props';
import { ColorProps } from '../../props/color.props';
import { GapProps } from '../../props/gap.props';
import type { PaddingProps } from '../../props/padding.props';
import { PropDef } from '../../props/prop-def';
import type { SizeProps } from '../../props/size.props';
import type { ComponentPropsWithout, RemovedProps } from '../../types/component-props';
import type { Responsive, Union } from '../../types/responsive';

const displayValues = ['none', 'inline-flex', 'flex'] as const;
const directionValues = ['row', 'column', 'row-reverse', 'column-reverse'] as const;
const alignValues = [
  'start',
  'center',
  'end',
  'baseline',
  'stretch',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
const justifyValues = [
  'start',
  'center',
  'end',
  'between',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;

export const flexPropDefs = {
  display: { className: 'display', tokens: displayValues, responsive: true },
  direction: { className: 'flex-direction', tokens: directionValues, responsive: true },
  align: { className: 'align-items', tokens: alignValues, responsive: true },
  justify: { className: 'justify-content', tokens: justifyValues, responsive: true },
  wrap: { className: 'flex-wrap', tokens: wrapValues, responsive: true },
} satisfies {
  display: PropDef<(typeof displayValues)[number]>;
  direction: PropDef<(typeof directionValues)[number]>;
  align: PropDef<(typeof alignValues)[number]>;
  justify: PropDef<(typeof justifyValues)[number]>;
  wrap: PropDef<(typeof wrapValues)[number]>;
};

interface CommonFlexProps
  extends ColorProps,
    BackgroundColorProps,
    PaddingProps,
    SizeProps,
    GapProps {
  as?: 'div' | 'span';
  /** Change the default rendered element for the one passed as a child, merging their props and behavior. */
  asChild?: boolean;
  display?: Responsive<(typeof displayValues)[number]>;
  direction?: Responsive<(typeof directionValues)[number]>;
  align?: Responsive<(typeof alignValues)[number]>;
  justify?: Responsive<(typeof justifyValues)[number]>;
  wrap?: Responsive<(typeof wrapValues)[number]>;
}
type FlexDivProps = { as?: 'div' } & ComponentPropsWithout<'div', RemovedProps>;
type FlexSpanProps = { as: 'span' } & ComponentPropsWithout<'span', RemovedProps>;
export type FlexProps = CommonFlexProps & (FlexSpanProps | FlexDivProps);
export { displayValues, directionValues, alignValues, justifyValues, wrapValues };
