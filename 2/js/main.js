function createRandomNumder(min, max) {
  if (max <= min || min < 0) {
    return console.log('Не верный диапазон значений');
  }

  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

console.log(createRandomNumder(6, 58));

function inspectMaxLengthString(string, maxLength) {
  const lengthString = string.length;
  if (maxLength < lengthString) {
    return false;
  }
  return true;
}

console.log(inspectMaxLengthString('проверяемая строка', 19));

