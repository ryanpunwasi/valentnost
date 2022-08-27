export const apiGrouptoState = str => {
  let label =
    str === "post-transition-metals"
      ? "post-transition metal"
      : str === "noble-gases"
      ? "noble gas"
      : str === "lanthanides"
      ? "lanthanoid"
      : str === "actinides"
      ? "actinoid"
      : str.slice(0, -1).replaceAll("-", " ");

  return label;
};
