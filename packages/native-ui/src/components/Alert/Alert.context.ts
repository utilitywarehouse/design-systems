import { createContext, useContext } from 'react';
import type { AlertProps } from './Alert.props';
// import { createAlert } from '@gluestack-ui/alert';
// import { View, Text } from 'react-native';

// export const AccessibleAlert = createAlert({
//   Root: View,
//   Text,
//   Icon: View,
// });

export const AlertContext = createContext<{
  colorScheme?: AlertProps['colorScheme'];
}>({});

export const useAlertContext = () => useContext(AlertContext);
