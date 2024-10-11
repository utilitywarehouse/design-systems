import React from 'react';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
} from '../../lab';
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
    imports: [
      'import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper } from "@utilitywarehouse/native-ui/lab";',
    ],
    example: ({ content }) => (
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          {content}
        </ActionsheetContent>
      </Actionsheet>
    ),
  }
);
