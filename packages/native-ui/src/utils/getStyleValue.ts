/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

const getStyleValue = (value: any, type: Record<string, any>) =>
  typeof value === 'string' && value[0] === '$' ? type?.[value?.slice(1) ?? ''] : value;

export default getStyleValue;
