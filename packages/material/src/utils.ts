import { BackgroundProps } from "./components/Background";

export const customerUiPrefix = "uw-cwui";

export const px = (value: string | number): string => `${value}px`;

export const isHeadingVariant = (variant: string): boolean => {
  const headingVariants = ["displayHeading", "h1", "h2", "h3", "h4"];
  return headingVariants.includes(variant);
};

export const isBrandBackgroundColor = (
  backgroundColor: BackgroundProps["backgroundColor"]
): boolean => {
  if (!backgroundColor) return false;
  const brandBackgroundColors = ["midnight", "purple"];
  return brandBackgroundColors.includes(backgroundColor);
};

// get the hexadecimal value for an opacity value, primarily for use with CSS colour hex values
// ie. to have the midnight colour with 10% opacity:
// backgroundColor: `${colors.midnight}${getHexOpacity(0.1)}`
export const getHexOpacity = (opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error(
      `Value for opacity is out of bounds, opacity >= 0 and opacity <= 1; received ${opacity}`
    );
  }

  return Math.round(255 * opacity).toString(16);
};

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
