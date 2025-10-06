import { Meta, StoryObj } from '@storybook/react-vite';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { Flex } from 'build';
import { ComponentType } from 'react';
import { IconButton, IconButtonProps } from '.';
import { VariantTitle } from '../../../docs/components';
import { Box } from '../Box';
import { ButtonGroup } from '../Button';
import { Heading } from '../Heading';

const meta = {
  title: 'Stories / IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['x-small', 'small', 'medium'],
      control: 'select',
      description: 'The size of the button.',
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: 'select',
      description: 'The variant of the button.',
    },
    icon: {
      options: [...Object.keys(Icons)],
      control: 'select',
      description: 'The icon component for the button.',
    },
    loading: {
      type: 'boolean',
      control: 'boolean',
      description: 'To manually set loading to the button.',
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
  },
  args: {
    size: 'medium',
    variant: 'solid',
    colorScheme: 'cyan',
    icon: 'AddMediumIcon' as unknown as ComponentType,
    loading: false,
    disabled: false,
    inverted: false,
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ icon: _icon, ...args }) => {
    // @ts-expect-error - This is a playground
    const icon = _icon === 'none' ? undefined : Icons[_icon];
    return <IconButton {...args} icon={icon} />;
  },
};

export const Variants: Story = {
  parameters: {
    controls: { exclude: ['variant'] },
  },
  render: ({ icon: _icon, ...args }) => {
    // @ts-expect-error - This is a playground
    const icon = _icon === 'none' ? undefined : Icons[_icon];
    return (
      <ButtonGroup flexDirection="column" space="md">
        <VariantTitle title="Solid">
          <IconButton {...args} variant="solid" icon={icon} />
        </VariantTitle>
        <VariantTitle title="Outline">
          <IconButton {...args} variant="outline" icon={icon} />
        </VariantTitle>
        <VariantTitle title="Ghost">
          <IconButton {...args} variant="ghost" icon={icon} />
        </VariantTitle>
      </ButtonGroup>
    );
  },
};

export const KitchenSink: Story = {
  parameters: {
    controls: { include: ['icon'] },
  },
  render: ({ icon: _icon }) => {
    // @ts-expect-error - This is a playground
    const icon = _icon === 'none' ? undefined : Icons[_icon];
    const schemes: Array<IconButtonProps['colorScheme']> = ['cyan', 'red', 'green', 'grey', 'gold'];
    const variants: Array<IconButtonProps['variant']> = ['solid', 'outline', 'ghost'];
    return (
      <Flex direction="row" space="lg" wrap="wrap">
        {schemes.map(scheme => (
          <Flex direction="column" space="lg" key={scheme}>
            {variants.map(variant => (
              <Box key={variant} mb="100">
                <Box mb="100">
                  <Heading>
                    {scheme} - {variant}
                  </Heading>
                </Box>
                <Flex direction="column" space="lg">
                  <VariantTitle title="Default">
                    <IconButton icon={icon} variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Pressed">
                    <IconButton icon={icon} pressed variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Disabled">
                    <IconButton icon={icon} disabled variant={variant} colorScheme={scheme} />
                  </VariantTitle>
                  <VariantTitle title="Loading">
                    <IconButton
                      icon={icon}
                      loading
                      variant={variant}
                      colorScheme={scheme}
                      disabled
                    />
                  </VariantTitle>
                </Flex>
              </Box>
            ))}
          </Flex>
        ))}
      </Flex>
    );
  },
};
