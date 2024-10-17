import React from 'react';
import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  ScrollView,
  VStack,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';
import { VariantTitle } from '../../docs/components';

const InputVariants: StoryFn = () => {
  return (
    <ScrollView>
      <VStack gap="$4">
        <VariantTitle title="Default">
          <Input>
            <InputField />
          </Input>
        </VariantTitle>
        <VariantTitle title="With icon">
          <Input>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField />
          </Input>
        </VariantTitle>
        <VariantTitle title="With placeholder">
          <Input>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="With value">
          <Input>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" value="filling the value" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Focused">
          <Input focused>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" value="filling the value" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Type password">
          <Input>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" value="filling the value" type="password" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Valid">
          <Input validationStatus="valid">
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Valid focused">
          <Input validationStatus="valid" focused>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Invalid">
          <Input validationStatus="invalid">
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Invalid focused">
          <Input validationStatus="invalid" focused>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Disabled">
          <Input disabled>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" />
          </Input>
        </VariantTitle>
        <VariantTitle title="Readonly">
          <Input readonly>
            <InputSlot>
              <InputIcon as={EmailMediumIcon} />
            </InputSlot>
            <InputField placeholder="Input placeholder" readOnly />
          </Input>
        </VariantTitle>
      </VStack>
    </ScrollView>
  );
};

export default InputVariants;
