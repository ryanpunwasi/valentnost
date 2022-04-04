export const apiGroupToClassName = str => {
  return str.replaceAll(/\s/g, '-').toLowerCase();
}