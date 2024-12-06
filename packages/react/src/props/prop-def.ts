export type PropDef<T = string> = {
  tokens?: ReadonlyArray<T>;
  className: string;
  responsive: boolean;
};
