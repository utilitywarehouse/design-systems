import type TextProps from '../Text/Text.props';

interface LabelProps extends TextProps {
  nested?: boolean;
  disabled?: boolean;
}

export default LabelProps;
