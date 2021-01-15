const add = (a: number, b: number): number => {
  if (isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) throw new Error("Arguments to add must be finite numbers");
  return a + b;
};

export default add;
