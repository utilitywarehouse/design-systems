import React from "react";
import Background, { BackgroundColor } from "../components/Background";

function withBackground<P>(
  Component: React.FunctionComponent<P>,
  backgroundColor: BackgroundColor
): React.FunctionComponent<P> {
  const WithBackground: React.FunctionComponent<P> = (props) => (
    <Background
      backgroundColor={backgroundColor}
      sx={{
        padding: "20px",
      }}
    >
      <Component {...props} />
    </Background>
  );

  return WithBackground;
}

export default withBackground;
