import { useState } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '../../lab';
import { Box, Button, Text } from '../../src';

const styles = StyleSheet.create(theme => ({
  indicator: {
    width: theme.space['800'],
    height: theme.space['150'],
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.green600,
  },
  content: {
    paddingHorizontal: theme.space['300'],
    height: 260,
    backgroundColor: theme.colors.green100,
  },
}));

const AdvancedActionsheet = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box>
      <Button onPress={handleClose}>Open</Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        includeContent={false}
        includeDragIndicator={false}
      >
        <ActionsheetContent style={styles.content}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator style={styles.indicator} />
          </ActionsheetDragIndicatorWrapper>
          <Box gap="150">
            <Text>Hello, this is the green Actionsheet!</Text>
            <Text>What lovely colours!</Text>
          </Box>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default AdvancedActionsheet;
