import { Meta } from '@storybook/react';
import Radio from './Radio';
import Variants from './Variants';

const RadioMeta: Meta<typeof Radio> = {
  title: 'Native UI / Components / Radio',
  component: Radio,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Whether you're building a simple form or a complex data collection system, the Radio component offers a user-friendly way for users to select multiple options from a list.`,
  },
};

export default RadioMeta;
export { Radio as Playground, Variants };
