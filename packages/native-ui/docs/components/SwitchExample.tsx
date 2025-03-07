import React, { FC, useState } from 'react';
import { Switch } from '../../src';

const SwitchExample: FC<{ value: boolean; disabled: boolean; size: 'small' | 'medium' }> = ({
  value,
  disabled,
  size,
}) => {
  const [checked, setChecked] = useState(value);
  return <Switch value={checked} onValueChange={setChecked} disabled={disabled} size={size} />;
};

export default SwitchExample;
