export const clsx = (
  ...classNames: Array<string | undefined | false>
): string => {
  return classNames.filter((className) => !!className).join(" ");
};
