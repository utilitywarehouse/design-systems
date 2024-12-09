import { PropDef } from './prop-def';

const colorPropDefs = {
  color: { className: 'color', responsive: false },
} satisfies {
  color: PropDef<string>;
};

interface ColorProps {
  /**
   * Set the text colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   */
  color?: string;
}

export { colorPropDefs };
export type { ColorProps };
