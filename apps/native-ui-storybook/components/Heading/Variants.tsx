import React from 'react';
import { Center, Heading, VStack } from '@utilitywarehouse/native-ui';
import { VariantTitle } from '../../docs/components';

const HeadingBasic = () => {
  return (
    <VStack space="2xl">
      <VariantTitle title="Heading 1">
        <Heading size="h1">Aeonik - Bold (700), 32px Size / 40px Line height / 0px Letter</Heading>
      </VariantTitle>
      <VariantTitle title="Heading 2">
        <Heading size="h2">Aeonik - Bold (700), 28px Size / 32px Line height / 0px Letter</Heading>
      </VariantTitle>
      <VariantTitle title="Heading 3">
        <Heading size="h3">Aeonik - Bold (700), 24px Size / 32px Line height / 0px Letter</Heading>
      </VariantTitle>
      <VariantTitle title="Heading 4">
        <Heading size="h4">Aeonik - Bold (700), 18px Size / 24px Line height / 0px Letter</Heading>
      </VariantTitle>
      <VariantTitle title="Heading 5">
        <Heading size="h5">Aeonik - Bold (700), 16px Size / 20px Line height / 0px Letter</Heading>
      </VariantTitle>
      <VariantTitle title="Heading 6">
        <Heading size="h6">
          Work Sans - Regular (400), 16px Size / 24px Line height / 0px Letter
        </Heading>
      </VariantTitle>
    </VStack>
  );
};

export default HeadingBasic;

export { Heading, Center };
