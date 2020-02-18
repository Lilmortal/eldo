const createBem = (block: string) => (
  element = '',
  modifier: string | Array<string> = ''
) => {
  const bem = [];
  const elementBlock = element ? `${block}__${element}` : block;

  bem.push(elementBlock);

  if (modifier) {
    if (Array.isArray(modifier)) {
      modifier.forEach(mod => {
        if (mod) {
          bem.push(`${elementBlock}--${mod}`);
        }
      });
    } else {
      bem.push(`${elementBlock}--${modifier}`);
    }
  }

  return bem.join(' ');
};

export default createBem;
