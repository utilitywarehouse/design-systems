import React from 'react';
import { Root, TrailingIcon } from './styled-components';
import ListItemProps from './ListItem.props';
import { Text, SupportingText, LeadingContent, TrailingContent } from './styled-components';
import { VStack } from '@gluestack-ui/themed';
import { ChevronRight01MediumIcon } from '@utilitywarehouse/react-native-icons';

const ListItem: React.FC<ListItemProps> = ({
  text,
  supportingText,
  leadingContent,
  trailingContent,
  children,
  ...props
}) => {
  const { onPress } = props;
  return (
    // @ts-expect-error - This is a variant value
    <Root {...props} showPressed={!!onPress}>
      {children ? (
        <>{children}</>
      ) : (
        <>
          {leadingContent ? <LeadingContent>{leadingContent}</LeadingContent> : null}
          <VStack gap="$1" flex={1}>
            <Text>{text}</Text>
            {supportingText ? <SupportingText>{supportingText}</SupportingText> : null}
          </VStack>
          {trailingContent ? (
            <TrailingContent>{trailingContent}</TrailingContent>
          ) : !!onPress ? (
            <TrailingContent>
              <TrailingIcon as={ChevronRight01MediumIcon} />
            </TrailingContent>
          ) : null}
        </>
      )}
    </Root>
  );
};

export default ListItem;
