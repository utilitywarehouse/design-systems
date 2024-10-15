import React from 'react';
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  VStack,
} from '@utilitywarehouse/native-ui';
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
            onChange={(checked: boolean) => {
              console.log(checked, '###');
            }}
            nativeID="Radio-1"
          >
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
            <RadioLabel>Option 1</RadioLabel>
          </Radio>
          <Radio
            value="Option 2"
            aria-label="Option 2"
            onChange={(checked: boolean) => {
              console.log(checked, '###');
            }}
            nativeID="Radio-2"
          >
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
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
          disabled
        >
          <Radio
            aria-label="Option 3"
            value="Option 1"
            onChange={(checked: boolean) => console.log(checked, '###')}
            nativeID="Radio-3"
          >
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
            <RadioLabel>Option 1</RadioLabel>
          </Radio>
          <Radio
            aria-label="Option 4"
            value="Option 2"
            onChange={(checked: boolean) => console.log(checked, '###')}
            nativeID="Radio-4"
          >
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
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
