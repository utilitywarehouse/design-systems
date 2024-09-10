import { createRadio } from '@gluestack-ui/radio';
import StyledRadio from './RadioRoot';
import StyledRadioIndicator from './RadioIndicator';
import StyledRadioIcon from './RadioIcon';
import StyledRadioLabel from './RadioLabel';
import StyledRadioGroup from './RadioGroup';

const Radio = createRadio({
  Root: StyledRadio,
  Group: StyledRadioGroup,
  Indicator: StyledRadioIndicator,
  Icon: StyledRadioIcon,
  Label: StyledRadioLabel,
});

Radio.displayName = 'Radio';
Radio.Group.displayName = 'RadioGroup';
Radio.Indicator.displayName = 'RadioIndicator';
Radio.Icon.displayName = 'RadioIcon';
Radio.Label.displayName = 'RadioLabel';

const RadioGroup = Radio.Group;
const RadioIndicator = Radio.Indicator;
const RadioIcon = Radio.Icon;
const RadioLabel = Radio.Label;

export { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel };

export default Radio;
