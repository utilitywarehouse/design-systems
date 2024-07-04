import React from 'react';
import { Box, Center, Text, VStack } from '@utilitywarehouse/native-ui';

const TextWrap = ({ title, children }: any) => (
  <Box gap="$2">
    <Text textTransform="uppercase" size="xs" highlight color="$grey600">
      {title}
    </Text>
    {children}
  </Box>
);

const TextBasic = () => {
  return (
    <VStack gap="$6">
      <TextWrap title="Default - Body / Medium">
        <Text>Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter</Text>
      </TextWrap>
      <TextWrap title="Default - Body / Medium - Strikethrough">
        <Text strikeThrough>
          Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
        </Text>
      </TextWrap>
      <TextWrap title="Default - Body / Medium - Highlight">
        <Text highlight>
          Work Sans - Semi Bold (600), 16px Size / 24px Line height / 0px Letter
        </Text>
      </TextWrap>
      <TextWrap title="Body Small">
        <Text size="sm">Work Sans - Regular (400), 14px Size / 16px Line height / 0px Letter</Text>
      </TextWrap>
      <TextWrap title="Body Small - Highlighted">
        <Text size="sm" highlight>
          Work Sans - Semi Bold (600), 14px Size / 16px Line height / 0px Letter
        </Text>
      </TextWrap>
      <TextWrap title="Body X-Small">
        <Text size="xs">Work Sans - Regular (400), 12px Size / 16px Line height / 0px Letter</Text>
      </TextWrap>
    </VStack>
  );
};

export default TextBasic;

export { Text, Center };
