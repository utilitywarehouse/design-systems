import { Story, Meta } from '@storybook/react';
import { backgroundColors } from '../../types';
import { Box } from '../Box';
import { Typography } from '../Typography';
import Background, { BackgroundProps } from './Background';

export default {
  title: 'Components/Background',
  component: Background,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    sx: { table: { disable: true } },
    backgroundColor: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    component: { control: { type: 'text' } },
  },
  args: {
    backgroundColor: 'white',
    component: 'div',
  },
} as Meta;

export const BackgroundStory: Story<BackgroundProps> = (args) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Background
        {...args}
        sx={{
          width: '100%',
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}
      >
        <Typography variant="h2" component="span" textTransform="capitalize">
          {args.backgroundColor}
        </Typography>
      </Background>
    </Box>
  );
};

BackgroundStory.storyName = 'Background';
