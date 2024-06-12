import React from 'react';
import { RadioIcon, RadioIndicator as GSRadioIndicator, CircleIcon } from '@gluestack-ui/themed';
import AnimatedOutline from '../AnimatedOutline';

type RadioIndicatorProps = React.ComponentProps<typeof GSRadioIndicator>;

const RadioIndicator: React.FC<RadioIndicatorProps> = props => {
  const [show, setShow] = React.useState(false);

  return (
    <AnimatedOutline show={show}>
      <GSRadioIndicator
        {...props}
        onTouchStart={() => setShow(true)}
        onTouchEnd={() => setTimeout(() => setShow(false), 250)}
        onPointerUp={() => setTimeout(() => setShow(false), 250)}
        onPointerDown={() => setShow(true)}
      >
        {props.children ? props.children : <RadioIcon as={CircleIcon} />}
      </GSRadioIndicator>
    </AnimatedOutline>
  );
};

RadioIndicator.displayName = 'RadioIndicator';

export default RadioIndicator;
