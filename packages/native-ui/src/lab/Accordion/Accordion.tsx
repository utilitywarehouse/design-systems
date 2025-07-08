import { createAccordion } from '@gluestack-ui/accordion';
import { ChevronDownMediumIcon, ChevronUpMediumIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';
import { AccordionProps } from './Accordion.props';
import AccordionContentComponent from './AccordionContent';
import AccordionContentTextComponent from './AccordionContentText';
import AccordionHeaderComponent from './AccordionHeader';
import AccordionIconComponent from './AccordionIcon';
import { AccordionItemProps } from './AccordionItem.props';
import AccordionItemRoot from './AccordionItemRoot';
import AccordionRoot from './AccordionRoot';
import AccordionTitleTextComponent from './AccordionTitleText';
import AccordionTriggerComponent from './AccordionTrigger';

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

const Accordion = ({
  children,
  collapsible,
  type = 'multiple',
  divider = true,
  ...props
}: AccordionProps) => (
  <AccordionComponent
    isDisabled={props.disabled}
    isCollapsible={collapsible}
    type={type}
    divider={divider}
    contentNoPadding={props.contentNoPadding}
    {...props}
  >
    {/* @ts-expect-error - children types */}
    {children}
  </AccordionComponent>
);

export const AccordionItem = ({
  children,
  value,
  title,
  expanded,
  testID,
  ...props
}: AccordionItemProps) => {
  if (!children) {
    return null;
  }

  const processedChildren = React.Children.toArray(children);
  const hasContentComponent = processedChildren.some(
    // @ts-expect-error - type
    child => React.isValidElement(child) && child.type.displayName === 'AccordionContent'
  );

  return (
    <AccordionItemComponent
      value={value ?? Math.random().toString()}
      title={title}
      isDisabled={props.disabled}
      {...props}
    >
      {hasContentComponent ? (
        children
      ) : (
        <>
          <AccordionHeader>
            <AccordionTrigger isExpanded={expanded} testID={testID}>
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
        </>
      )}
    </AccordionItemComponent>
  );
};

AccordionItem.displayName = 'AccordionItem';
Accordion.displayName = 'Accordion';
AccordionHeader.displayName = 'AccordionHeader';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
AccordionContentText.displayName = 'AccordionContentText';
AccordionIcon.displayName = 'AccordionIcon';
AccordionTitleText.displayName = 'AccordionTitleText';

export default Accordion;
