import React, { forwardRef, useMemo } from 'react';
import type ListItemProps from './ListItem.props';
import { ChevronRight01MediumIcon } from '@utilitywarehouse/react-native-icons';
import { Skeleton } from '../../Skeleton';
import { useListContext } from '../List.context';
import { StyleSheet } from 'react-native-unistyles';
import { Pressable, ViewStyle } from 'react-native';
import { IListItemContext, ListItemContext } from './ListItem.context';
import type { PressableRef } from '../../../types';
import ListItemContent from './ListItemContent';
import ListItemLeadingContent from './ListItemLeadingContent';
import ListItemText from './ListItemText';
import ListItemSupportingText from './ListItemSupportingText';
import ListItemTrailingContent from './ListItemTrailingContent';
import ListItemTrailingIcon from './ListItemTrailingIcon';
import { Divider } from '../../Divider';

const ListItemRoot = forwardRef<
  PressableRef,
  ListItemProps & { states?: { active?: boolean; disabled?: boolean } }
>(
  (
    {
      text,
      supportingText,
      leadingContent,
      trailingContent,
      disabled,
      divider,
      dividerColor,
      loading,
      children,
      states,
      ...props
    },
    ref
  ) => {
    const { onPress } = props;
    const listContext = useListContext();
    const { active } = states || { active: false };

    const isLoading = loading || listContext?.loading;
    const showPressed = isLoading ? false : !!onPress;
    const showDivider = listContext?.divider ?? divider;
    const isDisabled = disabled || listContext?.disabled || false;
    const dividerColorValue = dividerColor ?? listContext?.dividerColor;

    styles.useVariants({ showPressed, active, disabled: isDisabled || isLoading });

    const value: IListItemContext = useMemo(() => {
      return {
        showPressed,
        divider: showDivider,
        active,
        loading: isLoading,
        disabled: isDisabled,
      };
    }, [active, showPressed, showDivider, isLoading, isDisabled]);

    if (loading || listContext?.loading) {
      return (
        <Pressable
          ref={ref}
          {...props}
          style={[styles.container, props.style as ViewStyle]}
          disabled={isDisabled}
        >
          {leadingContent ? <Skeleton width={24} height={24} /> : null}
          <ListItemContent>
            <Skeleton
              width="80%"
              height={20}
              backgroundColor="$grey100"
              $dark-backgroundColor="$darkGrey400"
            />
            <Skeleton width="100%" height={16} />
          </ListItemContent>
          {onPress || trailingContent ? <Skeleton width={24} height={24} /> : null}
        </Pressable>
      );
    }

    return (
      <ListItemContext.Provider value={value}>
        <Pressable
          ref={ref}
          {...props}
          style={[styles.container, props.style as ViewStyle]}
          disabled={isDisabled}
        >
          {children ? (
            children
          ) : (
            <>
              {leadingContent ? (
                <ListItemLeadingContent>{leadingContent}</ListItemLeadingContent>
              ) : null}
              <ListItemContent>
                <ListItemText>{text}</ListItemText>
                {supportingText ? (
                  <ListItemSupportingText>{supportingText}</ListItemSupportingText>
                ) : null}
              </ListItemContent>
              {trailingContent ? (
                <ListItemTrailingContent>{trailingContent}</ListItemTrailingContent>
              ) : !!onPress ? (
                <ListItemTrailingContent>
                  <ListItemTrailingIcon as={ChevronRight01MediumIcon} />
                </ListItemTrailingContent>
              ) : null}
            </>
          )}
        </Pressable>
        {showDivider && <Divider color={dividerColorValue} />}
      </ListItemContext.Provider>
    );
  }
);

ListItemRoot.displayName = 'ListItemRoot';

const styles = StyleSheet.create(theme => ({
  container: {
    padding: theme.space[4],
    flexDirection: 'row',
    gap: theme.space[3],
    variants: {
      showPressed: {
        true: {},
        false: {
          cursor: 'auto',
        },
      },
      active: {
        true: {},
        false: {},
      },
      disabled: {
        true: {
          cursor: 'auto',
        },
        false: {},
      },
    },
    compoundVariants: [
      {
        showPressed: true,
        active: true,
        styles: {
          backgroundColor: theme.colorMode === 'light' ? theme.colors.grey75 : theme.colors.grey150,
        },
      },
    ],
  },
}));

export default ListItemRoot;
