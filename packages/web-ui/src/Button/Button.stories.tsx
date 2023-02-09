import Box from '../Box';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '../Stack';
import Button from './Button';
import { Title, ArgsTable, Description } from '@storybook/blocks';

const sizes = ['small', 'medium', 'large'] as const;
const variants = ['primary', 'secondary'] as const;

const meta: Meta<typeof Button> = {
  title: 'Components / Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <ArgsTable />
        </>
      ),
    },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: [...variants, 'tertiary'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: sizes,
      },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const KitchenSink: Story = {
  name: 'Kitchen Sink',
  render: () => {
    const backgroundColors = ['white', 'whiteOwl', 'lightTint', 'purple', 'midnight'] as const;
    return (
      <Stack spacing={0}>
        {backgroundColors.map(color => (
          <Box key={color} background={color} display="flex" justifyContent="center" padding={4}>
            <Stack spacing={4}>
              {variants.map(variant => (
                <Stack key={variant} direction="row" spacing={2} alignItems="center">
                  <>
                    {sizes.map(size => (
                      <Button key={size} size={size} variant={variant}>
                        button
                      </Button>
                    ))}
                    {sizes.map(size => (
                      <Button key={size} size={size} variant={variant} disabled={true}>
                        button
                      </Button>
                    ))}
                  </>
                </Stack>
              ))}
              <Stack direction="row" spacing={2} alignItems="center">
                <Button variant="tertiary">button</Button>
                <Button variant="tertiary" disabled={true}>
                  button
                </Button>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    );
  },
  // argTypes: {
  // variant: { table: { disable: true } },
  // size: { table: { disable: true } },
  // disabled: { table: { disable: true } },
  // fullWidth: { table: { disable: true } },
  // href: { table: { disable: true } },
  // classes: { table: { disable: true } },
  // sx: { table: { disable: true } },
  // children: { table: { disable: true } },
  // disableCapitalizeFirstLetter: { table: { disable: true } },
  // },
};
// ButtonKitchenSinkStory.storyName = 'Kitchen Sink';
// ButtonKitchenSinkStory.argTypes = {
//   variant: { table: { disable: true } },
//   size: { table: { disable: true } },
//   disabled: { table: { disable: true } },
//   fullWidth: { table: { disable: true } },
//   href: { table: { disable: true } },
//   classes: { table: { disable: true } },
//   sx: { table: { disable: true } },
//   children: { table: { disable: true } },
//   disableCapitalizeFirstLetter: { table: { disable: true } },
// };
//
// export const ButtonCustomStory: Story<ButtonProps> = args => {
//   return (
//     <BackgroundStack>
//       <Button {...args}>
//         {args.children ? args.children : `${args.size} ${args.variant} button`}
//       </Button>
//     </BackgroundStack>
//   );
// };
// ButtonCustomStory.storyName = 'Playground';
// ButtonCustomStory.argTypes = {
//   classes: { table: { disable: true } },
//   sx: { table: { disable: true } },
// };

export default meta;
