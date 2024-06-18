import React from 'react';
import {
  Box,
  Input,
  InputField,
  FormField,
  FormFieldHelper,
  FormFieldHelperText,
  FormFieldLabel,
  FormFieldLabelText,
  FormFieldInvalidIcon,
  FormFieldInvalid,
  FormFieldInvalidText,
  FormFieldValidIcon,
  FormFieldValid,
  FormFieldValidText,
  ScrollView,
  Text,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';

const InputVariants: StoryFn = () => {
  return (
    <ScrollView>
      <Box gap={8}>
        <Text mt="$4" mb="$2">
          Defaut
        </Text>
        <FormField>
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <Input>
            <InputField />
          </Input>
        </FormField>
        <Text mt="$4" mb="$2">
          With helper text bottom
        </Text>
        <FormField>
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <Input>
            <InputField />
          </Input>
          <FormFieldHelper>
            <FormFieldHelperText>Helper text</FormFieldHelperText>
          </FormFieldHelper>
        </FormField>
        <Text mt="$4" mb="$2">
          With helper text top
        </Text>
        <FormField>
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <FormFieldHelper>
            <FormFieldHelperText>Helper text</FormFieldHelperText>
          </FormFieldHelper>
          <Input>
            <InputField />
          </Input>
        </FormField>
        <Text mt="$4" mb="$2">
          Valid with valid text
        </Text>
        <FormField validationStatus="valid">
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <FormFieldHelper>
            <FormFieldHelperText>Helper text</FormFieldHelperText>
          </FormFieldHelper>
          <Input>
            <InputField />
          </Input>
          <FormFieldValid>
            <FormFieldValidIcon />
            <FormFieldValidText>Valid form field text</FormFieldValidText>
          </FormFieldValid>
        </FormField>
        <Text mt="$4" mb="$2">
          Invalid with invalid text
        </Text>
        <FormField validationStatus="invalid">
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <FormFieldHelper>
            <FormFieldHelperText>Helper text</FormFieldHelperText>
          </FormFieldHelper>
          <Input>
            <InputField />
          </Input>
          <FormFieldInvalid>
            <FormFieldInvalidIcon />
            <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
          </FormFieldInvalid>
        </FormField>
        <Text mt="$4" mb="$2">
          Disabled
        </Text>
        <FormField isDisabled>
          <FormFieldLabel>
            <FormFieldLabelText>Label</FormFieldLabelText>
          </FormFieldLabel>
          <Input>
            <InputField />
          </Input>
          <FormFieldHelper>
            <FormFieldHelperText>Helper text</FormFieldHelperText>
          </FormFieldHelper>
        </FormField>
      </Box>
    </ScrollView>
  );
};

export default InputVariants;
