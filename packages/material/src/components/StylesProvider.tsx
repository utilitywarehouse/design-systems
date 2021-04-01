import React from "react";
import { StylesProviderProps } from "@material-ui/styles";
import { MuiStylesProvider, createGenerateClassName } from "..";

export { StylesProviderProps } from "@material-ui/styles";

const StylesProvider: React.FunctionComponent<StylesProviderProps> = (
  props
) => {
  const getRandomString = () =>
    ((Math.random() * 1e8) ^ (Math.random() * 10)).toString(16);

  const generateClassName = React.useMemo(() => {
    return createGenerateClassName({
      disableGlobal: true,
      productionPrefix: getRandomString(),
      seed: getRandomString(),
    });
  }, []);

  return (
    <MuiStylesProvider
      injectFirst
      generateClassName={generateClassName}
      {...props}
    />
  );
};

export default StylesProvider;
