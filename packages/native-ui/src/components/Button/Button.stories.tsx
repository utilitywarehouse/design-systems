import React from 'react';
import { Button, ButtonGroup, ButtonProps } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { VariantTitle } from '../../../docs/components';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { HStack } from '../HStack';
import { VStack } from '../VStack';
import { Heading } from '../Heading';
import { Box } from '../Box';
import { AddSmallIcon, ChevronRight01SmallIcon } from '@utilitywarehouse/react-native-icons';

const meta = {
  title: 'Stories / Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      type: 'string',
      control: 'text',
      description: 'The text of the button.',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
      description: 'The size of the button.',
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: 'select',
      description: 'The variant of the button.',
    },
    colorScheme: {
      options: ['cyan', 'red', 'green', 'grey', 'gold'],
      control: 'select',
      description: 'The color scheme of the button.',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      description: 'To manually set disable to the button.',
    },
    inverted: {
      type: 'boolean',
      control: 'boolean',
      description:
        'To set the button to be inverted. (To only be used on `midnight` or `purple` backgrounds)',
    },
    icon: {
      options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Small'))],
      control: 'select',
      description: 'The icon component for the button.',
    },
    iconPosition: {
      options: ['left', 'right'],
      control: 'select',
      description: 'The position of the icon component in the button.',
    },
    loading: {
      type: 'boolean',
      control: 'boolean',
      description: 'To show or hide the loading spinner component for the button.',
    },
  },
  args: {
    text: 'Press me',
    size: 'medium',
    variant: 'solid',
    colorScheme: 'cyan',
    disabled: false,
    inverted: false,
    loading: false,
    icon: undefined,
    iconPosition: 'left',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  render: ({ icon: _icon, children: _, ...args }) => {
    // @ts-expect-error - This is a playground
    const icon = _icon === 'none' ? undefined : Icons[_icon];
    return <Button {...args} icon={icon} />;
  },
};

export const Variants: Story = {
  parameters: {
    controls: { exclude: ['variant'] },
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  render: ({ icon: _icon, children: _, ...args }) => {
    // @ts-expect-error - This is a playground
    const icon = _icon === 'none' ? undefined : Icons[_icon];
    return (
      <ButtonGroup flexDirection="column" space="md">
        <VariantTitle title="Solid">
          <Button {...args} variant="solid" icon={icon} />
        </VariantTitle>
        <VariantTitle title="Outline">
          <Button {...args} variant="outline" icon={icon} />
        </VariantTitle>
        <VariantTitle title="Ghost">
          <Button {...args} variant="ghost" icon={icon} />
        </VariantTitle>
      </ButtonGroup>
    );
  },
};

export const KitchenSink: Story = {
  parameters: {
    controls: { include: ['text'] },
  },
  render: ({ text }) => {
    const schemes: Array<ButtonProps['colorScheme']> = ['cyan', 'red', 'green', 'grey', 'gold'];
    const variants: Array<ButtonProps['variant']> = ['solid', 'outline', 'ghost'];
    return (
      <HStack space="lg" wrap>
        {schemes.map(scheme => (
          <VStack space="lg" key={scheme}>
            {variants.map(variant => (
              <Box key={variant} mb="$2">
                <Box mb="$2">
                  <Heading>
                    {scheme} - {variant}
                  </Heading>
                </Box>
                <VStack space="lg">
                  <VariantTitle title="Default">
                    <Button text={text} variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Pressed">
                    <Button text={text} pressed variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Disabled">
                    <Button text={text} disabled variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Icon Left">
                    <Button
                      text={text}
                      icon={AddSmallIcon}
                      variant={variant}
                      colorScheme={scheme}
                    />
                  </VariantTitle>
                  <VariantTitle title="Icon Left">
                    <Button
                      text={text}
                      icon={ChevronRight01SmallIcon}
                      iconPosition="right"
                      variant={variant}
                      colorScheme={scheme}
                    />
                  </VariantTitle>
                  <VariantTitle title="Loading">
                    <Button text={text} loading variant={variant} colorScheme={scheme} disabled />
                  </VariantTitle>
                </VStack>
              </Box>
            ))}
          </VStack>
        ))}
      </HStack>
    );
  },
};
