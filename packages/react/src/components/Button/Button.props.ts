import { PropDef } from '../../props/prop-def';
import { Responsive } from '../../types/responsive';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase.props';

const sizes = ['small', 'medium'] as const;

export const buttonPropDefs = {
  size: { className: 'size', tokens: sizes, responsive: true, default: 'medium' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
};

export type ButtonProps = ButtonBaseProps & {
  /**
   * Sets the button height.
   * @default medium
   */
  size?: Responsive<(typeof sizes)[number]>;
};
