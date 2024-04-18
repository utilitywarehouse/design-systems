import {
  VStack,
  Text,
  Button,
  ButtonIcon,
  ButtonGroup,
  ButtonSpinner,
  ButtonText,
  Box,
  useMedia,
} from '@utilitywarehouse/native-ui';
import {
  AddSmallIcon,
  ChevronLeft01SmallIcon,
  ChevronRight01SmallIcon,
} from '@utilitywarehouse/react-native-icons';
import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<typeof Button> {}
interface ButtonVariantsProps {
  colorScheme: ButtonProps['colorScheme'];
  size: ButtonProps['size'];
}

const ButtonVariants: React.FC<ButtonVariantsProps> = ({ colorScheme, size }) => {
  const validScheme = colorScheme === 'cyan' || colorScheme === 'red' || colorScheme === 'green';
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const { sm, base } = useMedia();

  return (
    <VStack space="2xl">
      <Box
        sx={
          validScheme
            ? undefined
            : {
                opacity: 0,
                display: base || sm ? 'none' : 'flex',
                _web: {
                  pointerEvents: 'none',
                },
              }
        }
      >
        <Text size="lg">Solid - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Hovered</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isHovered>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Pressed</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isPressed>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Focus Visible</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isFocusVisible>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled Icon Left</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Left</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Right</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Icon Left & Right</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Loading</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled & Loading</Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Outline - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text size="sm">Default</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Hovered</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isHovered>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Pressed</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isPressed>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Focus Visible</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isFocusVisible>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled Icon Left</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Left</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Right</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Icon Left & Right</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Loading</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled & Loading</Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Text size="lg">Ghost - {capitalisedScheme}</Text>
        <ButtonGroup flexDirection="column" space="md" sx={{ mb: '$4' }}>
          <Text size="sm">Default</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Hovered</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isHovered>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Pressed</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isPressed>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Focus Visible</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isFocusVisible>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled Icon Left</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Left</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Icon Right</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Icon Left & Right</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text size="sm">Loading</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text size="sm">Disabled & Loading</Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} isDisabled>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
