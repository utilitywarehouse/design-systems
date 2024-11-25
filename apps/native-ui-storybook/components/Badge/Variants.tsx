import React from 'react';
import { Badge, VStack, HStack } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { VariantTitle } from '../../docs/components';

const BadgeVariants: StoryFn = () => {
  return (
    <HStack space="sm">
      <VStack space="sm">
        <VariantTitle title="cyan">
          <Badge colorScheme="cyan">Cyan</Badge>
        </VariantTitle>
        <VariantTitle title="gold">
          <Badge colorScheme="gold">Gold</Badge>
        </VariantTitle>
        <VariantTitle title="green">
          <Badge colorScheme="green">Green</Badge>
        </VariantTitle>
        <VariantTitle title="grey">
          <Badge colorScheme="grey">Grey</Badge>
        </VariantTitle>
        <VariantTitle title="red">
          <Badge colorScheme="red">Red</Badge>
        </VariantTitle>
      </VStack>
      <VStack space="sm">
        <VariantTitle title="cyan strong">
          <Badge colorScheme="cyan" strong>
            Cyan Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="gold strong">
          <Badge colorScheme="gold" strong>
            Gold Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="green strong">
          <Badge colorScheme="green" strong>
            Green Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="grey strong">
          <Badge colorScheme="grey" strong>
            Grey Strong
          </Badge>
        </VariantTitle>
        <VariantTitle title="red strong">
          <Badge colorScheme="red" strong>
            Red Strong
          </Badge>
        </VariantTitle>
      </VStack>
    </HStack>
  );
};

export default BadgeVariants;
