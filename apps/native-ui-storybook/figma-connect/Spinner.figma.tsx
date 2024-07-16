import React from 'react';
import { Spinner } from '@utilitywarehouse/native-ui';
import figma from '@figma/code-connect';
import { colors } from '@utilitywarehouse/colour-system';

figma.connect(
  Spinner,
  'https://www.figma.com/file/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?type=design&node-id=5627-2858&mode=dev',
  {
    props: {
      size: figma.enum('size', {
        'x-small': 'xs',
        small: 'sm',
        medium: 'md',
        large: 'lg',
      }),
    },
    example: ({ size }) => <Spinner size={size} color={colors.purple800} />,
  }
);
