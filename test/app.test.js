/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
import returnsPropertiesObject from '../src/js/app';

const testObj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

// beforeEach(() => {
//   returnsPropertiesObject();
// });

test('Not properties', () => {
  const result = returnsPropertiesObject(testObj);
  expect(result).toEqual({ name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 });
});

test('Empty array with properties', () => {
  const result = returnsPropertiesObject(testObj, []);
  expect(result).toEqual({ attack: 80, defence: 40, health: 10, level: 2, name: 'мечник' });
});

test('Properties that not in object', () => {
  const result = returnsPropertiesObject(testObj, ['test']);
  expect(result).toEqual({ attack: 80, defence: 40, health: 10, level: 2, name: 'мечник' });
});

test('Properties number, string', () => {
  const result = returnsPropertiesObject(testObj, ['11']);
  expect(result).toEqual({ attack: 80, defence: 40, health: 10, level: 2, name: 'мечник' });
});

test('Properties number', () => {
  const result = returnsPropertiesObject(testObj, [2222]);
  expect(result).toEqual({ attack: 80, defence: 40, health: 10, level: 2, name: 'мечник' });
});

test('Properties available in object', () => {
  const result = returnsPropertiesObject(testObj, ['defence', 'health']);
  expect(result).toEqual({ defence: 40, health: 10, attack: 80, level: 2, name: 'мечник' });
});
