import React from 'react';
import { Input, InputField, InputIcon, InputSlot, Pressable } from '../../src';
import {
  EmailMediumIcon,
  EyeMediumIcon,
  EyeOffMediumIcon,
} from '@utilitywarehouse/react-native-icons';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const AdvancedInputExample = () => {
  const [value, setValue] = useState<string>('');
  const [fieldType, setFieldType] = useState<'password' | 'text'>('password');
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };
  const handleToggleFieldType = () => {
    setFieldType(fieldType === 'password' ? 'text' : 'password');
  };
  return (
    <Input>
      <InputSlot>
        <InputIcon as={EmailMediumIcon} />
      </InputSlot>
      <InputField
        onChange={handleChange}
        type={fieldType}
        value={value}
        placeholder="Secret email address"
      />
      <InputSlot>
        <Pressable onPress={handleToggleFieldType}>
          <InputIcon as={fieldType === 'password' ? EyeMediumIcon : EyeOffMediumIcon} />
        </Pressable>
      </InputSlot>
    </Input>
  );
};

export default AdvancedInputExample;
