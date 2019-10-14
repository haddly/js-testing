const functions = require('./functions');

//toBe sum of 2+2
test('adds 2 + 2 equals 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

//to be null
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

//to be falsy
test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual is used on objects. toBe would not work here.
test("should be 'Brad Traversy' as object", () => {
  expect(functions.createUser()).toEqual({
    firstname: 'Brad',
    lastname: 'Traversy'
  });
});

// Less thatn and greater than
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});
