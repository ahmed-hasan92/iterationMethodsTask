const numbers = [10, 13, 20, 25, 38, 35, 40];
function toGreaterOrEqual(x) {
  return x >= 25;
}
const divisibleByFive = (x) => {
  if (x % 5 === 0) return true;
};
let a1 = numbers.filter(toGreaterOrEqual);
let a2 = ([] = numbers.filter(divisibleByFive));
console.log(a1);
console.log(a2);
const squareEach = (x) => x * x;
let a3 = numbers.map(squareEach);
console.log(a3);
const multiblyNumbers = (x) => x * 2;
let a4 = numbers.map(multiblyNumbers);
console.log(a4);
const isGreaterThanTwenty = (x) => {
  if (x >= 20) {
    return true;
  }
};
let a5 = numbers.filter(isGreaterThanTwenty).map(squareEach);
console.log(a5);
const multiblyByThree = (x) => x * 3;
let a6 = numbers.filter(divisibleByFive).map(multiblyByThree);
console.log(a6);
