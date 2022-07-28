/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(arr) {
  let generatedNumber = [];
  let repeatedCounter = 0;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[i] === arr[j]) {
        repeatedCounter += 1;
      }
    }
  }

  for (let num of arr) {
    if (num < 0 || num > 9 || repeatedCounter > 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      generatedNumber += '(';
    } else if (i === 2) {
      generatedNumber += ') ';
    } else if (i === 7) {
      generatedNumber += '-';
    }

    generatedNumber += arr[i];
  }

  return generatedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  let measureOfAB = Math.abs(lineA + lineB);
  let measureOfAC = Math.abs(lineA + lineC);
  let measureOfBC = Math.abs(lineB + lineC);

  if (lineA < measureOfBC && lineB < measureOfAC && lineC < measureOfAB) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

// Desafio 13
function hydrate(order) {
  let reg = /\d+/g;
  let drinksArr = order.match(reg);
  let result = 0;

  for (let value of drinksArr) {
    result += parseInt(value, 10);
  }

  if (result > 1) {
    return `${result} copos de água`;
  }

  return `${result} copo de água`;

  // Reference: JavaScript Problem: Extracting Numbers from a String (youtube): https://youtu.be/pfkkdzeyx6U
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
