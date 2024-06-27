import { capitalise } from './capitalise';

export const colorScheme = (
  colorScheme: 'cyan' | 'green' | 'red' | 'gold',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: (...args: Array<any>) => JSX.Element
) => ({
  bg: `$${colorScheme}50`,
  borderColor: `$${colorScheme}500`,
  _text: {
    color: `$${colorScheme}900`,
  },
  _icon: {
    color: `$${colorScheme}700`,
    props: {
      as: icon,
    },
  },
  _chevron: {
    color: `$${colorScheme}700`,
  },
  _button: {
    _buttonIcon: {
      color: `$${colorScheme}700`,
    },
  },
  _closeButton: {
    _closeIcon: {
      color: `$${colorScheme}700`,
    },
  },
  _dark: {
    bg: `$dark${capitalise(colorScheme)}50`,
    borderColor: `$dark${capitalise(colorScheme)}500`,
    _text: {
      color: `$dark${capitalise(colorScheme)}900`,
    },
    _icon: {
      color: `$dark${capitalise(colorScheme)}700`,
    },
    _chevron: {
      color: `$dark${capitalise(colorScheme)}700`,
    },
    _button: {
      _buttonIcon: {
        color: `$dark${capitalise(colorScheme)}700`,
      },
    },
    _closeButton: {
      _closeIcon: {
        color: `$dark${capitalise(colorScheme)}700`,
      },
    },
  },
});
