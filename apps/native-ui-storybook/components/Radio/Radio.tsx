import React from 'react';
import { RadioGroup, Radio, RadioIndicator, RadioLabel } from '@utilitywarehouse/native-ui';

const RadioBasic = ({ isDisabled, _RadioLabel: label }: any) => {
  return (
    <RadioGroup>
      <Radio
        value="Label 1"
        aria-label="Label 1"
        onChange={(isChecked: boolean) => {
          console.log(isChecked, '###');
        }}
        nativeID="Radio-1"
        isDisabled={isDisabled}
      >
        <RadioIndicator />
        {!!label && <RadioLabel>{label}</RadioLabel>}
      </Radio>
    </RadioGroup>
  );
};

RadioBasic.description = 'This is a basic Radio component example';

RadioBasic.argTypes = {
  isDisabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the Radio.',
  },
  _RadioLabel: {
    type: 'string',
    control: 'text',
    description:
      'The label component for the Radio.\n _Note: this is not a prop of the `Radio` component, just a representation of the `RadioLabel` component for the Storybook playground._',
  },
};

RadioBasic.args = {
  isDisabled: false,
  _RadioLabel: '',
};

export default RadioBasic;

export { Radio };
