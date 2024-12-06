import { PropDef } from './prop-def';

const colorPropDefs = {
  color: { className: 'color', responsive: false },
  backgroundColor: { className: 'background-color', responsive: false },
} satisfies {
  color: PropDef<string>;
  backgroundColor: PropDef<string>;
};

interface ColorProps {
  color?: string;
  backgroundColor?: string;
}

export { colorPropDefs };
export type { ColorProps };
