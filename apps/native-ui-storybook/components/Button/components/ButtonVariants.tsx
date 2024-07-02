import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
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
  inverted: ButtonProps['inverted'];
  _backgroundColor: string;
}

const ButtonVariants: React.FC<ButtonVariantsProps> = ({
  colorScheme,
  size,
  inverted,
  _backgroundColor,
}) => {
  const validScheme = colorScheme === 'cyan' || colorScheme === 'red' || colorScheme === 'green';
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const { sm, xs, base } = useMedia();
  const isMobile = base || xs || sm;

  const textColor =
    _backgroundColor === 'midnight' || _backgroundColor === 'purple'
      ? colorsCommon.brandWhite
      : colors.cyan1000;

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
        <Text $light-color={textColor} size="lg">
          Solid - {capitalisedScheme}
        </Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text $light-color={textColor} size="sm">
            Default
          </Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Pressed
          </Text>
          <Button
            variant="solid"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isPressed
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled
          </Text>
          <Button
            variant="solid"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left
          </Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Right
          </Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left & Right
          </Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Loading
          </Text>
          <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled & Loading
          </Text>
          <Button
            variant="solid"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Text $light-color={textColor} size="lg">
          Outline - {capitalisedScheme}
        </Text>
        <ButtonGroup flexDirection="column" space="md">
          <Text $light-color={textColor} size="sm">
            Default
          </Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Pressed
          </Text>
          <Button
            variant="outline"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isPressed
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled
          </Text>
          <Button
            variant="outline"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left
          </Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Right
          </Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left & Right
          </Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Loading
          </Text>
          <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled & Loading
          </Text>
          <Button
            variant="outline"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
      <Box>
        <Text $light-color={textColor} size="lg">
          Ghost - {capitalisedScheme}
        </Text>
        <ButtonGroup flexDirection="column" space="md" sx={{ mb: '$4' }}>
          <Text $light-color={textColor} size="sm">
            Default
          </Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Pressed
          </Text>
          <Button
            variant="ghost"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isPressed
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled
          </Text>
          <Button
            variant="ghost"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left
          </Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={AddSmallIcon} />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Right
          </Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Icon Left & Right
          </Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonIcon as={ChevronLeft01SmallIcon} />
            <ButtonText>Example</ButtonText>
            <ButtonIcon as={ChevronRight01SmallIcon} />
          </Button>
          <Text $light-color={textColor} size="sm">
            Loading
          </Text>
          <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
          <Text $light-color={textColor} size="sm">
            Disabled & Loading
          </Text>
          <Button
            variant="ghost"
            colorScheme={colorScheme}
            size={size}
            inverted={inverted}
            isDisabled
          >
            <ButtonSpinner />
            <ButtonText>Example</ButtonText>
          </Button>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
