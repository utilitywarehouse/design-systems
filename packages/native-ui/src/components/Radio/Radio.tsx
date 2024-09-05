import React from 'react';
import { createRadio } from '@gluestack-ui/radio';
import { useRadioContext } from '@gluestack-ui/radio/src/context';
import { ComponentProps } from 'react';
import { Text, View } from 'react-native';

// @ts-ignore
const RadioUI = props => {
  console.log('RadioUI props', props);
  return (
    <View {...props}>
      <Text>Hello</Text>
    </View>
  );
};

const Radio = createRadio({
  Root: RadioUI,
  Group: View,
  Indicator: View,
  Icon: View,
  Label: Text,
});

Radio.displayName = 'Radio';
Radio.Group.displayName = 'RadioGroup';
Radio.Indicator.displayName = 'RadioIndicator';
Radio.Icon.displayName = 'RadioIcon';
Radio.Label.displayName = 'RadioLabel';

const RadioGroup = Radio.Group;
const RadioIndicator = Radio.Indicator;
const RadioIcon = Radio.Icon;
const RadioLabel = Radio.Label;

export { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel };

export default Radio;
