import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';
import { BoxProps } from './Box.props';
import { useRef } from 'react';
import { fonts } from '../tokens';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Text } from '../Text';
import { mediaQueries } from '../utils';

const meta: Meta<typeof Box> = {
  title: 'Web UI / Layout / Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Workshop: Story = {
  render: ({ children, ...args }) => {
    return (
      <Box {...args}>
        <Text>{children}</Text>
      </Box>
    );
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

export const NestedBoxes: Story = {
  render: ({ ...args }) => {
    return (
      <Box {...args} background={colorsCommon.brandMidnight}>
        <Text>This text should be white</Text>
        <Box background={colorsCommon.brandWhite} padding={4} margin={4}>
          <Text>This text should be midnight</Text>
        </Box>
      </Box>
    );
  },
  args: {
    component: 'div',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 4,
    fontFamily: fonts.secondary,
    textTransform: 'capitalize',
  },
};

type Props = BoxProps<'a', { additionalProp: string }>;
export const CustomComponent = {
  render: (args: Props) => {
    const CustomAnchor = ({ onClick, href, additionalProp, ...props }: Props) => {
      const ref = useRef<HTMLAnchorElement>(null);
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
