import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
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
      style={{ gap: 16 }}
    >
      <VariantTitle title="Checkbox">
        <Checkbox
          value="Label 1"
          aria-label="Label 1"
          onChange={(checked: boolean) => {
            console.log(checked, '###');
          }}
          nativeID="checkbox-1"
        >
          <CheckboxIndicator>
            <CheckboxIcon />
          </CheckboxIndicator>
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox with label">
        <Checkbox
          value="Label 2"
          aria-label="Label 2"
          onChange={(checked: boolean) => {
            console.log(checked, '###');
          }}
          nativeID="checkbox-2"
        >
          <CheckboxIndicator>
            <CheckboxIcon />
          </CheckboxIndicator>
          <CheckboxLabel>Label 1</CheckboxLabel>
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox disabled">
        <Checkbox
          aria-label="Label 3"
          value="Label 3"
          disabled
          checked
          onChange={(checked: boolean) => console.log(checked, '###')}
          nativeID="checkbox-3"
        >
          <CheckboxIndicator>
            <CheckboxIcon />
          </CheckboxIndicator>
        </Checkbox>
      </VariantTitle>
      <VariantTitle title="Checkbox disabled with label">
        <Checkbox
          aria-label="Label 4"
          value="Label 4"
          disabled
          onChange={(checked: boolean) => console.log(checked, '###')}
          nativeID="checkbox-4"
        >
          <CheckboxIndicator>
            <CheckboxIcon />
          </CheckboxIndicator>
          <CheckboxLabel>Label 2</CheckboxLabel>
        </Checkbox>
      </VariantTitle>
    </CheckboxGroup>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export { TickSmallIcon, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel };
