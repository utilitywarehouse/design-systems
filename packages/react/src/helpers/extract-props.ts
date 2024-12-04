import clsx from 'clsx';
import { PropsMeta } from '../props/padding.props';
import { isResponsiveObject } from './is-responsive-object';
import { getResponsiveClassnames } from './with-breakpoints';
import { mergeStyles } from './merge-styles';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractProps<
  P extends { className?: string; style?: React.CSSProperties; [key: string]: any },
  T extends Array<Record<string, PropsMeta>>,
>(props: P, ...propsMeta: T) {
  const allPropsMeta: Record<string, PropsMeta> = Object.assign({}, ...propsMeta);
  const extractedProps = { ...props };
  let className: string | undefined;
  let style: ReturnType<typeof mergeStyles>;

  for (const key in allPropsMeta) {
    const value = extractedProps[key];
    const tokenValues = allPropsMeta[key]?.values;
    const prefix = allPropsMeta[key]?.className;
    const { className: propClassName, style: propStyle } = getResponsiveClassnames({
      value,
      prefix,
      tokenValues,
    });
    className = clsx(className, propClassName);
    style = mergeStyles(style, propStyle);

    // if (typeof value === 'string') {
    //   const tokenValues = allPropsMeta[key]?.values;
    //   const responsiveClassName = getResponsiveClassnames({ value, prefix: key, tokenValues });
    //   console.log({ responsiveClassName });
    // }
    // if (isResponsiveObject(value)) {
    //   console.log({ value });
    // }
  }
  return { className, style };
}
