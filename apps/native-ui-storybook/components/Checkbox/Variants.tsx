import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
} from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { VariantTitle } from '../../docs/components';

const CheckboxGroupBasic = () => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <CheckboxGroup
      aria-label="Checkbox Group"
      value={values}
      onChange={setValues}
      nativeID="checkbox-group"
      gap="$4"
    >
      <VariantTitle title="Checkbox">
        <Checkbox
          value="Label 1"
          aria-label="Label 1"
          onChange={(isChecked: boolean) => {
            console.log(isChecked, '###');
          }}
          nativeID="checkbox-1"
        >
          <CheckboxIndicator />
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox with label">
        <Checkbox
          value="Label 2"
          aria-label="Label 2"
          onChange={(isChecked: boolean) => {
            console.log(isChecked, '###');
          }}
          nativeID="checkbox-2"
        >
          <CheckboxIndicator />
          <CheckboxLabel>Label 1</CheckboxLabel>
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox disabled">
        <Checkbox
          aria-label="Label 3"
          value="Label 3"
          isDisabled
          isChecked
          onChange={(isChecked: boolean) => console.log(isChecked, '###')}
          nativeID="checkbox-3"
        >
          <CheckboxIndicator />
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox disabled with label">
        <Checkbox
          aria-label="Label 4"
          value="Label 4"
          isDisabled
          onChange={(isChecked: boolean) => console.log(isChecked, '###')}
          nativeID="checkbox-4"
        >
          <CheckboxIndicator />
          <CheckboxLabel>Label 2</CheckboxLabel>
        </Checkbox>
      </VariantTitle>
    </CheckboxGroup>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export { TickSmallIcon, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel };
