import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { act } from "react-dom/test-utils";
import useMediaQuery from "@mui/material/useMediaQuery";
import DarkModeProvider, {
  DarkModeConsumer,
  DarkModeProviderProps,
  DarkModeContextValue,
  DarkModeValue,
} from "./DarkModeProvider";

type TestComponentProps = DarkModeContextValue;
const TestComponent: React.FunctionComponent<TestComponentProps> = () => null;

describe("DarkModeProvider", () => {
  let systemPrefersDarkMode: boolean;
  beforeEach(() => {
    systemPrefersDarkMode = false;
    (useMediaQuery as jest.Mock).mockImplementation(
      () => systemPrefersDarkMode
    );
  });

  type Wrapper = ReactWrapper<React.FunctionComponent<DarkModeProviderProps>>;
  let wrapper: Wrapper;
  function getWrapper(propOverrides: DarkModeProviderProps = {}): Wrapper {
    const props: DarkModeProviderProps = { ...propOverrides };
    return mount<typeof DarkModeProvider>(
      <DarkModeProvider {...props}>
        <DarkModeConsumer>
          {({ darkModeEnabled, setDarkMode, darkModeEnabledSystemValue }) => (
            <TestComponent
              darkModeEnabled={darkModeEnabled}
              setDarkMode={setDarkMode}
              darkModeEnabledSystemValue={darkModeEnabledSystemValue}
            />
          )}
        </DarkModeConsumer>
      </DarkModeProvider>
    );
  }

  const getTestComponent = (wrapper: Wrapper) =>
    wrapper.find(TestComponent).first();

  const setDarkMode = (wrapper: Wrapper, value: DarkModeValue) => {
    act(() => getTestComponent(wrapper).prop("setDarkMode")(value));
    wrapper.update();
  };

  describe("when the system value is used", () => {
    describe("when the system has dark mode enabled", () => {
      beforeEach(() => {
        systemPrefersDarkMode = true;
        wrapper = getWrapper({ useSystemColorScheme: true });
      });

      test("darkModeEnabled is true", () => {
        expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(true);
      });

      test("darkModeEnabledSystemValue is true", () => {
        expect(
          getTestComponent(wrapper).prop("darkModeEnabledSystemValue")
        ).toBe(true);
      });
    });

    describe("when the system has dark mode disabled", () => {
      beforeEach(() => {
        systemPrefersDarkMode = false;
        wrapper = getWrapper({ useSystemColorScheme: true });
      });

      test("darkModeEnabled is false", () => {
        expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
      });

      test("darkModeEnabledSystemValue is false", () => {
        expect(
          getTestComponent(wrapper).prop("darkModeEnabledSystemValue")
        ).toBe(false);
      });
    });
  });

  describe("when the system value is not used", () => {
    beforeEach(() => {
      systemPrefersDarkMode = true;
      wrapper = getWrapper({ useSystemColorScheme: false });
    });

    test("darkModeEnabled is false", () => {
      expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
    });
  });

  describe("setDarkMode", () => {
    describe("when dark mode is set to 'off'", () => {
      beforeEach(() => {
        wrapper = getWrapper();
        setDarkMode(wrapper, "off");
      });

      test("darkModeEnabled is false", () => {
        expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
      });
    });

    describe("when dark mode is set to 'on'", () => {
      beforeEach(() => {
        wrapper = getWrapper();
        setDarkMode(wrapper, "on");
      });

      test("darkModeEnabled is true", async () => {
        expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(true);
      });
    });

    describe("when dark mode is set to 'system'", () => {
      describe("when the system has dark mode disabled", () => {
        beforeEach(() => {
          systemPrefersDarkMode = false;
          wrapper = getWrapper({ useSystemColorScheme: false });
          setDarkMode(wrapper, "system");
        });

        test("darkModeEnabled is false", () => {
          expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
        });
      });

      describe("when the system has dark mode enabled", () => {
        beforeEach(() => {
          systemPrefersDarkMode = true;
          wrapper = getWrapper({ useSystemColorScheme: false });
          setDarkMode(wrapper, "system");
        });

        test("darkModeEnabled is true", () => {
          expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(true);
        });
      });
    });
  });

  describe("the consumer works without the provider being present", () => {
    type Wrapper = ReactWrapper<React.FunctionComponent<DarkModeProviderProps>>;
    let wrapper: Wrapper;
    beforeAll(() => {
      wrapper = mount<typeof DarkModeProvider>(
        <DarkModeConsumer>
          {({ darkModeEnabled, setDarkMode, darkModeEnabledSystemValue }) => (
            <TestComponent
              darkModeEnabled={darkModeEnabled}
              setDarkMode={setDarkMode}
              darkModeEnabledSystemValue={darkModeEnabledSystemValue}
            />
          )}
        </DarkModeConsumer>
      );
    });

    test("darkModeEnabled is false", () => {
      expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
    });

    test("when setDarkMode is set to 'on' the value for darkModeEnabled is false", () => {
      setDarkMode(wrapper, "on");
      expect(getTestComponent(wrapper).prop("darkModeEnabled")).toBe(false);
    });

    test("darkModeEnabledSystemValue is not set", () => {
      expect(
        getTestComponent(wrapper).prop("darkModeEnabledSystemValue")
      ).toBeUndefined();
    });
  });
});
