import React from "react";
import Background, { BackgroundProps } from "../components/Background";

function withBackground<P>(
  Component: React.FunctionComponent<P>,
  backgroundProps: BackgroundProps
): React.FunctionComponent<P> {
  const WithBackground: React.FunctionComponent<P> = (props) => (
    <Background {...backgroundProps}>
      <Component {...props} />
    </Background>
  );

  return WithBackground;
}

export default withBackground;
