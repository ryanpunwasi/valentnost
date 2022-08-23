export const round = (flt, decimals) => {
  const multiplier = Math.pow(10, decimals);
  return Math.round((flt + Number.EPSILON) * multiplier) / multiplier;
};
