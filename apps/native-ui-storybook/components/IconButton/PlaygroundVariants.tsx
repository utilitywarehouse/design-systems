import { ButtonGroup, IconButton, Box } from '@utilitywarehouse/native-ui';
import React from 'react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import { ScrollWrap, VariantTitle } from '../../docs/components';

const IconButtonPlaygroundVariants: StoryFn<{
  colorScheme: 'cyan' | 'red' | 'green' | 'grey' | 'gold';
  disabled: boolean;
  size: 'x-small' | 'small' | 'medium';
  icon: string;
  loading: boolean;
  inverted: boolean;
  _backgroundColor: 'default' | 'midnight' | 'purple';
}> = ({ colorScheme, disabled, size, icon: _icon, loading, inverted, _backgroundColor }) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const icon = _icon === 'none' ? undefined : Icons[_icon];
  return (
    <Box height={240} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Solid">
            <IconButton
              icon={icon}
              variant="solid"
              colorScheme={colorScheme}
              disabled={disabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Outline">
            <IconButton
              icon={icon}
              variant="outline"
              colorScheme={colorScheme}
              disabled={disabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Ghost">
            <IconButton
              icon={icon}
              variant="ghost"
              colorScheme={colorScheme}
              disabled={disabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
        </ButtonGroup>
      </ScrollWrap>
    </Box>
  );
};

IconButtonPlaygroundVariants.storyName = 'Playground Variants';

IconButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['x-small', 'small', 'medium'],
    control: 'select',
    description: 'The size of the button.',
  },
  colorScheme: {
    options: ['cyan', 'red', 'green', 'grey', 'gold'],
    control: 'select',
    description: 'The color scheme of the button.',
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
  _backgroundColor: {
    options: ['default', 'midnight', 'purple'],
    control: 'select',
    description:
      'The background color the button appears on.\n _Note: this is not a prop of the `IconButton` component, just a representation of the `IconButton` component for the Storybook playground._',
  },
};

IconButtonPlaygroundVariants.args = {
  size: 'medium',
  colorScheme: 'cyan',
  icon: 'ChevronRightMediumIcon',
  loading: false,
  disabled: false,
  inverted: false,
  _backgroundColor: 'default',
};

export default IconButtonPlaygroundVariants;
