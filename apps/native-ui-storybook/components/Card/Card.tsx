import { Text, Card } from '@utilitywarehouse/native-ui';
import React from 'react';
import { ScrollWrap } from '../../docs/components';
import { Box } from '@utilitywarehouse/native-ui/lab';

const CardBasic = ({ ...props }) => {
  return (
    <Box height={60} w="100%">
      <ScrollWrap backgroundColor={props.surface}>
        <Card {...props}>
          <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
        </Card>
      </ScrollWrap>
    </Box>
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
