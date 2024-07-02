import { Button, ButtonIcon, ButtonText, NativeUIProvider } from '@utilitywarehouse/native-ui';
import { ChevronRightSmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';

interface Props {
  url: string;
}

const ViewFigmaButton: React.FC<Props> = ({ url }) => (
  <NativeUIProvider>
    <Button
      variant="ghost"
      sx={{
        zIndex: 1,
        mt: '$1',
        ':hover': {
          backgroundColor: '$grey100',
        },
        _web: {
          float: 'right',
        },
      }}
      onPress={() => window.open(url)}
    >
      <ButtonText>View in Figma</ButtonText>
      <ButtonIcon as={ChevronRightSmallIcon} />
    </Button>
  </NativeUIProvider>
);

export default ViewFigmaButton;
