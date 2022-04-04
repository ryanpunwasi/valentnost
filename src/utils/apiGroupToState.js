export const apiGrouptoState = (str) => {
  let label;
  if(str === 'post-transition-metals') {
    label = 'post-transition metal';
  } else if(str === 'noble-gases') {
      label = 'noble gas';
    } else if(str === 'lanthanides') {
        label = 'lanthanoid';
      } else if(str === 'actinides') {
          label = 'actinoid';
      } else {
          label = str.slice(0, -1);
          label = label.replaceAll('-', ' ');
  }
  
  return label;
}