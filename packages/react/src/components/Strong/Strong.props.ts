import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

export type StrongProps = ComponentPropsWithout<'strong', RemovedProps>;
