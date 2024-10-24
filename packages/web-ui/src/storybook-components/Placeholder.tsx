import { colors } from '@utilitywarehouse/colour-system';

import { Box } from '../components';
import { styled } from '../theme';
import { px } from '../utils';

export const Placeholder = styled(Box)({
  border: '1px dotted',
  borderColor: colors.grey300,
  backgroundColor: colors.grey75,
  borderRadius: px(4),
});
