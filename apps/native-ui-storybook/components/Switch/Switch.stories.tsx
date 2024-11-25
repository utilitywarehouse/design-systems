import { Meta } from '@storybook/react';
import Switch from './Switch';
import Variants from './Variants';

const SwitchMeta: Meta<typeof Switch> = {
  title: 'Native UI / Components / Switch',
  component: Switch,
};

export default SwitchMeta;

export { Switch as Playground, Variants };
