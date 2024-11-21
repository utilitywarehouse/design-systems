import React from 'react';

import { Switch, VStack } from '@utilitywarehouse/native-ui';
import { VariantTitle } from '../../docs/components';

const SwitchVariants = () => {
  return (
    <VStack space="sm">
      <VariantTitle title="Off - medium">
        <Switch value={false} />
      </VariantTitle>
      <VariantTitle title="On - medium">
        <Switch value={true} />
      </VariantTitle>
      <VariantTitle title="Off - medium - Disabled">
        <Switch value={false} disabled />
      </VariantTitle>
      <VariantTitle title="On - medium - Disabled">
        <Switch value={true} disabled />
      </VariantTitle>
      <VariantTitle title="Off - small">
        <Switch value={false} size="small" />
      </VariantTitle>
      <VariantTitle title="On - small">
        <Switch value={true} size="small" />
      </VariantTitle>
      <VariantTitle title="Off - small - Disabled">
        <Switch value={false} size="small" disabled />
      </VariantTitle>
      <VariantTitle title="On - small - Disabled">
        <Switch value={true} size="small" disabled />
      </VariantTitle>
    </VStack>
  );
};

export default SwitchVariants;
