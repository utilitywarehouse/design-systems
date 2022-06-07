import * as React from "react";
import { BackdropLevel, Background, Box } from "../../src";

const BackgroundStack: React.FC = ({ children }) => {
  const backgroundLevels = [5, 4, 3, 2, 1, 0].map(
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
            paddingX: 4,
          }}
        >
          {children}
        </Background>
      ))}
    </Box>
  );
};

export default BackgroundStack;
