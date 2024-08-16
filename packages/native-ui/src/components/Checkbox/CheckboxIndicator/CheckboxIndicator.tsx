import React from 'react';
import { CheckboxIcon, CheckboxIndicator as GSCheckboxIndicator } from '@gluestack-ui/themed';
import AnimatedOutline from '../../AnimatedOutline';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';

type CheckboxIndicatorProps = React.ComponentProps<typeof GSCheckboxIndicator>;

const CheckboxIndicator: React.FC<CheckboxIndicatorProps> = props => {
  const [show, setShow] = React.useState(false);

  return (
    <AnimatedOutline show={show}>
      <GSCheckboxIndicator
        {...props}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setTimeout(() => setShow(false), 250)}
        onPointerUp={() => setTimeout(() => setShow(false), 250)}
        onPointerDown={() => setShow(true)}
      >
        <CheckboxIcon as={TickSmallIcon} color="$brandWhite" $dark-color="$darkCyan50" />
      </GSCheckboxIndicator>
    </AnimatedOutline>
  );
};

CheckboxIndicator.displayName = 'CheckboxIndicator';

export default CheckboxIndicator;
