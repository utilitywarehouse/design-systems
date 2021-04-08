export const clsx = (...classNames: Array<string | undefined | false>) => {
  return classNames.filter((className) => !!className).join(" ");
};
