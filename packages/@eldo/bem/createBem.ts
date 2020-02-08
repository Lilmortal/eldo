const createBem = (name: string) => (t = '', selector = '') =>
  `${name}${t ? `__${t}` : ''}${selector ? `--${selector}` : ''}`;

export default createBem;
