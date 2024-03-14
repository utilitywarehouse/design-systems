import React from 'react';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, VStack } from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

const RadioGroupBasic = () => {
  const [values, setValues] = React.useState('Label 1');

  return (
    <VStack gap="$4">
      <RadioGroup
        aria-label="Radio Group"
        value={values}
        onChange={setValues}
        nativeID="Radio-group"
      >
        <Radio
          value="Label 1"
          aria-label="Label 1"
          onChange={(isChecked: boolean) => {
            console.log(isChecked, '###');
          }}
          nativeID="Radio-1"
        >
          <RadioIndicator />
          <RadioLabel>Option 1</RadioLabel>
        </Radio>
        <Radio
          value="Label 2"
          aria-label="Label 2"
          onChange={(isChecked: boolean) => {
            console.log(isChecked, '###');
          }}
          nativeID="Radio-2"
        >
          <RadioIndicator />
          <RadioLabel>Option 2</RadioLabel>
        </Radio>
      </RadioGroup>
      <RadioGroup
        aria-label="Radio Group"
        value={values}
        onChange={setValues}
        nativeID="Radio-group"
        isDisabled
      >
        <Radio
          aria-label="Label 3"
          value="Label 1"
          isDisabled
          onChange={(isChecked: boolean) => console.log(isChecked, '###')}
          nativeID="Radio-3"
        >
          <RadioIndicator />
          <RadioLabel>Option 1</RadioLabel>
        </Radio>
        <Radio
          aria-label="Label 4"
          value="Label 4"
          isDisabled
          onChange={(isChecked: boolean) => console.log(isChecked, '###')}
          nativeID="Radio-4"
        >
          <RadioIndicator />
          <RadioLabel>Option 2</RadioLabel>
        </Radio>
      </RadioGroup>
    </VStack>
  );
};

RadioGroupBasic.description = 'This is a basic Radio component example';

export default RadioGroupBasic;

export { TickSmallIcon, Radio, RadioGroup, RadioIndicator, RadioLabel };
