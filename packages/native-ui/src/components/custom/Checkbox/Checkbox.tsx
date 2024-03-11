import React, { ComponentProps } from 'react';
import {
  CheckboxIcon,
  CheckboxLabel,
  Checkbox as GSCheckbox,
  CheckboxIndicator,
} from '@gluestack-ui/themed';
import AnimatedOutline from '../AnimatedOutline';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

type CheckboxProps = ComponentProps<typeof GSCheckbox> & { label?: string };

const Checkbox: React.FC<CheckboxProps> = props => {
  const [show, setShow] = React.useState(false);

  return props.children ? (
    <GSCheckbox {...props} />
  ) : (
    <GSCheckbox
      {...props}
      onChange={(isSelected: boolean) => {
        setShow(true);
        setTimeout(() => setShow(false), 500);
        props.onChange?.(isSelected);
      }}
    >
      <AnimatedOutline show={show}>
        <CheckboxIndicator>
          <CheckboxIcon as={TickSmallIcon} />
        </CheckboxIndicator>
      </AnimatedOutline>
      {!!props.label && <CheckboxLabel>Label 1</CheckboxLabel>}
    </GSCheckbox>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
