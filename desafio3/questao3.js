// questão a
const arrayA = [];

for (let i = 0; i < 5; i++) {
  const numero = i * 2 + 1;
  arrayA[i] = numero;
}

console.log(arrayA); // imprime [1, 3, 5, 7, 9]

// questao b
const arrayB = [2]; 

for (let i = 0; i < 6; i++) {
  const numero = arrayB[i] * 2;
  arrayB.push(numero);
}

console.log(arrayB); // imprime [1, 2, 4, 8, 16, 32, 64, 128]

// questão c

const array = [0];
let soma = 0;

for (let i = 0; i < 7; i++) {
  const numero = i * 2 + 1;
  soma += numero;
  array.push(soma);
}

console.log(array); // imprime [1, 4, 9, 16, 25, 36, 49]

// questão d
const arrayD = [];

for (let i = 0; i < 5; i++) {
  const numero = 4 * (i + 1) * (i + 1);
  arrayD.push(numero);
}

console.log(arrayD); // imprime [4, 16, 36, 64, 100]

// questão e
const arrayE = [0, 1];
let i = 2;

while (arrayE[i-1] + arrayE[i-2] <= 13) {
  arrayE[i] = arrayE[i-1] + arrayE[i-2];
  i++;
}

console.log(arrayE); // [0, 1, 1, 2, 3, 5, 8, 13]

// questão f
const originalArray = [2, 10, 12, 16, 17, 18, 19, 200];
const dArray = [];

for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i].toString().charAt(0) === "D") {
    dArray.push(originalArray[i]);
  }
}

console.log(dArray); // [10, 12, 16, 17, 18, 19, 200]












