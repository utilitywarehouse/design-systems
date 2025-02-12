/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import {
  VStack,
  Button,
  ButtonIcon,
  ButtonGroup,
  ButtonSpinner,
  ButtonText,
  useMedia,
  Heading,
  useColorMode,
  ButtonProps,
} from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { AddSmallIcon, ChevronRight01SmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';
import { VariantTitle } from '../../../docs/components';

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
  const colorMode = useColorMode();
  const validScheme = colorScheme === 'cyan' || colorScheme === 'red' || colorScheme === 'green';
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile: boolean = base || xs || sm || false;

  const textColor =
    colorMode === 'light'
      ? _backgroundColor === 'midnight' || _backgroundColor === 'purple'
        ? colorsCommon.brandWhite
        : colors.cyan1000
      : undefined;

  return (
    <VStack space="2xl">
      <Box
        {...(validScheme
          ? {}
          : {
              opacity: 0,
              display: isMobile ? 'none' : 'flex',
              pointerEvents: 'none',
            })}
      >
        <Heading color={textColor}>Solid - {capitalisedScheme}</Heading>
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
              pressed
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
              disabled
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
              disabled
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
        <Heading color={textColor}>Outline - {capitalisedScheme}</Heading>
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
              pressed
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
              disabled
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
              disabled
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
      <Box pb="$4">
        <Heading color={textColor}>Ghost - {capitalisedScheme}</Heading>

        <ButtonGroup flexDirection="column" space="md">
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
              pressed
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
              disabled
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
              disabled
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
