import React from 'react';
import { View } from 'react-native';
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
} from './';

export const AccordionExample = () => {
  return (
    <View>
      <Accordion>
        <AccordionItem value="a">
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
      </Accordion>
    </View>
  );
};
