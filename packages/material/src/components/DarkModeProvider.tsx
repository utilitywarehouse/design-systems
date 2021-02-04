import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export type DarkModeValue = "system" | "on" | "off";

export interface DarkModeContextValue {
  darkModeEnabled: boolean;
  setDarkMode: (value: DarkModeValue) => void;
  darkModeEnabledSystemValue?: boolean;
}

export const DarkModeContext = React.createContext<DarkModeContextValue>({
  darkModeEnabled: false,
  setDarkMode: () => undefined,
});

export interface DarkModeProviderProps {
  defaultValue?: "on" | "off";
  useSystemColorScheme?: boolean;
  children?: React.ReactNode;
}

enum DarkModeSource {
  NOT_SET,
  SYSTEM,
}

const DarkModeProvider: React.FunctionComponent<DarkModeProviderProps> = ({
  defaultValue = "off",
  useSystemColorScheme = true,
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [enabled, setEnabled] = React.useState(defaultValue === "on");
  const [source, setSource] = React.useState<DarkModeSource>(
    getDefaultSource()
  );

  function getDefaultSource(): DarkModeSource {
    if (useSystemColorScheme) return DarkModeSource.SYSTEM;
    return DarkModeSource.NOT_SET;
  }

  const isEnabled = () => {
    if (source === DarkModeSource.SYSTEM) return prefersDarkMode;
    return enabled;
  };

  const setDarkMode = (value: DarkModeValue) => {
    switch (value) {
      case "system":
        setSource(DarkModeSource.SYSTEM);
        break;

      case "on":
      case "off":
        setSource(DarkModeSource.NOT_SET);
        setEnabled(value === "on");
        break;
    }
  };

  return (
    <DarkModeContext.Provider
      value={{
        darkModeEnabled: isEnabled(),
        setDarkMode,
        darkModeEnabledSystemValue: prefersDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
export const DarkModeConsumer = DarkModeContext.Consumer;
