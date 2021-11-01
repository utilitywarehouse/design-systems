import * as React from "react";
import type { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";
import { Background, Box } from "../../src";

const BackgroundStack: React.FC = ({ children }) => {
  const backgroundLevels = [0, 1, 2, 3, 4, 5].map(
    (level) => `level${level}` as BackdropLevel
  );
  return (
    <Box>
      {backgroundLevels.map((level) => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingY: 6,
          }}
        >
          {children}
        </Background>
      ))}
    </Box>
  );
};

export default BackgroundStack;
