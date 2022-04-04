export const truncateElementName = str => {
  if(str.length > 9) {
    return str.substring(0, 8) + '...';
  }
  
  return str;
}