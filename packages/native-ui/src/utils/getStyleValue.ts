const getStyleValue = (value: any, type: Record<string, any>) => {
  if (typeof value === 'string' && value.startsWith('$')) {
    const key = value.slice(1);
    return type[key] !== undefined ? type[key] : value;
  }
  return value;
};

export default getStyleValue;
