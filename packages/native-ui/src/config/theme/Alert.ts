import { createStyle } from '@gluestack-style/react';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
  InformationMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { colorScheme } from './helpers/Alert';

export const Alert = createStyle({
  alignItems: 'center',
  p: 12,
  flexDirection: 'row',
  borderRadius: 8,
  gap: 8,
  borderWidth: '$1',
  _icon: {
    alignSelf: 'flex-start',
  },
  _chevron: {
    alignSelf: 'center',
  },
  _button: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    padding: 0,
    _buttonIcon: {
      width: 24,
      height: 24,
      minWidth: 24,
      minHeight: 24,
    },
  },
  _closeButton: {
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
    _closeIcon: {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
    },
  },
  _web: {
    _text: {
      fontFamily: 'Work Sans !important',
    },
  },
  variants: {
    colorScheme: {
      // @deprecated - use 'red' instead
      error: colorScheme('red', WarningMediumContainedIcon),
      // @deprecated - use 'cyan' instead
      info: colorScheme('cyan', InformationMediumContainedIcon),
      // @deprecated - use 'green' instead
      success: colorScheme('green', TickMediumContainedIcon),
      // @deprecated - use 'gold' instead
      warning: colorScheme('gold', WarningMediumContainedIcon),
      red: colorScheme('red', WarningMediumContainedIcon),
      cyan: colorScheme('cyan', InformationMediumContainedIcon),
      green: colorScheme('green', TickMediumContainedIcon),
      gold: colorScheme('gold', WarningMediumContainedIcon),
    },
  },

  defaultProps: {
    colorScheme: 'error',
  },
});
