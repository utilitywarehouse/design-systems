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
        <Text>Input</Text>
        <Input>
          <InputField />
        </Input>
        <Text>Input with icon</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField />
        </Input>
        <Text>Input with placeholder</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Input with value</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" />
        </Input>
        <Text>Input focused</Text>
        <Input isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" />
        </Input>
        <Text>Input - Password</Text>
        <Input>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" value="filling the value" type="password" />
        </Input>
        <Text>Input valid</Text>
        <Input validationStatus="valid">
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Input valid focused</Text>
        <Input validationStatus="valid" isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Input invalid</Text>
        <Input validationStatus="invalid">
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Input invalid focused</Text>
        <Input validationStatus="invalid" isFocused>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        <Text>Input disabled</Text>
        <Input isDisabled>
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField placeholder="Input placeholder" />
        </Input>
        {/* <Text>Input readonly</Text> TODO: Show example when readonly is supported
        See: https://github.com/gluestack/gluestack-ui/issues/2214
        <Input
          isReadOnly
          sx={{
            ':readOnly': {
              opacity: 0.5,
              borderColor: 'transparent',
              borderBottomColor: 'transparent',
            },
          }}
        >
          <InputSlot>
            <InputIcon as={EmailMediumIcon} />
          </InputSlot>
          <InputField
            placeholder="Input placeholder"
            readOnly
          />
        </Input> */}
      </Box>
    </ScrollView>
  );
};

export default InputVariants;
