const createRandomNumder = (min, max) => {
  if (max <= min || min < 0) {
    return console.log('Не верный диапазон значений');
  }

  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
};

const inspectMaxLengthString = (string, maxLength) => {
  return maxLength >= string.length;
};


const getArrRandomNumber = (min, max) => {
  const arrRandomNumber = [];
  for (let i = min; i <= max; i++) {
    let a = createRandomNumder(min, max);
    while (arrRandomNumber.includes(a)) {
      a = createRandomNumder(min, max);
    }
    arrRandomNumber.push(a);
  }
  return arrRandomNumber;
};

export {createRandomNumder, inspectMaxLengthString, getArrRandomNumber};

