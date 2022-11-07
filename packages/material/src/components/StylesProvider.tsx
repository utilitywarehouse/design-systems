import React from 'react';
import {
  createGenerateClassName,
  StylesProviderProps,
  StylesProvider as MuiStylesProvider,
} from '@mui/styles';
import { GenerateId } from 'jss';
import { getRandomString } from '../utils';

export type { StylesProviderProps } from '@mui/styles';

const StylesProvider: React.FunctionComponent<StylesProviderProps> = props => {
  const [generateClassName, setGenerateClassName] = React.useState<{
    generateClassName: GenerateId;
  }>();

  const getGenerateClassName = (): GenerateId => {
    return createGenerateClassName({
      disableGlobal: true,
      productionPrefix: getRandomString(),
      seed: getRandomString(),
    });
  };

  React.useEffect(() => {
    const generateClassName = getGenerateClassName();
    setGenerateClassName({ generateClassName });
  }, []);

  if (!generateClassName?.generateClassName) {
    return null;
  }

  return <MuiStylesProvider generateClassName={generateClassName.generateClassName} {...props} />;
};

export default StylesProvider;
