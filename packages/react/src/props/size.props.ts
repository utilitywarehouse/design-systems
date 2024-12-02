import { Responsive } from '../types/responsive';

export interface SizeProps {
  width?: Responsive<string>;
  maxWidth?: Responsive<string>;
  minWidth?: Responsive<string>;
  height?: Responsive<string>;
  maxHeight?: Responsive<string>;
  minHeight?: Responsive<string>;
}
