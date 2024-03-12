import React, { ComponentProps } from 'react';
import {
  CheckboxIcon,
  CheckboxLabel,
  Checkbox as GSCheckbox,
  CheckboxIndicator,
} from '@gluestack-ui/themed';
import AnimatedOutline from '../AnimatedOutline';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

type CheckboxProps = Omit<
  ComponentProps<typeof GSCheckbox>,
  'onPressIn' | 'onPressOut' | 'onPointerUp' | 'onPointerDown'
> & { label?: string };

const Checkbox: React.FC<CheckboxProps> = props => {
  const { label } = props;
  const [show, setShow] = React.useState(false);

  return props.children ? (
    <GSCheckbox {...props} />
  ) : (
    <GSCheckbox
      {...props}
      onPressIn={() => setShow(true)}
      onPressOut={() => setTimeout(() => setShow(false), 250)}
      onPointerUp={() => setTimeout(() => setShow(false), 250)}
      onPointerDown={() => setShow(true)}
    >
      <AnimatedOutline show={show}>
        <CheckboxIndicator>
          <CheckboxIcon as={TickSmallIcon} />
        </CheckboxIndicator>
      </AnimatedOutline>
      {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
    </GSCheckbox>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
