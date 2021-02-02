import React from "react";
import { ThemeProvider } from "../../src";

function withTheme<P>(
  Component: React.FunctionComponent<P>
): React.FunctionComponent<P> {
  const WithTheme: React.FunctionComponent<P> = (props) => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  );

  return WithTheme;
}

export default withTheme;
