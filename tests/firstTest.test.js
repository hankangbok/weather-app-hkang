const initialTest = require('./firstTest');

test('Just checking that Jest is initialized correctly', () => {
  expect (initialTest()).toBe(true);
});