import React from 'react';
import { Box, Center, Text, Heading, VStack } from '@utilitywarehouse/native-ui';

const TextWrap = ({ title, children }: any) => (
  <Box gap="$2">
    <Text textTransform="uppercase" size="xs" highlight color="$grey600">
      {title}
    </Text>
    {children}
  </Box>
);

const HeadingBasic = () => {
  return (
    <VStack gap="$6">
      <TextWrap title="Heading 1">
        <Heading size="h1">Aeonik - Bold (700), 32px Size / 40px Line height / 0px Letter</Heading>
      </TextWrap>
      <TextWrap title="Heading 2">
        <Heading size="h2">Aeonik - Bold (700), 28px Size / 32px Line height / 0px Letter</Heading>
      </TextWrap>
      <TextWrap title="Heading 3">
        <Heading size="h3">Aeonik - Bold (700), 24px Size / 32px Line height / 0px Letter</Heading>
      </TextWrap>
      <TextWrap title="Heading 4">
        <Heading size="h4">Aeonik - Bold (700), 18px Size / 24px Line height / 0px Letter</Heading>
      </TextWrap>
      <TextWrap title="Heading 5">
        <Heading size="h5">Aeonik - Bold (700), 16px Size / 20px Line height / 0px Letter</Heading>
      </TextWrap>
      <TextWrap title="Heading 6">
        <Heading size="h6">
          Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
        </Heading>
      </TextWrap>
    </VStack>
  );
};

export default HeadingBasic;

export { Heading, Center };
