import React from 'react';
import {
  Input,
  InputField,
  FormField,
  FormFieldHelper,
  FormFieldHelperText,
  FormFieldLabel,
  FormFieldLabelText,
  FormFieldInvalid,
  FormFieldInvalidText,
  FormFieldValid,
  FormFieldValidText,
  ScrollView,
  VStack,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { VariantTitle } from '../../docs/components';

const InputVariants: StoryFn = () => {
  return (
    <ScrollView>
      <VStack space="lg">
        <VariantTitle title="Default">
          <FormField>
            <FormFieldLabel>
              <FormFieldLabelText>Label</FormFieldLabelText>
            </FormFieldLabel>
            <Input>
              <InputField />
            </Input>
          </FormField>
        </VariantTitle>
        <VariantTitle title="With helper text bottom">
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
        </VariantTitle>
        <VariantTitle title="With helper text top">
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
        </VariantTitle>
        <VariantTitle title="Valid with valid text">
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
              <FormFieldValidText>Valid form field text</FormFieldValidText>
            </FormFieldValid>
          </FormField>
        </VariantTitle>
        <VariantTitle title="Invalid with invalid text">
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
              <FormFieldInvalidText>Invalid form field text</FormFieldInvalidText>
            </FormFieldInvalid>
          </FormField>
        </VariantTitle>
        <VariantTitle title="Disabled">
          <FormField disabled>
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
        </VariantTitle>
      </VStack>
    </ScrollView>
  );
};

export default InputVariants;
