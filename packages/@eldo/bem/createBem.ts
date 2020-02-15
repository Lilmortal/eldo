const createBem = (block: string) => (element = '', modifier = '') => {
  let bem = '';

  if (element) {
    bem = `${block}__${element}`;
  } else {
    bem = block;
  }

  if (modifier) {
    if (element) {
      bem = `${bem} ${block}__${element}--${modifier}`;
    } else {
      bem = `${bem} ${block}--${modifier}`;
    }
  }

  return bem;
};

export default createBem;
