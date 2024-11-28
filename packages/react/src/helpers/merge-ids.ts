// https://github.com/seek-oss/braid-design-system/blob/master/packages/braid-design-system/src/lib/components/private/mergeIds.ts
export const mergeIds = (...ids: Array<string | undefined>) => {
  const validIds = ids.filter(Boolean);

  if (validIds.length === 0) {
    return undefined;
  }

  return validIds.join(' ');
};
