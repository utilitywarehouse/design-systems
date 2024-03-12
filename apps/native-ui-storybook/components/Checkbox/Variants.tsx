import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

const CheckboxGroupBasic = () => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <CheckboxGroup
      aria-label="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
    >
      <Checkbox
        value="Label 1"
        aria-label="Label 1"
        onChange={(isSelected: boolean) => {
          console.log(isSelected, '###');
        }}
        nativeID="checkbox-1"
      />
      <Checkbox
        value="Label 2"
        aria-label="Label 2"
        onChange={(isSelected: boolean) => {
          console.log(isSelected, '###');
        }}
        nativeID="checkbox-2"
        label="Label 1"
      />
      <Checkbox
        aria-label="Label 3"
        value="Label 3"
        isDisabled
        isChecked
        onChange={(isSelected: boolean) => console.log(isSelected, '###')}
        nativeID="checkbox-3"
      />
      <Checkbox
        aria-label="Label 4"
        value="Label 4"
        isDisabled
        onChange={(isSelected: boolean) => console.log(isSelected, '###')}
        nativeID="checkbox-4"
        label="Label 2"
      />
    </CheckboxGroup>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export { TickSmallIcon, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel };
