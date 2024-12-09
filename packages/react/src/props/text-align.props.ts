import { Responsive } from '../types/responsive';
import { PropDef } from './prop-def';

const textAlignValues = ['left', 'center', 'right'] as const;

const textAlignPropDefs = {
  align: { className: 'text-align', tokens: textAlignValues, responsive: true },
} satisfies {
  align: PropDef<(typeof textAlignValues)[number]>;
};

interface TextAlignProps {
  /**
   * Set the text-align on the component.
   */
  align?: Responsive<(typeof textAlignValues)[number]>;
}

export { textAlignPropDefs };
export type { TextAlignProps };
