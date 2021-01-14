import { UIModule } from "./types";

const uiModule: UIModule = {
  getValue: (key: string): string => key === "test" ? "success" : "failed"
};

export default uiModule;
