import {
  VStack,
  Text,
  IconButton,
  IconButtonIcon,
  ButtonGroup,
  Box,
  useMedia,
} from '@utilitywarehouse/native-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<typeof IconButton> {}
interface ButtonVariantsProps {
  colorScheme: ButtonProps['colorScheme'];
}

const ButtonVariants: React.FC<ButtonVariantsProps> = ({ colorScheme }) => {
  const validScheme = colorScheme === 'cyan' || colorScheme === 'red' || colorScheme === 'green';
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const { sm, xs, base } = useMedia();
  const isMobile = base || xs || sm;

  return (
    <VStack space="2xl">
      <Box
        sx={
          validScheme
            ? undefined
            : {
                opacity: 0,
                display: isMobile ? 'none' : 'flex',
                _web: {
                  pointerEvents: 'none',
                },
              }
        }
      >
        <Text size="lg">Solid - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton variant="solid" colorScheme={colorScheme}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Pressed</Text>
          <IconButton variant="solid" colorScheme={colorScheme} isPressed={true}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Disabled</Text>
          <IconButton variant="solid" colorScheme={colorScheme} isPressed={true} isDisabled={true}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Outline - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton variant="outline" colorScheme={colorScheme}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Pressed</Text>
          <IconButton variant="outline" colorScheme={colorScheme} isPressed={true}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Disabled</Text>
          <IconButton
            variant="outline"
            colorScheme={colorScheme}
            isPressed={true}
            isDisabled={true}
          >
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Ghost - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <IconButton variant="ghost" colorScheme={colorScheme}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Pressed</Text>
          <IconButton variant="ghost" colorScheme={colorScheme} isPressed={true}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
          <Text size="sm">Disabled</Text>
          <IconButton variant="ghost" colorScheme={colorScheme} isPressed={true} isDisabled={true}>
            <IconButtonIcon as={ChevronRightMediumIcon} />
          </IconButton>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
