import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  Box,
} from '@utilitywarehouse/native-ui/lab';
import { Button, createStyleSheet, Text, useStyles } from '@utilitywarehouse/native-ui';
import React, { useState } from 'react';

const stylesheet = createStyleSheet(({ space, colors, radii }) => ({
  indicator: {
    width: space['16'],
    height: space['3'],
    borderRadius: radii.full,
    backgroundColor: colors.green600,
  },
  content: {
    paddingHorizontal: space['6'],
    height: 260,
    backgroundColor: colors.green100,
  },
}));

const AdvancedActionsheet = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const { styles } = useStyles(stylesheet);
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
          <Box gap="$3">
            <Text>Hello, this is the green Actionsheet!</Text>
            <Text>What lovely colours!</Text>
          </Box>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default AdvancedActionsheet;
