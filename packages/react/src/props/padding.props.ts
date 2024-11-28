import { Responsive } from '../types/responsive';

export interface PaddingProps {
  padding?: Responsive<string>;
  paddingTop?: Responsive<string>;
  paddingRight?: Responsive<string>;
  paddingBottom?: Responsive<string>;
  paddingLeft?: Responsive<string>;
  paddingInline?: Responsive<string>;
  paddingBlock?: Responsive<string>;
}
