import React, { useEffect } from 'react';
import { Alert, AlertIcon, AlertText, VStack, Icon } from '@utilitywarehouse/native-ui';
import { Meta, StoryFn } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

const AlertBasic: StoryFn = ({ link, onPressIconButton, onClose, ...props }: any) => {
  const [args, setArgs] = useArgs();
  const handlePressLink = () => {
    alert('Link Pressed!');
  };

  const handlePressIconButton = () => {
    alert('Icon Button Pressed!');
  };

  const handleClose = () => {
    alert('Alert Dismissed!');
  };

  useEffect(() => {
    if (onPressIconButton && link) {
      setArgs({ ...args, link: undefined });
    }
  }, [link, onPressIconButton]);

  return (
    <Alert
      link={link}
      onPressLink={link ? handlePressLink : undefined}
      onPressIconButton={onPressIconButton ? handlePressIconButton : undefined}
      onClose={onClose ? handleClose : undefined}
      {...props}
    />
  );
};

AlertBasic.argTypes = {
  colorScheme: {
    control: 'select',
    options: ['cyan', 'green', 'gold', 'red'],
    description: 'Use this valie to change the alert type and colour scheme.',
    defaultValue: 'cyan',
  },
  title: {
    control: 'text',
    description: 'Use this value to set the alert title.',
  },
  text: {
    control: 'text',
    description: 'Use this value to set the alert text.',
  },
  link: {
    control: 'text',
    description:
      'Use this value to set the alert link text. Use along with the `onPressLink` prop.',
  },
  onClose: {
    control: 'boolean',
    description: 'Use this handle the on close event. (Use a function to handle the event.)',
  },
  onPressIconButton: {
    control: 'boolean',
    description: 'Use this handle Icon Button press. (Use a function to handle the event.)',
  },
} as Meta<typeof Alert>['argTypes'];

AlertBasic.args = {
  colorScheme: 'cyan',
  title: 'Information',
  text: 'Unlock the power of knowledge with the following information.',
  link: 'Learn more',
  onClose: true as () => void,
  onPressIconButton: false,
} as Meta<typeof Alert>['args'];

export default AlertBasic;

export { Alert, AlertIcon, AlertText, Icon, VStack };
