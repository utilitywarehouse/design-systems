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

DarkModeContext.displayName = "DarkModeContext";

export interface DarkModeProviderProps {
  defaultValue?: "on" | "off";
  value?: "on" | "off";
  useSystemColorScheme?: boolean;
}

enum DarkModeSource {
  NOT_SET,
  SYSTEM,
}

const DarkModeProvider: React.FunctionComponent<DarkModeProviderProps> = ({
  defaultValue = "off",
  value,
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

  React.useEffect(() => {
    if (source === DarkModeSource.NOT_SET && value) {
      if (enabled && value === "off") {
        setEnabled(false);
      } else if (!enabled && value === "on") {
        setEnabled(true);
      }
    }
  }, [enabled, source, value, useSystemColorScheme]);

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
