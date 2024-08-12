import React from 'react';
import type ListItemProps from './ListItem.props';
import {
  Root,
  Text,
  SupportingText,
  LeadingContent,
  TrailingContent,
  TrailingIcon,
  Content,
} from './styled-components';
import { ChevronRight01MediumIcon } from '@utilitywarehouse/react-native-icons';
import { useListContext } from '../List';
import { Skeleton } from '../../Skeleton';

const ListItem: React.FC<ListItemProps> = ({
  text,
  supportingText,
  leadingContent,
  trailingContent,
  disabled,
  divider,
  loading,
  children,
  ...props
}) => {
  const { onPress } = props;
  const listContext = useListContext();

  if (loading || listContext?.loading) {
    return (
      // @ts-expect-error - This is a variant value
      <Root {...props} showPressed={false}>
        {leadingContent ? <Skeleton width={24} height={24} /> : null}
        <Content>
          <Skeleton
            width="80%"
            height={20}
            backgroundColor="$grey100"
            $dark-backgroundColor="$darkGrey400"
          />
          <Skeleton width="100%" height={16} />
        </Content>
        {onPress || trailingContent ? <Skeleton width={24} height={24} /> : null}
      </Root>
    );
  }

  return (
    <Root
      {...props}
      // @ts-expect-error - This is a variant value
      showPressed={!!onPress}
      disabled={disabled || listContext?.disabled}
      divider={listContext?.divider ?? divider}
    >
      {children ? (
        <>{children}</>
      ) : (
        <>
          {leadingContent ? <LeadingContent>{leadingContent}</LeadingContent> : null}
          <Content>
            <Text>{text}</Text>
            {supportingText ? <SupportingText>{supportingText}</SupportingText> : null}
          </Content>
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
