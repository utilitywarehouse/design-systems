import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioGroup, SelectionTile, SelectionTileProps } from '@utilitywarehouse/web-ui';

export default {
  title: 'Components/SelectionTile',
  component: SelectionTile,
} as Meta;

export const SelectionTileStory: Story<SelectionTileProps> = () => {
  return (
    <RadioGroup defaultValue="2" name="radio-group-with-selection-tiles">
      <SelectionTile label="Default selection tile" value="1" />
      <SelectionTile label="Checked selection tile" value="2" />
      <SelectionTile label="Disabled selection tile" disabled />
    </RadioGroup>
  );
};

SelectionTileStory.storyName = 'SelectionTile';
