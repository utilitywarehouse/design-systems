import { VStack, Text, IconButton, ButtonGroup, Box } from '@utilitywarehouse/native-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import React, { ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<typeof IconButton> {}
interface IconButtonVariantsProps {
  colorScheme: IconButtonProps['colorScheme'];
  size: IconButtonProps['size'];
}

const ButtonVariants: React.FC<IconButtonVariantsProps> = ({ colorScheme, size }) => {
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');

  return (
    <VStack space="2xl">
      <Box>
        <Text size="lg">Solid - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="solid"
            colorScheme={colorScheme}
            size={size}
          />
          <Text size="sm">Pressed</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="solid"
            colorScheme={colorScheme}
            isPressed={true}
            size={size}
          />
          <Text size="sm">Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="solid"
            colorScheme={colorScheme}
            size={size}
            loading={true}
          />
          <Text size="sm">Disabled</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="solid"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
          />
          <Text size="sm">Disabled Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="solid"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
            loading={true}
          />
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Outline - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="outline"
            colorScheme={colorScheme}
            size={size}
          />

          <Text size="sm">Pressed</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="outline"
            colorScheme={colorScheme}
            isPressed={true}
            size={size}
          />
          <Text size="sm">Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="outline"
            colorScheme={colorScheme}
            size={size}
            loading={true}
          />
          <Text size="sm">Disabled</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="outline"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
          />
          <Text size="sm">Disabled Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="outline"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
            loading={true}
          />
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Ghost - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="ghost"
            colorScheme={colorScheme}
            size={size}
          />
          <Text size="sm">Pressed</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="ghost"
            colorScheme={colorScheme}
            isPressed={true}
            size={size}
          />
          <Text size="sm">Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="ghost"
            colorScheme={colorScheme}
            size={size}
            loading={true}
          />
          <Text size="sm">Disabled</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="ghost"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
          />
          <Text size="sm">Disabled Loading</Text>
          <IconButton
            icon={ChevronRightMediumIcon}
            variant="ghost"
            colorScheme={colorScheme}
            isDisabled={true}
            size={size}
            loading={true}
          />
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
