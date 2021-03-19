import { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import Background from "../components/Background";

function withBackground<P>(
  Component: React.FunctionComponent<P>,
  level: BackdropLevel
): React.FunctionComponent<P> {
  const WithBackground: React.FunctionComponent<P> = (props) => (
    <Background
      level={level}
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
