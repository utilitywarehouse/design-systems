import React from 'react';
import {
  Textarea,
  TextareaField,
  TextareaIcon,
  TextareaSlot,
  ScrollView,
  VStack,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { EmailMediumIcon } from '@utilitywarehouse/react-native-icons';
import { VariantTitle } from '../../docs/components';

const TextareaVariants: StoryFn = () => {
  return (
    <ScrollView>
      <VStack space="lg">
        <VariantTitle title="Default">
          <Textarea>
            <TextareaField />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="With icon">
          <Textarea>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="With placeholder">
          <Textarea>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="With value">
          <Textarea>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" value="filling the value" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Focused">
          <Textarea focused>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" value="filling the value" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Valid">
          <Textarea validationStatus="valid">
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Valid focused">
          <Textarea validationStatus="valid" focused>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Invalid">
          <Textarea validationStatus="invalid">
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Invalid focused">
          <Textarea validationStatus="invalid" focused>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Disabled">
          <Textarea disabled>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" />
          </Textarea>
        </VariantTitle>
        <VariantTitle title="Readonly">
          <Textarea readonly>
            <TextareaSlot>
              <TextareaIcon as={EmailMediumIcon} />
            </TextareaSlot>
            <TextareaField placeholder="Textarea placeholder" readOnly />
          </Textarea>
        </VariantTitle>
      </VStack>
    </ScrollView>
  );
};

export default TextareaVariants;
