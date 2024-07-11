import React from 'react';
import { Badge, BadgeText, Box, HStack } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { VariantTitle } from '../../docs/components';

const BadgeBasic: StoryFn = () => {
  return (
    <HStack gap={8}>
      <Box>
        <VariantTitle title="cyan">
          <Badge colorScheme="cyan">
            <BadgeText>Cyan</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="gold">
          <Badge colorScheme="gold">
            <BadgeText>Gold</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="green">
          <Badge colorScheme="green">
            <BadgeText>Green</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="grey">
          <Badge colorScheme="grey">
            <BadgeText>Grey</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="red">
          <Badge colorScheme="red">
            <BadgeText>Red</BadgeText>
          </Badge>
        </VariantTitle>
      </Box>
      <Box>
        <VariantTitle title="cyan strong">
          <Badge colorScheme="cyan" strong>
            <BadgeText>Cyan Strong</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="gold strong">
          <Badge colorScheme="gold" strong>
            <BadgeText>Gold Strong</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="green strong">
          <Badge colorScheme="green" strong>
            <BadgeText>Green Strong</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="grey strong">
          <Badge colorScheme="grey" strong>
            <BadgeText>Grey Strong</BadgeText>
          </Badge>
        </VariantTitle>
        <VariantTitle title="red strong">
          <Badge colorScheme="red" strong>
            <BadgeText>Red Strong</BadgeText>
          </Badge>
        </VariantTitle>
      </Box>
    </HStack>
  );
};

export default BadgeBasic;
