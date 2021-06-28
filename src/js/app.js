/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable prefer-destructuring */

export default function returnsPropertiesObject(obj, sorting) {
  if (sorting === undefined) {
    return obj;
  }
  try {
    const sortingKeysArr = [];
    sorting.forEach((sortElem) => {
      sortingKeysArr.push(Object.entries(obj).find((el) => el[0] === sortElem));
      delete obj[sortElem];
    });

    const sortingKeysObject = {};
    sortingKeysArr.forEach((el) => (sortingKeysObject[el[0]] = el[1]));

    let keys = Object.keys(obj).sort();

    const remainingKeysObject = {};
    keys.forEach((key) => (remainingKeysObject[key] = obj[key]));

    return { ...sortingKeysObject, ...remainingKeysObject };
  } catch (e) {
    let keys = Object.keys(obj).sort();

    const remainingKeysObject = {};
    keys.forEach((key) => (remainingKeysObject[key] = obj[key]));

    return remainingKeysObject;
  }
}
