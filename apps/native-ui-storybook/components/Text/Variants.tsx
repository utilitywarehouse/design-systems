import React from 'react';
import { Center, Text, VStack } from '@utilitywarehouse/native-ui';
import { VariantTitle } from '../../docs/components';

const TextBasic = () => {
  return (
    <VStack gap="$6">
      <VariantTitle title="Default - Body / Medium">
        <Text>Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter</Text>
      </VariantTitle>
      <VariantTitle title="Default - Body / Medium - Strikethrough">
        <Text strikeThrough>
          Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
        </Text>
      </VariantTitle>
      <VariantTitle title="Default - Body / Medium - Highlight">
        <Text highlight>
          Work Sans - Semi Bold (600), 16px Size / 24px Line height / 0px Letter
        </Text>
      </VariantTitle>
      <VariantTitle title="Body Small">
        <Text size="sm">Work Sans - Regular (400), 14px Size / 16px Line height / 0px Letter</Text>
      </VariantTitle>
      <VariantTitle title="Body Small - Highlighted">
        <Text size="sm" highlight>
          Work Sans - Semi Bold (600), 14px Size / 16px Line height / 0px Letter
        </Text>
      </VariantTitle>
      <VariantTitle title="Body X-Small">
        <Text size="xs">Work Sans - Regular (400), 12px Size / 16px Line height / 0px Letter</Text>
      </VariantTitle>
    </VStack>
  );
};

export default TextBasic;

export { Text, Center };
