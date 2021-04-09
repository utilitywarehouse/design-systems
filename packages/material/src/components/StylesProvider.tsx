import React from "react";
import { StylesProviderProps } from "@material-ui/styles";
import { GenerateId } from "jss";
import { MuiStylesProvider, createGenerateClassName } from "..";
import { getRandomString } from "../lib/random";

export type { StylesProviderProps } from "@material-ui/styles";

const StylesProvider: React.FunctionComponent<StylesProviderProps> = (
  props
) => {
  const [generateClassName, setGenerateClassName] = React.useState<{
    generateClassName: GenerateId;
  }>();

  const getGenerateClassName = (): GenerateId => {
    return createGenerateClassName({
      disableGlobal: true,
      productionPrefix: getRandomString("prod"),
      seed: getRandomString("seed"),
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
      generateClassName={generateClassName.generateClassName}
      {...props}
    />
  );
};

export default StylesProvider;
