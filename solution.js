// 1.

// NaN stands for Not-A-Number, which is a value type that returns itself in some specific operations in Javascript.
console.log(
  `1. NaN stands for Not-A-Number, which is a value type that returns itself in some specific operations in Javascript.`
);

// 1.1.
const greet = "hello";
console.log(`1.1. 'hello' is not a number: ${isNaN(greet)}`);
// 1.2.
const num = 3;
console.log(
  `1.2. Number 3 is not a number: ${isNaN(num)}. It is a ${typeof num}.`
);
// 1.3.
const type = NaN;
console.log(
  `1.3. Is the 'NaN' type a ${typeof type} type? ${isNaN(type)}, it is.`
);

// 2
const calc = 0.1 * 0.2;
console.log(`2. ${calc.toFixed(2)}`);

// 3
const calcOne = Infinity / 0;
const calcTwo = Infinity / Infinity;
const calcThree = 1 / 0;

console.log(`3.1. Infinity divided per 0 is: ${calcOne}`);
console.log(`3.2. Infinity divided per 0 is: ${calcTwo}`);
console.log(`3.3. Infinity divided per 0 is: ${calcThree}`);
