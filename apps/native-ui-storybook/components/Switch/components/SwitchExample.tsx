import { Switch } from '@utilitywarehouse/native-ui';
import { FC, useState } from 'react';

const SwitchExample: FC<{ value: boolean; disabled: boolean; size: 'small' | 'medium' }> = ({
  value,
  disabled,
  size,
}) => {
  const [checked, setChecked] = useState(value);
  return <Switch value={checked} onValueChange={setChecked} disabled={disabled} size={size} />;
};

export default SwitchExample;
