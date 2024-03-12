import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

const CheckboxGroupBasic = ({ ...props }: any) => {
  const [values, setValues] = React.useState(['Label 1']);

  return (
    <>
      <CheckboxGroup
        aria-label="Checkbox Group"
        value={values}
        onChange={setValues}
        nativeID="checkbox-group"
      >
        <Checkbox
          isInvalid={props.isInvalid}
          isIndeterminate
          value="Label 1"
          aria-label="Label 1"
          onChange={(isSelected: boolean) => {
            console.log(isSelected, '###');
          }}
          nativeID="checkbox-1"
          label="Label 1"
        />
        <Checkbox
          isInvalid={props.isInvalid}
          isIndeterminate
          value="Label 11"
          aria-label="Label 11"
          onChange={(isSelected: boolean) => {
            console.log(isSelected, '###');
          }}
          nativeID="checkbox-11"
          label="Label 11"
        />
        <Checkbox
          isInvalid={props.isInvalid}
          aria-label="Label 2"
          value="Label 2"
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          nativeID="checkbox-2"
          gap="$2"
        >
          <CheckboxIndicator>
            <CheckboxIcon as={TickSmallIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Label 2</CheckboxLabel>
        </Checkbox>
        <Checkbox
          isInvalid={props.isInvalid}
          aria-label="Label 3"
          value="Label 3"
          isDisabled
          isChecked
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          nativeID="checkbox-3"
          gap="$2"
        />
        <Checkbox
          isInvalid={props.isInvalid}
          aria-label="Label 4"
          value="Label 4"
          isDisabled
          onChange={(isSelected: boolean) => console.log(isSelected, '###')}
          nativeID="checkbox-4"
          gap="$2"
        >
          <CheckboxIndicator>
            <CheckboxIcon as={TickSmallIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>Label 4</CheckboxLabel>
        </Checkbox>
      </CheckboxGroup>
    </>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export { TickSmallIcon, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel };
