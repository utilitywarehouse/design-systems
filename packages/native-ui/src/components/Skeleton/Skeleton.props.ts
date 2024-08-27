import type { ComponentProps } from 'react';
import type { Root } from './styled-components';

type RootProps = ComponentProps<typeof Root>;

interface SkeletonProps extends RootProps {
  width: RootProps['width'];
  height: RootProps['height'];
}

export default SkeletonProps;
