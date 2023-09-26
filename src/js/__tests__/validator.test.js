import Validator from '../Validator';

test('validator test 1', () => {
  const result = Validator.validateUsername('user123');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 2', () => {
  const result = Validator.validateUsername('123user');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 3', () => {
  const result = Validator.validateUsername('us1234er');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 4', () => {
  const result = Validator.validateUsername('user_');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 5', () => {
  const result = Validator.validateUsername('user-');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 6', () => {
  const result = Validator.validateUsername('user-name');
  const expected = true;
  expect(result).toBe(expected);
});

test('validator test 7', () => {
  const result = Validator.validateUsername('user_name');
  const expected = true;
  expect(result).toBe(expected);
});

test('validator test 8', () => {
  const result = Validator.validateUsername('user123name');
  const expected = true;
  expect(result).toBe(expected);
});

test('validator test 9', () => {
  const result = Validator.validateUsername('UsEr');
  const expected = true;
  expect(result).toBe(expected);
});

test('validator test 10', () => {
  const result = Validator.validateUsername('-user');
  const expected = false;
  expect(result).toBe(expected);
});

test('validator test 11', () => {
  const result = Validator.validateUsername('_user');
  const expected = false;
  expect(result).toBe(expected);
});
