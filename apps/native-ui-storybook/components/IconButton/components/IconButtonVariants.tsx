/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import {
  VStack,
  IconButton,
  ButtonGroup,
  Box,
  Heading,
  useColorMode,
} from '@utilitywarehouse/native-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import React, { ComponentProps } from 'react';
import { VariantTitle } from '../../../docs/components';

interface IconButtonProps extends ComponentProps<typeof IconButton> {}
interface IconButtonVariantsProps {
  colorScheme: IconButtonProps['colorScheme'];
  size: IconButtonProps['size'];
  inverted: IconButtonProps['inverted'];
  _backgroundColor: string;
}

const ButtonVariants: React.FC<IconButtonVariantsProps> = ({
  colorScheme,
  size,
  inverted,
  _backgroundColor,
}) => {
  const colorMode = useColorMode();
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const textColor =
    colorMode === 'light'
      ? _backgroundColor === 'midnight' || _backgroundColor === 'purple'
        ? colorsCommon.brandWhite
        : colors.cyan1000
      : undefined;

  return (
    <VStack space="2xl">
      <Box>
        <Box mb="$2">
          <Heading color={textColor}>Solid - {capitalisedScheme}</Heading>
        </Box>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Default">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="solid"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Pressed">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="solid"
              colorScheme={colorScheme}
              pressed={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Loading">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="solid"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              loading={true}
              disabled={true}
            />
          </VariantTitle>
          <VariantTitle title="Disabled">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="solid"
              colorScheme={colorScheme}
              disabled={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
        </ButtonGroup>
      </Box>
      <Box>
        <Box mb="$2">
          <Heading color={textColor}>Outline - {capitalisedScheme}</Heading>
        </Box>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Default">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="outline"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Pressed">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="outline"
              colorScheme={colorScheme}
              pressed={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Loading">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="outline"
              colorScheme={colorScheme}
              size={size}
              disabled={true}
              inverted={inverted}
              loading={true}
            />
          </VariantTitle>
          <VariantTitle title="Disabled">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="outline"
              colorScheme={colorScheme}
              disabled={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
        </ButtonGroup>
      </Box>
      <Box>
        <Box mb="$2">
          <Heading color={textColor}>Ghost - {capitalisedScheme}</Heading>
        </Box>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Default">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="ghost"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Pressed">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="ghost"
              colorScheme={colorScheme}
              pressed={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Loading">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="ghost"
              colorScheme={colorScheme}
              size={size}
              inverted={inverted}
              loading={true}
              disabled={true}
            />
          </VariantTitle>
          <VariantTitle title="Disabled">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="ghost"
              colorScheme={colorScheme}
              disabled={true}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
        </ButtonGroup>
      </Box>
    </VStack>
  );
};

export default ButtonVariants;
