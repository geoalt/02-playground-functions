/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
// Iniciando o projeto - Foguete nao tem re!
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(win, tie) {
  return (win * 3) + (tie * 1);
}

// Desafio 6
function highestCount(arr) {
  let highestRepeated = 0;
  let getHighestNum = arr[0];

  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] > getHighestNum) {
      getHighestNum = arr[i];
    }
  }
  for (let value in arr) {
    if (arr[value] === getHighestNum) {
      highestRepeated += 1;
    }
  }

  return highestRepeated;
}

// Desafio 7
function catAndMouse(mouse, a, b) {
  let distanceOfCatA = Math.abs(mouse - a);
  let distanceOfCatB = Math.abs(mouse - b);
  let result = '';

  if (distanceOfCatA < distanceOfCatB) {
    result = 'cat1';
  } else if (distanceOfCatA > distanceOfCatB) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }

  return result;

  // Reference: mdn and stackoverflow about converting negative numbers always positive (https://stackoverflow.com/questions/4652104/convert-a-negative-number-to-a-positive-one-in-javascript). Although I do know about *= -1, I did not want to use an IF just for that. It was insightful and I was glad to know that this method exists
}

// Desafio 8
function fizzBuzz(arr) {
  let renamedArr = [];
  for (let num of arr) {
    if (num % 3 === 0 && num % 5 === 0) {
      renamedArr.push('fizzBuzz');
    } else if (num % 3 === 0) {
      renamedArr.push('fizz');
    } else if (num % 5 === 0) {
      renamedArr.push('buzz');
    } else {
      renamedArr.push('bug!');
    }
  }

  return renamedArr;
}

// Desafio 9
function encode(phrase) {
  let encodedPhrase = '';
  for (let letter of phrase) {
    if (letter === 'a') {
      encodedPhrase += 1;
    } else if (letter === 'e') {
      encodedPhrase += 2;
    } else if (letter === 'i') {
      encodedPhrase += 3;
    } else if (letter === 'o') {
      encodedPhrase += 4;
    } else if (letter === 'u') {
      encodedPhrase += 5;
    } else {
      encodedPhrase += letter;
    }
  }

  return encodedPhrase;
}
function decode(phrase) {
  let decodedPhrase = '';
  for (let letter of phrase) {
    if (letter === '1') {
      decodedPhrase += 'a';
    } else if (letter === '2') {
      decodedPhrase += 'e';
    } else if (letter === '3') {
      decodedPhrase += 'i';
    } else if (letter === '4') {
      decodedPhrase += 'o';
    } else if (letter === '5') {
      decodedPhrase += 'u';
    } else {
      decodedPhrase += letter;
    }
  }

  return decodedPhrase;
}

// Desafio 10
function techList(arr, studentName) {
  let techStack = [];

  if (arr.length === 0) {
    return 'Vazio!';
  }

  let sortArr;
  sortArr = arr.sort();

  for (let i in sortArr) {
    techStack.push({ tech: sortArr[i], name: studentName });
  }

  return techStack;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
