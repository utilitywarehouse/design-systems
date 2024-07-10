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
  Heading,
} from '@utilitywarehouse/native-ui';
import {
  AddSmallIcon,
  ChevronLeft01SmallIcon,
  ChevronRight01SmallIcon,
} from '@utilitywarehouse/react-native-icons';
import React, { ComponentProps } from 'react';
import { VariantTitle } from '../../../docs/components';

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
        <Heading $light-color={textColor}>Solid - {capitalisedScheme}</Heading>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Default">
            <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Pressed">
            <Button
              variant="solid"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isPressed
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Disabled">
            <Button
              variant="solid"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isDisabled
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Left">
            <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonIcon as={AddSmallIcon} />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Right">
            <Button variant="solid" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
              <ButtonIcon as={ChevronRight01SmallIcon} />
            </Button>
          </VariantTitle>
          <VariantTitle title="Loading">
            <Button
              variant="solid"
              isDisabled
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            >
              <ButtonSpinner />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading $light-color={textColor}>Outline - {capitalisedScheme}</Heading>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Default">
            <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Pressed">
            <Button
              variant="outline"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isPressed
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Disabled">
            <Button
              variant="outline"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isDisabled
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Left">
            <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonIcon as={AddSmallIcon} />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Right">
            <Button variant="outline" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
              <ButtonIcon as={ChevronRight01SmallIcon} />
            </Button>
          </VariantTitle>
          <VariantTitle title="Loading">
            <Button
              variant="outline"
              isDisabled
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            >
              <ButtonSpinner />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
        </ButtonGroup>
      </Box>
      <Box>
        <Heading $light-color={textColor}>Ghost - {capitalisedScheme}</Heading>
        <ButtonGroup flexDirection="column" space="md" sx={{ mb: '$4' }}>
          <VariantTitle title="Default">
            <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Pressed">
            <Button
              variant="ghost"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isPressed
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Disabled">
            <Button
              variant="ghost"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              isDisabled
            >
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Left">
            <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonIcon as={AddSmallIcon} />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
          <VariantTitle title="Icon Right">
            <Button variant="ghost" colorScheme={colorScheme} size={size} inverted={inverted}>
              <ButtonText>Example</ButtonText>
              <ButtonIcon as={ChevronRight01SmallIcon} />
            </Button>
          </VariantTitle>
          <VariantTitle title="Loading">
            <Button
              variant="ghost"
              isDisabled
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            >
              <ButtonSpinner />
              <ButtonText>Example</ButtonText>
            </Button>
          </VariantTitle>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
