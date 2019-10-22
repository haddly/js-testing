const functions = require("./functions");
const axios = require("./functions");

//toBe sum of 2+2
test("adds 2 + 2 equals 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//to be null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//to be falsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual is used on objects. toBe would not work here.
test("should be 'Brad Traversy' as object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Brad",
    lastname: "Traversy"
  });
});

// Less thatn and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test("there is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});

// Array
test("Admin should be in usernames", () => {
  const usernames = ["john", "james", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data
test('user fetched name should be "Leanne Graham"', () => {
  expect.assertions(1); // expect.assertions is used to verify a certain number of assertions are called, this is used when tsesting asyinchronous code, and testing that the promise is called
  // must return the promise. if forget to return, the test completes before the fetch/axios is made
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
