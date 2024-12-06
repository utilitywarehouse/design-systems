import clsx from 'clsx';
import { mergeStyles } from './merge-styles';
import { getClassNameStyles } from './get-classname-styles';
import { PropDef } from '../props/prop-def';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractProps<
  P extends { className?: string; style?: React.CSSProperties; [key: string]: any },
  T extends Array<Record<string, PropDef>>,
>(props: P, ...propsMeta: T) {
  const allPropsMeta: Record<string, PropDef> = Object.assign({}, ...propsMeta);
  const extractedProps = { ...props };
  let className: string | undefined;
  let style: ReturnType<typeof mergeStyles>;

  for (const key in allPropsMeta) {
    const value = extractedProps[key];
    delete extractedProps[key];
    const tokens = allPropsMeta[key]?.tokens;
    const prefix = allPropsMeta[key]?.className;
    const isResponsive = allPropsMeta[key]?.responsive;
    const { className: propClassName, style: propStyle } = getClassNameStyles({
      value,
      prefix,
      tokens,
      isResponsive,
    });
    className = clsx(className, propClassName);
    style = mergeStyles(style, propStyle);
  }
  extractedProps.className = clsx(className, props.className);
  extractedProps.style = mergeStyles(style, props.style);
  return extractedProps;
}
