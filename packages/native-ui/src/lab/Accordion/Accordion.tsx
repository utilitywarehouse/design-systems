import React, { forwardRef } from 'react';
import { createAccordion } from '@gluestack-ui/accordion';
import AccordionRoot from './AccordionRoot';
import AccordionContentTextComponent from './AccordionContentText';
import AccordionIconComponent from './AccordionIcon';
import AccordionContentComponent from './AccordionContent';
import AccordionHeaderComponent from './AccordionHeader';
import AccordionItemRoot from './AccordionItemRoot';
import AccordionTitleTextComponent from './AccordionTitleText';
import AccordionTriggerComponent from './AccordionTrigger';
import { View } from 'react-native';
import { AccordionProps } from './Accordion.props';
import { AccordionItemProps } from './AccordionItem.props';
import { ChevronDownMediumIcon, ChevronUpMediumIcon } from '@utilitywarehouse/react-native-icons';

const AccordionComponent = createAccordion({
  Root: AccordionRoot,
  ContentText: AccordionContentTextComponent,
  Icon: AccordionIconComponent,
  Content: AccordionContentComponent,
  Header: AccordionHeaderComponent,
  Item: AccordionItemRoot,
  TitleText: AccordionTitleTextComponent,
  Trigger: AccordionTriggerComponent,
});

const AccordionItemComponent = AccordionComponent.Item;
export const AccordionHeader = AccordionComponent.Header;
export const AccordionTrigger = AccordionComponent.Trigger;
export const AccordionContent = AccordionComponent.Content;
export const AccordionContentText = AccordionComponent.ContentText;
export const AccordionIcon = AccordionComponent.Icon;
export const AccordionTitleText = AccordionComponent.TitleText;

const Accordion = forwardRef<View, AccordionProps>(
  ({ children, disabled, collapsible, type }, ref) => {
    return (
      <AccordionComponent ref={ref} isDisabled={disabled} isCollapsible={collapsible} type={type}>
        {children}
      </AccordionComponent>
    );
  }
);

export const AccordionItem = forwardRef<View, AccordionItemProps>(
  ({ children, value, title, expanded }, ref) => {
    return (
      <AccordionItemComponent
        // @ts-expect-error - ref
        ref={ref}
        value={value ?? Math.random().toString()}
        title={title}
      >
        <AccordionHeader>
          <AccordionTrigger isExpanded={expanded}>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>{title}</AccordionTitleText>
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
        <AccordionContent>{children}</AccordionContent>
      </AccordionItemComponent>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';
Accordion.displayName = 'Accordion';
AccordionHeader.displayName = 'AccordionHeader';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
AccordionContentText.displayName = 'AccordionContentText';
AccordionIcon.displayName = 'AccordionIcon';
AccordionTitleText.displayName = 'AccordionTitleText';

export default Accordion;
