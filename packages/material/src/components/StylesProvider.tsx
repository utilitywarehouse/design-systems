import React from "react";
import { StylesProviderProps } from "@material-ui/styles";
import { GenerateId } from "jss";
import { MuiStylesProvider, createGenerateClassName } from "..";

export { StylesProviderProps } from "@material-ui/styles";

const StylesProvider: React.FunctionComponent<StylesProviderProps> = (
  props
) => {
  const [generateClassName, setGenerateClassName] = React.useState<{
    generateClassName: GenerateId;
  }>();

  const getRandomString = () =>
    ((Math.random() * 1e8) ^ (Math.random() * 10)).toString(16);

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

  return (
    <MuiStylesProvider
      injectFirst
      generateClassName={generateClassName.generateClassName}
      {...props}
    />
  );
};

export default StylesProvider;
