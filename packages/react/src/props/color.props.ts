import { PropDef } from './prop-def';

const colorPropDefs = {
  color: { className: 'color', responsive: false },
  backgroundColor: { className: 'background-color', responsive: false },
} satisfies {
  color: PropDef<string>;
  backgroundColor: PropDef<string>;
};

interface ColorProps {
  /**
   * Set the foreground colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   */
  color?: string;
  /**
   * Set the background colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   */
  backgroundColor?: string;
}

export { colorPropDefs };
export type { ColorProps };
