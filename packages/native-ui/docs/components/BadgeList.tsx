import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemLeadingContent,
  ListItemSupportingText,
  ListItemText,
  ListItemTrailingContent,
  ListItemTrailingIcon,
  ListItemContent,
  Badge,
  BadgeText,
  HStack,
  useColorMode,
  Box,
} from '../../src';

import {
  ChevronRight01MediumIcon,
  ElectricityMediumIcon,
  GasMediumIcon,
} from '@utilitywarehouse/react-native-icons';

const BadgeList = () => {
  const colorMode = useColorMode();
  return (
    <List>
      <ListItem onPress={() => console.log('pressed')} divider>
        <ListItemLeadingContent>
          <Box
            padding="$3"
            borderRadius="$lg"
            bg={colorMode === 'light' ? '$apple50' : '$apple800'}
          >
            <ListItemIcon
              as={ElectricityMediumIcon}
              color={colorMode === 'light' ? '$apple800' : '$apple200'}
            />
          </Box>
        </ListItemLeadingContent>
        <ListItemContent>
          <ListItemText>Electricity</ListItemText>
          <Badge colorScheme="cyan" size="small">
            <BadgeText>Text</BadgeText>
          </Badge>
          <ListItemSupportingText>Last reading 23/03/24</ListItemSupportingText>
        </ListItemContent>
        <ListItemTrailingContent>
          <ListItemTrailingIcon as={ChevronRight01MediumIcon} />
        </ListItemTrailingContent>
      </ListItem>
      <ListItem onPress={() => console.log('pressed')} divider={false}>
        <ListItemLeadingContent>
          <Box
            padding="$3"
            borderRadius="$lg"
            bg={colorMode === 'light' ? '$apple50' : '$apple800'}
          >
            <ListItemIcon
              as={GasMediumIcon}
              color={colorMode === 'light' ? '$apple800' : '$apple200'}
            />
          </Box>
        </ListItemLeadingContent>
        <ListItemContent>
          <HStack style={{ justifyContent: 'space-between' }}>
            <ListItemText>Electricity</ListItemText>
            <Badge colorScheme="green" size="small">
              <BadgeText>Smart meter</BadgeText>
            </Badge>
          </HStack>
          <ListItemSupportingText>Last reading 23/03/24</ListItemSupportingText>
        </ListItemContent>
        <ListItemTrailingContent>
          <ListItemTrailingIcon as={ChevronRight01MediumIcon} />
        </ListItemTrailingContent>
      </ListItem>
    </List>
  );
};

export default BadgeList;
