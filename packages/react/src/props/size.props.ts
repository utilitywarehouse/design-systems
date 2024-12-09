import { Responsive } from '../types/responsive';
import { PropDef } from './prop-def';

const sizePropDefs = {
  width: { className: 'width', responsive: true },
  maxWidth: { className: 'max-width', responsive: true },
  minWidth: { className: 'min-width', responsive: true },
  height: { className: 'height', responsive: true },
  maxHeight: { className: 'max-height', responsive: true },
  minHeight: { className: 'min-height', responsive: true },
} satisfies {
  width: PropDef<string>;
  maxWidth: PropDef<string>;
  minWidth: PropDef<string>;
  height: PropDef<string>;
  maxHeight: PropDef<string>;
  minHeight: PropDef<string>;
};

interface SizeProps {
  width?: Responsive<string>;
  maxWidth?: Responsive<string>;
  minWidth?: Responsive<string>;
  height?: Responsive<string>;
  maxHeight?: Responsive<string>;
  minHeight?: Responsive<string>;
}

export type { SizeProps };
export { sizePropDefs };
