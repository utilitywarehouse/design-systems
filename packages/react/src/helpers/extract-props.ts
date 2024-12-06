import clsx from 'clsx';
import { mergeStyles } from './merge-styles';
import { getClassNameStyles } from './get-classname-styles';
import { PropDef } from '../props/prop-def';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractProps<
  P extends { className?: string; style?: React.CSSProperties; [key: string]: any },
  T extends Array<Record<string, PropDef>>,
>(props: P, ...propDefs: T) {
  const allPropDefs: Record<string, PropDef> = Object.assign({}, ...propDefs);
  const extractedProps = { ...props };
  let className: string | undefined;
  let style: ReturnType<typeof mergeStyles>;

  for (const key in allPropDefs) {
    const value = extractedProps[key];
    delete extractedProps[key];
    const tokens = allPropDefs[key]?.tokens;
    const prefix = allPropDefs[key]?.className;
    const { className: propClassName, style: propStyle } = getClassNameStyles({
      value,
      prefix,
      defaultValue: allPropDefs[key]?.default,
      tokens,
      isResponsive: Boolean(allPropDefs[key]?.responsive),
    });
    className = clsx(className, propClassName);
    style = mergeStyles(style, propStyle);
  }
  extractedProps.className = clsx(className, props.className);
  extractedProps.style = mergeStyles(style, props.style);
  return extractedProps;
}
