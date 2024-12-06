import { PropDef } from './prop-def';

const backgroundColorPropDefs = {
  backgroundColor: { className: 'background-color', responsive: false },
} satisfies {
  backgroundColor: PropDef<string>;
};

interface BackgroundColorProps {
  backgroundColor?: string;
}

export { backgroundColorPropDefs };
export type { BackgroundColorProps };
