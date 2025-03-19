import React from 'react';
import { ChevronUpMediumIcon, ChevronDownMediumIcon } from '@utilitywarehouse/react-native-icons';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@utilitywarehouse/native-ui/lab';
import { Meta, StoryFn } from '@storybook/react';
import { Text } from '@utilitywarehouse/native-ui/components';

const AccordionMeta: Meta<typeof Accordion> = {
  title: 'Native UI / Components / Lab / Accordion',
  component: Accordion,
};

export const Playground: StoryFn = args => {
  return (
    <Accordion {...args}>
      <AccordionItem value="a" title="How do I place an order?">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>How do I place an order?</AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpMediumIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownMediumIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>What payment methods do you accept?</AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpMediumIcon} />
                  ) : (
                    <AccordionIcon as={ChevronDownMediumIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, PayPal, and bank transfers.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem title="What is your return policy?">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptatibus.
        </Text>
      </AccordionItem>
    </Accordion>
  );
};

Playground.argTypes = {
  collapsible: {
    control: 'boolean',
    description: 'Whether the accordion can be collapsed',
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the accordion is disabled',
  },
  type: {
    control: 'select',
    options: ['single', 'multiple'],
    description: 'The type of accordion',
  },
  divider: {
    control: 'boolean',
    description: 'Whether the accordion has a divider',
  },
  noPadding: {
    control: 'boolean',
    description: 'Whether the accordion has no horizontal padding',
  },
  contentNoPadding: {
    control: 'boolean',
    description: 'Whether the accordion content has no padding',
  },
};

Playground.args = {
  collapsible: true,
  disabled: false,
  type: 'multiple',
  divider: true,
  noPadding: false,
  contentNoPadding: false,
};

export default AccordionMeta;
