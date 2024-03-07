import type { Meta } from '@storybook/react';

import Icon from './Icon';

const IconMeta: Meta<typeof Icon> = {
  title: 'components/Icons',
  component: Icon,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    clusteringOrder: [['as', 'displayName']],
    componentDescription:
      'Icons are often used to enhance the usability and accessibility of digital products by providing users with clear and intuitive visual cues. It serves as an intuitive and easily recognizable way to communicate with users.',
  },
  argTypes: {},
  args: {},
};

export default IconMeta;
export { Icon };
