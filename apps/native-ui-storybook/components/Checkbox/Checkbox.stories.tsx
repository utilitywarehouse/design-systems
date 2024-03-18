import { Meta } from '@storybook/react';
import Checkbox from './Checkbox';
import Variants from './Variants';

const CheckboxMeta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Whether you're building a simple form or a complex data collection system, the Checkbox component offers a user-friendly way for users to select multiple options from a list.`,
  },
};

export default CheckboxMeta;
export { Checkbox as Playground, Variants };
