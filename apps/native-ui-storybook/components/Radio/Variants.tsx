import React from 'react';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, VStack } from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { VariantTitle } from '../../docs/components';

const RadioGroupBasic = () => {
  const [value, setValue] = React.useState('Option 1');

  return (
    <VStack gap="$4">
      <VariantTitle title="Default">
        <RadioGroup
          aria-label="Radio Group"
          value={value}
          onChange={setValue}
          nativeID="Radio-group"
        >
          <Radio
            value="Option 1"
            aria-label="Option 1"
            onChange={(isChecked: boolean) => {
              console.log(isChecked, '###');
            }}
            nativeID="Radio-1"
          >
            <RadioIndicator />
            <RadioLabel>Option 1</RadioLabel>
          </Radio>
          <Radio
            value="Option 2"
            aria-label="Option 2"
            onChange={(isChecked: boolean) => {
              console.log(isChecked, '###');
            }}
            nativeID="Radio-2"
          >
            <RadioIndicator />
            <RadioLabel>Option 2</RadioLabel>
          </Radio>
        </RadioGroup>
      </VariantTitle>
      <VariantTitle title="Disabled">
        <RadioGroup
          aria-label="Radio Group"
          value={value}
          onChange={setValue}
          nativeID="Radio-group"
          isDisabled
        >
          <Radio
            aria-label="Option 3"
            value="Option 1"
            isDisabled
            onChange={(isChecked: boolean) => console.log(isChecked, '###')}
            nativeID="Radio-3"
          >
            <RadioIndicator />
            <RadioLabel>Option 1</RadioLabel>
          </Radio>
          <Radio
            aria-label="Option 4"
            value="Option 2"
            isDisabled
            onChange={(isChecked: boolean) => console.log(isChecked, '###')}
            nativeID="Radio-4"
          >
            <RadioIndicator />
            <RadioLabel>Option 2</RadioLabel>
          </Radio>
        </RadioGroup>
      </VariantTitle>
    </VStack>
  );
};

RadioGroupBasic.description = 'This is a basic Radio component example';

export default RadioGroupBasic;

export { TickSmallIcon, Radio, RadioGroup, RadioIndicator, RadioLabel };
