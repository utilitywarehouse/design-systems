import React from 'react';
import ListItemProps from './ListItem.props';
import {
  Root,
  Text,
  SupportingText,
  LeadingContent,
  TrailingContent,
  TrailingIcon,
} from './styled-components';
import { Box, VStack } from '@gluestack-ui/themed';
import { ChevronRight01MediumIcon } from '@utilitywarehouse/react-native-icons';

const ListItem: React.FC<ListItemProps> = ({
  text,
  supportingText,
  leadingContent,
  trailingContent,
  disabled,
  loading,
  children,
  ...props
}) => {
  const { onPress } = props;

  if (loading) {
    return (
      // @ts-expect-error - This is a variant value
      <Root {...props} showPressed={false}>
        {leadingContent ? (
          <Box
            width={24}
            height={24}
            borderRadius="$sm"
            backgroundColor="$grey75"
            $dark-backgroundColor="$darkGrey300"
          />
        ) : null}
        <VStack gap="$1" flex={1}>
          <Box
            width="80%"
            height={20}
            borderRadius="$sm"
            backgroundColor="$grey100"
            $dark-backgroundColor="$darkGrey400"
          />
          <Box
            width="100%"
            height={16}
            borderRadius="$sm"
            backgroundColor="$grey75"
            $dark-backgroundColor="$darkGrey300"
          />
        </VStack>
        {onPress || trailingContent ? (
          <Box
            width={24}
            height={24}
            borderRadius="$sm"
            backgroundColor="$grey75"
            $dark-backgroundColor="$darkGrey300"
          />
        ) : null}
      </Root>
    );
  }

  return (
    // @ts-expect-error - This is a variant value
    <Root {...props} showPressed={!!onPress} disabled={disabled}>
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