import React from 'react';
import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ScrollView,
  Text,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';

const InputVariants: StoryFn = () => {
  return (
    <ScrollView>
      <Box gap={8}>
        <Text>Defaut</Text>
        <Input>
          <InputField />
        </Input>
        <Text>With icon</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField />
        </Input>
        <Text>With placeholder</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>With value</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" />
        </Input>
        <Text>Focused</Text>
        <Input isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" />
        </Input>
        <Text>Type password</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" type="password" />
        </Input>
        <Text>Valid</Text>
        <Input validationStatus="valid">
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Valid focused</Text>
        <Input validationStatus="valid" isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Invalid</Text>
        <Input validationStatus="invalid">
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Invalid focused</Text>
        <Input validationStatus="invalid" isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Disabled</Text>
        <Input isDisabled>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Readonly</Text>
        <Input isReadOnly>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" readOnly />
        </Input>
      </Box>
    </ScrollView>
  );
};

export default InputVariants;
