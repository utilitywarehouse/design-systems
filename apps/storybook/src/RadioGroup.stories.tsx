import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton from '../../src/components/Radio';
import { SelectionTileProps } from '../../src/components/SelectionTile';
import RadioGroup, { RadioGroupProps } from '../../src/components/RadioGroup';
import Box from '../../src/components/Box';
import ServiceEnergyIcon from '@utilitywarehouse/customer-ui-react-icons/24x24/ServiceEnergy';
import ServiceInsuranceIcon from '@utilitywarehouse/customer-ui-react-icons/24x24/ServiceInsurance';
import ServiceMobileIcon from '@utilitywarehouse/customer-ui-react-icons/24x24/ServiceMobile';
import ServiceBroadbandIcon from '@utilitywarehouse/customer-ui-react-icons/24x24/ServiceBroadband';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import Stack from '../../src/components/Stack';
import * as SelectionTile from '../../src/components/SelectionTile';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      control: { type: 'radio', options: ['column', 'row'] },
    },
    spacing: {
      control: { type: 'number' },
    },
  },
  args: {
    defaultValue: 'one',
    direction: 'column',
    disabled: false,
    basic: false,
    values: ['one', 'two', 'three', 'four'],
    textTransform: 'capitalize',
  },
} as Meta;

export const RadioGroupWithRadioButtonsStory: Story<
  RadioGroupProps & { values: Array<string> }
> = ({ values, ...props }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <RadioGroup {...props} name="radio-group-with-radio-buttons">
        {values.map(v => (
          <RadioButton key={v} label={v} value={v} />
        ))}
      </RadioGroup>
    </Box>
  );
};
RadioGroupWithRadioButtonsStory.storyName = 'with RadioButton';

export const RadioGroupWithSelectionTileStory: Story<
  RadioGroupProps & { values: Array<string> }
> = ({ values, ...props }) => {
  return (
    <Box sx={{ padding: 4 }}>
      <RadioGroup {...props} direction="row" name="radio-group-with-selection-tiles">
        {values.map(v => (
          <SelectionTile.Tile key={v} label={v} value={v} />
        ))}
      </RadioGroup>
    </Box>
  );
};

RadioGroupWithSelectionTileStory.storyName = 'with SelectionTile';
RadioGroupWithSelectionTileStory.argTypes = {
  basic: { table: { disable: true } },
};

const CustomSelectionTile = ({
  value,
  children,
  label,
  selected,
}: SelectionTileProps & { selected: string }) => {
  const checked = selected === value;
  return (
    <Stack
      component="label"
      spacing={1}
      direction="column"
      sx={{ alignItems: 'center', cursor: 'pointer' }}
    >
      <SelectionTile.Root
        value={value}
        checked={checked}
        sx={{ height: 92, width: 92, display: 'grid', placeItems: 'center' }}
      >
        {children}
      </SelectionTile.Root>
      <SelectionTile.Label component="span" checked={checked}>
        {label}
      </SelectionTile.Label>
    </Stack>
  );
};

export const RadioGroupWithCustomSelectionTileStory: Story<RadioGroupProps> = ({ ...args }) => {
  const [selected, setSelected] = React.useState('broadband');
  return (
    <Box sx={{ padding: 4 }}>
      <RadioGroup
        {...args}
        direction="row"
        value={selected}
        onChange={(_e, value) => setSelected(value)}
        name="radio-group-with-custom-selection-tile"
      >
        <CustomSelectionTile
          value="broadband"
          label="Broadband"
          selected={selected}
          id="broadband-selection-tile"
        >
          <ServiceBroadbandIcon
            fill={selected === 'broadband' ? colors.blueRibbon : colors.cyan}
            aria-hidden="true"
          />
        </CustomSelectionTile>
        <CustomSelectionTile
          value="mobile"
          label="Mobile"
          selected={selected}
          id="mobile-selection-tile"
        >
          <ServiceMobileIcon
            fill={selected === 'mobile' ? colors.blueRibbon : colors.cyan}
            aria-hidden="true"
          />
        </CustomSelectionTile>
        <CustomSelectionTile
          value="energy"
          label="Energy"
          selected={selected}
          id="energy-selection-tile"
        >
          <ServiceEnergyIcon
            fill={selected === 'energy' ? colors.blueRibbon : colors.cyan}
            aria-hidden="true"
          />
        </CustomSelectionTile>
        <CustomSelectionTile
          value="insurance"
          label="Insurance"
          selected={selected}
          id="insurance-selection-tile"
        >
          <ServiceInsuranceIcon
            fill={selected === 'insurance' ? colors.blueRibbon : colors.cyan}
            aria-hidden="true"
          />
        </CustomSelectionTile>
      </RadioGroup>
    </Box>
  );
};

RadioGroupWithCustomSelectionTileStory.storyName = 'with Custom SelectionTile';
RadioGroupWithCustomSelectionTileStory.argTypes = {
  basic: { table: { disable: true } },
};
