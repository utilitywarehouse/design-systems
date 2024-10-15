import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemTrailingIcon,
  VStack,
} from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { VariantTitle } from '../../docs/components';
import { SettingsMediumIcon } from '@utilitywarehouse/react-native-icons';
import ScrollWrap from '../../docs/components/ScrollWrap';
import { Platform } from 'react-native';

const ListVariants: StoryFn = () => {
  const list = [
    { text: 'List Item 1', supportingText: 'Supporting Text 1' },
    { text: 'List Item 2', supportingText: 'Supporting Text 2' },
    { text: 'List Item 3', supportingText: 'Supporting Text 3' },
  ];
  const variants = (
    <VStack gap={8} width="100%">
      <VariantTitle title="List with title and supporting text">
        <List headingText="List Heading" headingSupportingText="Supporting Text">
          {list.map((item, index) => (
            <ListItem key={index} text={item.text} supportingText={item.supportingText} />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with leading content">
        <List>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              supportingText={item.supportingText}
              leadingContent={<ListItemIcon as={SettingsMediumIcon} />}
            />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with trailing content">
        <List>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              supportingText={item.supportingText}
              trailingContent={<ListItemTrailingIcon as={SettingsMediumIcon} />}
            />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with pressable items">
        <List>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              onPress={() => console.log('List Item Pressed')}
            />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with divider">
        <List divider>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              onPress={() => console.log('List Item Pressed')}
            />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with disabled items">
        <List disabled>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              supportingText={item.supportingText}
              leadingContent={<ListItemIcon as={SettingsMediumIcon} />}
              onPress={() => console.log('List Item Pressed')}
            />
          ))}
        </List>
      </VariantTitle>
      <VariantTitle title="List with loading items">
        <List loading>
          {list.map((item, index) => (
            <ListItem
              key={index}
              text={item.text}
              supportingText={item.supportingText}
              leadingContent={<ListItemIcon as={SettingsMediumIcon} />}
              onPress={() => console.log('List Item Pressed')}
            />
          ))}
        </List>
      </VariantTitle>
    </VStack>
  );
  return Platform.OS === 'web' ? variants : <ScrollWrap>{variants}</ScrollWrap>;
};

export default ListVariants;
