export type PropDef<T = string> = {
  tokens?: ReadonlyArray<T>;
  className: string;
  default?: string | number;
  responsive: boolean;
};
