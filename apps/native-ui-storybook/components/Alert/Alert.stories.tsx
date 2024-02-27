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
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissable: {
      control: 'boolean',
    },
    icon: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    linkText: {
      control: 'text',
    },
    iconButton: {
      control: 'boolean',
    },
  },
  args: {
    colorScheme: 'info',
    dismissable: false,
    iconButton: false,
    icon: true,
    text: 'Unlock the power of knowledge with the following information.',
    title: 'Information',
    linkText: 'Learn more',
  },
};

export default AlertMeta;

export { Alert as Playground, Variants };
