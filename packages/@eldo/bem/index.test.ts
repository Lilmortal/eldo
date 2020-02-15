import createBem from './createBem';

test('it should create a valid BEM', () => {
  const bem = createBem('a');

  expect(bem('b', 'c')).toEqual('a__b a__b--c');
});
