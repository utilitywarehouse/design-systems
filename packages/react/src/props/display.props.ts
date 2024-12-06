import { Responsive, Union } from '../types/responsive';
import { PropDef } from './prop-def';


const displayPropDefs = {
  display: { className: 'display', responsive: true },
} satisfies {
  display: PropDef<string>;
};

interface DisplayProps {
  display?: Responsive<Union<string, (typeof gapTokens)[number]>>;
}

export { gapPropDefs, gapTokens };
export type { GapProps };
