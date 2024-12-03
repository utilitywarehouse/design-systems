import { PropsMeta } from '../props/padding.props';
import { isResponsiveObject } from './is-responsive-object';
import { getResponsiveClassnames, withBreakpoints } from './with-breakpoints';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractProps<
  P extends { className?: string; style?: React.CSSProperties; [key: string]: any },
  T extends Array<Record<string, PropsMeta>>,
>(props: P, ...propsMeta: T) {
  const allPropsMeta: Record<string, PropsMeta> = Object.assign({}, ...propsMeta);
  const extractedProps = { ...props };
  let className: string | undefined;

  for (const key in allPropsMeta) {
    const value = extractedProps[key];
    const tokenValues = allPropsMeta[key]?.values;
    const responsiveClassName = getResponsiveClassnames({ value, prefix: key, tokenValues });
    console.log({ responsiveClassName });

    if (typeof value === 'string') {
      const tokenValues = allPropsMeta[key]?.values;
      const responsiveClassName = getResponsiveClassnames({ value, prefix: key, tokenValues });
      console.log({ responsiveClassName });
    }
    if (isResponsiveObject(value)) {
      console.log({ value });
    }
  }
  return { className };

  // allPropsMeta.forEach(pd => {
  //   const fromProps = props[pd.name];
  //   if (fromProps) {
  //     console.log({ fromProps });
  //     const propValues = pd.values;
  //     console.log(pd.values);
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //     console.log(propValues.includes(fromProps));
  //   }
  // });
  // console.log({ props, propDefs });
}
