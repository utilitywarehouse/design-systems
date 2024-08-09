import {
  Box,
  IconButton,
  List,
  ListHeading,
  ListItem,
  ListItemIcon,
  ListItemTrailingIcon,
} from '@utilitywarehouse/native-ui';
import React from 'react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import _ from 'lodash';

const ListBasic: StoryFn = ({
  _listContainer,
  _headingText,
  _headingSupportingText,
  text,
  supportingText,
  leadingContent: _icon,
  trailingContent: _trailingIcon,
  divider,
  onPress,
  disabled,
  loading,
  _numberOfItems,
}: any) => {
  // @ts-expect-error - This is a playground
  const icon = _icon === 'none' ? undefined : Icons[_icon];
  // @ts-expect-error - This is a playground
  const trailingIcon = _trailingIcon === 'none' ? undefined : Icons[_trailingIcon];
  const handlePress = onPress === 'null' ? undefined : eval(onPress);
  const listItems = Array.from({ length: _numberOfItems }).map((_, index) => (
    <ListItem
      key={index}
      text={text}
      supportingText={supportingText}
      onPress={handlePress}
      leadingContent={icon && <ListItemIcon as={icon} />}
      trailingContent={trailingIcon ? <ListItemTrailingIcon as={trailingIcon} /> : null}
      divider={_listContainer === 'full' ? divider : divider && index !== _numberOfItems - 1}
    />
  ));
  return (
    <List container={_listContainer} disabled={disabled} loading={loading}>
      {_headingText && <ListHeading text={_headingText} supportingText={_headingSupportingText} />}
      {_listContainer === 'card' && (
        <Box borderRadius="$xl" backgroundColor="$grey50" $dark-bg="$darkGrey50">
          {listItems}
        </Box>
      )}
      {_listContainer === 'full' && listItems}
    </List>
  );
};

ListBasic.argTypes = {
  _listContainer: {
    options: ['full', 'card'],
    control: 'select',
    description:
      'The container variant to be displayed on the list. \n _Note: This is a playground prop. Use the container prop on the List component._',
  },
  _headingText: {
    control: 'text',
    description:
      'The heading text to be displayed on the list. \n _Note: This is a playground prop, use title on the ListHeading component._',
  },
  _headingSupportingText: {
    control: 'text',
    description:
      'The heading supporting text to be displayed on the list. \n _Note: This is a playground prop, use supportingText on the ListHeading component._',
  },
  text: {
    control: 'text',
    description: 'The text to be displayed on the list item.',
  },
  supportingText: {
    control: 'text',
    description: 'The supporting text to be displayed on the list item.',
  },
  leadingContent: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The leading content to be displayed on the list item.',
  },
  trailingContent: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Medium'))],
    control: 'select',
    description: 'The trailing content to be displayed on the list item.',
  },
  onPress: {
    options: ["() => console.log('List item pressed')", 'null'],
    control: 'select',
    description: 'The function to be called when the list item is pressed',
  },
  divider: {
    control: 'boolean',
    description: 'Whether to display a divider below the list item.',
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the list item is disabled.',
  },
  loading: {
    control: 'boolean',
    description: 'Whether the list item is in a loading state.',
  },
  _numberOfItems: {
    control: 'number',
    description: 'The number of list items to display. \n _Note: This is a playground prop._',
  },
};

ListBasic.args = {
  _listContainer: 'full',
  _headingText: 'This is the list heading',
  _headingSupportingText: 'Supporting text',
  text: 'List item text',
  supportingText: 'Supporting text',
  leadingContent: 'SettingsMediumIcon',
  trailingContent: 'none',
  divider: true,
  onPress: "() => console.log('List item pressed')",
  disabled: false,
  loading: false,
  _numberOfItems: 4,
};

export default ListBasic;

export { IconButton };
