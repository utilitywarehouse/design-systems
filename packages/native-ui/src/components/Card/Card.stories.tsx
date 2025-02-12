import React, { useEffect } from 'react';
import { useArgs } from '@storybook/preview-api';
import { Card } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';
import { Text } from '../Text';
import { VStack } from '../VStack';
import { useColorMode } from '../../hooks';

const meta = {
  title: 'Stories / Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  },
  args: {
    children: 'This is a card',
    variant: 'outline',
    padding: 'medium',
    colorScheme: 'base',
    surface: 'base',
    nested: false,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ children, ...props }) => {
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
        <Text>{children}</Text>
      </Card>
    );
  },
};

export const Variants: Story = {
  parameters: {
    controls: { exclude: ['variant', 'colorScheme'] },
  },
  render: ({ children, ...props }) => {
    const colorMode = useColorMode();
    const [args, setArgs] = useArgs();
    useEffect(() => {
      setArgs({
        ...args,
        surfaceColor: colorMode === 'light' ? props.surface : 'base',
      });
    }, [props.surface]);
    return (
      <VStack space="lg">
        <VariantTitle title="Dashed - Base">
          <Card {...props} variant="dashed">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Elevated - Base">
          <Card {...props} variant="elevated">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Outline - Base">
          <Card {...props} variant="outline">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Filled - Base">
          <Card {...props} variant="filled">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Dashed - Grey">
          <Card {...props} variant="dashed" colorScheme="grey">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Elevated - Grey">
          <Card {...props} variant="elevated" colorScheme="grey">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Outline - Grey">
          <Card {...props} variant="outline" colorScheme="grey">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Filled - Grey">
          <Card {...props} variant="filled" colorScheme="grey">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Outline - Purple">
          <Card {...props} variant="outline" colorScheme="purple">
            <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>{children}</Text>
          </Card>
        </VariantTitle>
        <VariantTitle title="Filled - Purple">
          <Card {...props} variant="filled" colorScheme="purple">
            <Text color="$white">{children}</Text>
          </Card>
        </VariantTitle>
      </VStack>
    );
  },
};
