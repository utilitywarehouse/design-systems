/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { VStack, IconButton, ButtonGroup, Box, Heading } from '@utilitywarehouse/native-ui';
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
  const capitalisedScheme =
    (colorScheme?.charAt(0).toUpperCase() ?? '') + (colorScheme?.slice(1) ?? '');
  const textColor =
    _backgroundColor === 'midnight' || _backgroundColor === 'purple'
      ? colorsCommon.brandWhite
      : colors.cyan1000;

  return (
    <VStack space="2xl">
      <Box>
        <Heading $light-color={textColor} mb="$2">
          Solid - {capitalisedScheme}
        </Heading>
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
              isPressed={true}
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
        <Heading $light-color={textColor} mb="$2">
          Outline - {capitalisedScheme}
        </Heading>
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
              isPressed={true}
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
        <Heading $light-color={textColor} mb="$2">
          Ghost - {capitalisedScheme}
        </Heading>
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
              isPressed={true}
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
