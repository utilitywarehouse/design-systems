import { Spinner } from '@utilitywarehouse/native-ui';
import React from 'react';

const SpinnerBasic: any = ({ bg = 'red500', w = '100', h = '100', ...props }: any) => {
  return <Spinner {...props} />;
};

SpinnerBasic.description = 'This is a basic Spinner component example.';

export default SpinnerBasic;

export { Spinner };
