import createBem from './createBem';

test('it should return a valid BEM without an element and modifier', () => {
  const bem = createBem('a');

  expect(bem()).toEqual('a');
});

test('it should return a valid BEM with a modifier', () => {
  const bem = createBem('a');

  expect(bem('', 'c')).toEqual('a a--c');
});

test('it should return a valid BEM with an array of modifiers', () => {
  const bem = createBem('a');

  expect(bem('', ['c', 'd'])).toEqual('a a--c a--d');
});

test('it should return a valid BEM with an element and modifier', () => {
  const bem = createBem('a');

  expect(bem('b', 'c')).toEqual('a__b a__b--c');
});

test('it should return a valid BEM with an element and array of modifiers', () => {
  const bem = createBem('a');

  expect(bem('b', ['c', 'd'])).toEqual('a__b a__b--c a__b--d');
});
