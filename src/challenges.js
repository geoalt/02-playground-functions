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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
