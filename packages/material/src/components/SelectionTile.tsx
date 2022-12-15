import * as React from 'react';
import {
  RadioProps as MuiRadioProps,
  useRadioGroup as useMuiRadioGroup,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import { TypographyProps } from './Typography';
import { RadioGroupContext } from './RadioGroup';
import * as Radio from './Radio';

export interface SelectionTileProps
  extends Pick<
    MuiRadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'id' | 'name' | 'required' | 'sx'
  > {
  label?: MuiFormControlLabelProps['label'];
  children?: React.ReactNode;
  textTransform?: TypographyProps['textTransform'];
}

type SelectionTileRootProps = Omit<SelectionTileProps, 'label'>;

const SelectionTileRoot = React.forwardRef<HTMLInputElement, SelectionTileRootProps>(
  function SelectionTileRoot({ value, checked, disabled, children, sx, id, ...props }, ref) {
    return (
      <Radio.Tile checked={checked} disabled={!!disabled} sx={sx}>
        <Radio.Indicator
          {...props}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          inputRef={ref}
          aria-hidden={true}
          sx={{
            opacity: 0,
            position: 'absolute',
            pointerEvents: 'none',
          }}
        />
        {children}
      </Radio.Tile>
    );
  }
);

const SelectionTile = React.forwardRef<HTMLInputElement, SelectionTileProps>(function SelectionTile(
  { value, checked, disabled, label, textTransform, sx, ...props },
  ref
) {
  const id = props.id || `cwui-selection-tile-${value}`;

  const muiRadioGroup = useMuiRadioGroup();
  if (muiRadioGroup) {
    checked = muiRadioGroup.value === value;
  }

  const radioGroup = React.useContext(RadioGroupContext);
  // the value on the RadioButton should override the context value
  if (disabled === undefined && radioGroup?.disabled !== undefined) {
    disabled = radioGroup.disabled;
  }
  if (disabled) {
    checked = false;
  }
  if (textTransform === undefined && radioGroup?.textTransform !== undefined) {
    textTransform = radioGroup.textTransform;
  }

  return (
    <SelectionTileRoot
      id={id}
      value={value}
      checked={checked}
      disabled={disabled}
      ref={ref}
      sx={{ display: 'inline-flex', alignItems: 'center', ...sx }}
      {...props}
    >
      <Radio.Label disabled={!!disabled} checked={checked} htmlFor={id} sx={{ padding: 2 }}>
        {label}
      </Radio.Label>
    </SelectionTileRoot>
  );
});

const Root = SelectionTileRoot;
const Label = Radio.Label;
const Tile = SelectionTile;

export { Root, Label, Tile };
export default SelectionTile;
