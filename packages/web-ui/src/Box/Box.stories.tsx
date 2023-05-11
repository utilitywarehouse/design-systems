import type { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from './Box';
import { useRef } from 'react';
import { fonts } from '../tokens';
import { colorsCommon } from '@utilitywarehouse/colour-system';

const meta: Meta<typeof Box> = {
  title: 'Web UI / Components / Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {
  render: args => {
    return <Box {...args} />;
  },
  args: {
    component: 'div',
    children: 'box',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `8px solid ${colorsCommon.brandPrimaryPurple}`,
    borderRadius: '16px',
    margin: 2,
    fontFamily: fonts.secondary,
    textTransform: 'capitalize',
  },
};

type Props = BoxProps<'a', { additionalProp: string }>;
export const CustomComponent = {
  render: (args: Props) => {
    const CustomAnchor = ({ onClick, href, additionalProp, ...props }: Props) => {
      const ref = useRef<HTMLButtonElement>(null);
      return (
        <Box component="a" onClick={onClick} href={href} ref={ref} {...props}>
          Additional Prop: {additionalProp}
        </Box>
      );
    };
    return <CustomAnchor {...args} />;
  },
  args: {
    additionalProp: 'I am the additional prop :)',
  },
};
