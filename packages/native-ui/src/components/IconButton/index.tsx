import { Root, Icon } from './styled-components';
import { createButton } from '@gluestack-ui/button';

const AccessbileButton = createButton({
  Root,
  Icon,
  Group: () => null,
  Text: () => null,
  Spinner: () => null,
});

export const IconButton = AccessbileButton;
export const IconButtonIcon = AccessbileButton.Icon;
