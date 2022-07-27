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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
