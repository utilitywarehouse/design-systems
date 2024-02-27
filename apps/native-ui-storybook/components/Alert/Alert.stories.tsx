import { Meta } from '@storybook/react';
import Alert from './Alert';
import Variants from './Variants';

const AlertMeta: Meta<typeof Alert> = {
  title: 'components/Alert',
  component: Alert,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `Alerts are used to communicate the status of a system, feature, or page. They indicate a specific state that may require attention from the user.`,
  },
};

export default AlertMeta;

export { Alert as Playground, Variants };
