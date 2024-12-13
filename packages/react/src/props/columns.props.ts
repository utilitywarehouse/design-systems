import { Responsive } from '../types/responsive';
import { PropDef } from './prop-def';

const columnsPropDefs = {
  columns: { className: 'columns', responsive: true },
} satisfies {
  columns: PropDef<number>;
};

interface ColumnsProps {
  /** Sets the number of columns to display the contents in. */
  columns?: Responsive<number>;
}

export { columnsPropDefs };
export type { ColumnsProps };
