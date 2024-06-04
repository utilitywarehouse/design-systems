import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../Stack';
import { Backgrounds } from '../storybook-utils';
import { Badge } from './Badge';

const variants = ['soft', 'strong', 'outline'] as const;
const compressed = [true, false] as const;
const bottomRadius = [true, false] as const;
const colorSchemes = ['cyan', 'green', 'red', 'gold', 'grey'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Web UI / Components / Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const BadgeWorkshop: Story = {
  name: 'Workshop',
  parameters: { layout: 'fullscreen' },
  render: args => {
    return (
      <Backgrounds>
        <Badge {...args}>{args.children}</Badge>
      </Backgrounds>
    );
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: [...variants],
      control: { type: 'radio' },
    },
    compact: {
      control: { type: 'boolean' },
    },
    hasBottomRadiusZero: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Badge',
    variant: 'soft',
    compact: false,
    hasBottomRadiusZero: false,
  },
};

// export const BadgeVariations: Story = {
//   name: 'Variants',
//   parameters: { layout: 'centered' },
//   render: () => {
//     return (
//       <Stack spacing={2} direction="row" alignItems="center">
//         <>
//           {variants.map((variant, index) => (
//             <Badge key={index} variant={variant}>
//               {variant}
//             </Badge>
//           ))}
//           {compressed.map((compression, index) => (
//             <Badge key={index} compressed={compression}>
//               {`${compression ? 'compressed' : 'not compressed'}`}
//             </Badge>
//           ))}
//           {bottomRadius.map((radius, index) => (
//             <Badge key={index} bottomRadius={radius}>
//               {`${bottomRadius ? 'with bottom border radius' : 'without'}`}
//             </Badge>
//           ))}
//         </>
//       </Stack>
//     );
//   },
// };
// export const BadgeColorSchemes: Story = {
//   name: 'Color Schemes',
//   parameters: { layout: 'centered' },
//   render: () => {
//     return (
//       <Backgrounds>
//         <Stack spacing={4}>
//           {colorSchemes.map(colorScheme => (
//             <Stack key={colorScheme} direction="row" spacing={2} alignItems="center">
//               <>
//                 {compressed.map((compression, index) => (
//                   <Badge key={index} compressed={compression}>
//                     {colorScheme}
//                   </Badge>
//                 ))}
//               </>
//             </Stack>
//           ))}
//         </Stack>
//       </Backgrounds>
//     );
//   },
// };
