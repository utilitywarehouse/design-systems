import { Text, Card, VStack, useColorMode } from '@utilitywarehouse/native-ui';
import React from 'react';
import { ScrollWrap, VariantTitle } from '../../docs/components';
import { Box } from '@utilitywarehouse/native-ui/lab';

const CardVaraiants = ({ ...props }) => {
  const colorMode = useColorMode();
  return (
    <Box height={1000} w="100%">
      <ScrollWrap backgroundColor={colorMode === 'light' ? props.surface : ''}>
        <VStack space="lg">
          <VariantTitle title="Dashed - Base">
            <Card {...props} variant="dashed">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Elevated - Base">
            <Card {...props} variant="elevated">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Outline - Base">
            <Card {...props} variant="outline">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Filled - Base">
            <Card {...props} variant="filled">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Dashed - Grey">
            <Card {...props} variant="dashed" colorScheme="grey">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Elevated - Grey">
            <Card {...props} variant="elevated" colorScheme="grey">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Outline - Grey">
            <Card {...props} variant="outline" colorScheme="grey">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Filled - Grey">
            <Card {...props} variant="filled" colorScheme="grey">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Outline - Purple">
            <Card {...props} variant="outline" colorScheme="purple">
              <Text color={props.surface === 'base' ? '$grey1000' : '$white'}>This is a card.</Text>
            </Card>
          </VariantTitle>
          <VariantTitle title="Filled - Purple">
            <Card {...props} variant="filled" colorScheme="purple">
              <Text color="$white">This is a card.</Text>
            </Card>
          </VariantTitle>
        </VStack>
      </ScrollWrap>
    </Box>
  );
};

CardVaraiants.argTypes = {
  surface: {
    control: 'select',
    options: ['base', 'purple'],
    description: 'Use this value to set the Card surface.',
  },
  padding: {
    control: 'select',
    options: ['large', 'medium', 'small', 'none'],
    description: 'Use this value to set the Card padding.',
  },
  nested: {
    control: 'boolean',
    description: 'Use this value to set the Card nested.',
  },
};

CardVaraiants.args = {
  surface: 'base',
  padding: 'large',
  nested: false,
};

export default CardVaraiants;
