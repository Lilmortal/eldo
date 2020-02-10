const createBem = (name: string) => (t = '', selector = '') => {
  let bem = '';

  if (t) {
    bem = `${bem} ${name}__${t}`;
  } else {
    bem = name;
  }

  if (selector) {
    if (t) {
      bem = `${bem} ${name}__${t}--${selector}`;
    } else {
      bem = `${bem} ${name}--${selector}`;
    }
  }

  return bem;
};

export default createBem;
