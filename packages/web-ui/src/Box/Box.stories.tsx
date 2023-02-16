import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';
import { backgroundColors } from '../types';
import Typography from '../Typography';
import { Box } from './Box';

const meta: ComponentMeta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    background: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    component: { control: { type: 'text' } },
  },
  args: {
    background: 'white',
    component: 'div',
    width: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.medium,
    padding: 3,
  },
};

export default meta;
type Story = ComponentStory<typeof Box>;

export const BoxStory: Story = args => {
  const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
  return (
    <Box padding={4}>
      <Box {...args}>
        <Typography variant="h2" component="span">
          {args.background} ({hexValue})
        </Typography>
      </Box>
    </Box>
  );
};

BoxStory.storyName = 'Box';
