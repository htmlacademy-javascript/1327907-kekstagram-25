function randomNumder(min, max) {
  if (max <= min || min < 0) {
    return console.log('Не верный диапазон значений');
  }

  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

console.log(randomNumder(6, 58));

function maxLengthString(string, maxLength) {
  const LengthString = string.length;
  if (maxLength < LengthString) {
    return false;
  }
  return true;
}

console.log(maxLengthString('проверяемая строка', 19));

