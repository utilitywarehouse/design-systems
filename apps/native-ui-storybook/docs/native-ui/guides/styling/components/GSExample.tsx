import React from 'react';
import {
  Box,
  ButtonText,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from '@utilitywarehouse/native-ui';

function Example() {
  return (
    <Box bg="#550091" py="$4" px="$3" rounded="$lg" height={132} width={420} maxWidth="100%">
      <HStack justifyContent="space-between" height="100%">
        <Box justifyContent="space-between">
          <VStack space="xs">
            <Text fontSize="$sm" color="$white">
              Uswitch Energy Awards 2023
            </Text>
            <Text color="$white" fontSize="$xl">
              Over a million reasons to join
            </Text>
          </VStack>
          <Pressable rounded="$lg" bg="#75a7fd" alignSelf="flex-start" py="$1" px="$3">
            <ButtonText textTransform="uppercase" fontSize="$sm" fontWeight="$bold" color="$white">
              Remind me
            </ButtonText>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: 'https://d1pverny9k19rc.cloudfront.net/attachments/cl0rw8sf30lxt0qczvzte5r51-snappr-day3-ben-running-0221.jpg',
          }}
          alt="Aang flying and surrounded by clouds"
          height={100}
          rounded="$full"
          width={100}
        />
      </HStack>
    </Box>
  );
}

export default Example;
