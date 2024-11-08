import React from 'react';

import { Switch, VStack } from '@utilitywarehouse/native-ui';
import { VariantTitle } from '../../docs/components';

const SwitchVariants = () => {
  return (
    <VStack space="sm">
      <VariantTitle title="Off - 32">
        <Switch value={false} />
      </VariantTitle>
      <VariantTitle title="On - 32">
        <Switch value={true} />
      </VariantTitle>
      <VariantTitle title="Off - 32 - Disabled">
        <Switch value={false} disabled />
      </VariantTitle>
      <VariantTitle title="On - 32 - Disabled">
        <Switch value={true} disabled />
      </VariantTitle>
      <VariantTitle title="Off - 24">
        <Switch value={false} size="24" />
      </VariantTitle>
      <VariantTitle title="On - 24">
        <Switch value={true} size="24" />
      </VariantTitle>
      <VariantTitle title="Off - 24 - Disabled">
        <Switch value={false} size="24" disabled />
      </VariantTitle>
      <VariantTitle title="On - 24 - Disabled">
        <Switch value={true} size="24" disabled />
      </VariantTitle>
    </VStack>
  );
};

export default SwitchVariants;
