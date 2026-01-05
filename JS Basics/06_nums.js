const score = 100;
console.log(score); // o/p : 100 
const balance = new Number(100);
console.log(balance); // o/p : [Number : 100]

console.log(typeof balance.toString()); // Number to String

console.log(balance.toString().length); // first convert in string then check the length of string

//VVIMP prototype : tofixed(int type argument)
console.log(balance.toFixed(2)); // how many digit you want after decimal point

const answer = 12.8976;
// toprecision return stirng;
console.log(answer.toPrecision(3)); // In answer how many total digit you want 
console.log(typeof answer.toPrecision(2)); // o/p : string

const answer2 = 1234.43;
console.log(answer2.toPrecision(2)); // o/p : 1.2e+3 -> use very carefully


const hundreds = 100000000;
console.log(hundreds.toLocaleString());// give value with comma separeted so we can understand 
//digit very easily

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);