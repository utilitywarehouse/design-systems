import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '@utilitywarehouse/native-ui/lab';
import figma from '@figma/code-connect';

const showActionsheet = true;
const handleClose = () => console.log('close');

figma.connect(
  Actionsheet,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=5680-5281&m=dev',
  {
    props: {
      content: figma.enum('content', {
        custom: '{content goes here}',
      }),
    },
    example: ({ content }) => (
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$64" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {content}
        </ActionsheetContent>
      </Actionsheet>
    ),
  }
);
