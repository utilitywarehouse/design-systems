export interface GetRandomStringOptions {
  prefix?: string;
  length?: number;
}

type GetRandomString = (options?: GetRandomStringOptions) => string;

export const getRandomString: GetRandomString = ({
  prefix,
  length = 16,
} = {}): string => {
  const characters = new Array(26)
    .fill(null)
    .map((_, index) => String.fromCharCode(index + 97));

  const randomStringArray = new Array(length)
    .fill(null)
    .map(() => characters[Math.floor(Math.random() * characters.length)]);

  return `${prefix ?? ""}${randomStringArray.join("")}`;
};
