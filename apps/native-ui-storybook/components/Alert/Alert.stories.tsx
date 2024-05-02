import { Meta } from '@storybook/react';
import Alert from './Alert';
import Variants from './Variants';

const AlertMeta: Meta<typeof Alert> = {
  title: 'Native UI / Components / Alert',
  component: Alert,
};

export default AlertMeta;

export { Alert as Playground, Variants };
