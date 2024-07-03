import type { Meta, StoryFn } from '@storybook/react';
import {
  Box,
  Button,
  ButtonText,
  Center,
  HStack,
  Image,
  KeyboardAvoidingView,
  Text,
  VStack,
} from '@utilitywarehouse/native-ui';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from '@utilitywarehouse/native-ui/lab';
import React from 'react';

const ActionsheetBasic: StoryFn = ({ ...props }: any) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$56" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

ActionsheetBasic.storyName = 'Basic';

const ActionsheetMeta: Meta<typeof ActionsheetBasic> = {
  title: 'Native UI / Components / Lab / Actionsheet',
  component: ActionsheetBasic,
  argTypes: {},
  args: {},
};

const KeyboardAvoidWithSnap: StoryFn = ({ ...props }: any) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[50]}>
        <KeyboardAvoidingView
          behavior="position"
          sx={{
            position: 'relative',
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="75%">
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <VStack w="$full" p={20}>
              <HStack justifyContent="center" alignItems="center" space="md">
                <Box
                  w={50}
                  h="$full"
                  px="$2"
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="$grey400"
                  rounded="$sm"
                >
                  <Image
                    source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                    flex={1}
                    resizeMode="contain"
                  />
                </Box>
                <VStack flex={1}>
                  <Text fontWeight="$bold">Mastercard</Text>
                  <Text>Card ending in 2345</Text>
                </VStack>
              </HStack>
            </VStack>
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </Box>
  );
};

export default ActionsheetMeta;

export { ActionsheetBasic as Basic, KeyboardAvoidWithSnap };
