export const apiGrouptoLabel = (str) => {

  if(str === 'lanthanoid') {
    return 'Lanthanides'
  } else if(str === 'actinoid') {
    return 'Actinides'
  } else if(str === 'noble gas') {
    return 'Noble Gases'
  } else if(str === 'metal') {
    return 'Post-Transition Metals'
  }

  if(str.includes(' ')) {
    if(str.includes('-')) {
      return 'Post-Transition Metals';
    }

    const words = str.split(' ');
    words.forEach((ele, index, array) => {
      array[index] = ele[0].toUpperCase() + ele.substring(1);
    });

  return words.join(' ') + 's';

  }  else {
        return str[0].toUpperCase() + str.substring(1) + 's';
      }
}