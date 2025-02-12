import { Text, Card, useColorMode } from '@utilitywarehouse/native-ui';
import React, { useEffect } from 'react';
import { useArgs } from '@storybook/preview-api';

const CardBasic = ({ ...props }) => {
  const colorMode = useColorMode();
  const [args, setArgs] = useArgs();
  useEffect(() => {
    setArgs({
      ...args,
      surfaceColor: colorMode === 'light' ? props.surface : 'base',
    });
  }, [props.surface]);
  return (
    <Card {...props}>
      <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
    </Card>
  );
};

CardBasic.argTypes = {
  variant: {
    control: 'select',
    options: ['dashed', 'outline', 'elevated', 'filled'],
    description: 'Use this value to set the Card variant.',
  },
  padding: {
    control: 'select',
    options: ['large', 'medium', 'small', 'none'],
    description: 'Use this value to set the Card padding.',
  },
  colorScheme: {
    control: 'select',
    options: ['base', 'grey', 'purple'],
    description: 'Use this value to set the Card color scheme.',
  },
  surface: {
    control: 'select',
    options: ['base', 'purple'],
    description: 'Use this value to set the Card surface.',
  },
  nested: {
    control: 'boolean',
    description: 'Use this value to set the Card nested.',
  },
};

CardBasic.args = {
  variant: 'outline',
  padding: 'medium',
  colorScheme: 'base',
  surface: 'base',
  nested: false,
};

export default CardBasic;
