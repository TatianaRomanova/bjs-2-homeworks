"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1;
  let x2;
  let D = b ** 2 - 4 * a * c;


  if (D === 0) {
    x1 = -b/(2 * a);
    arr.push(x1)
  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D) )/(2 * a);
    x2 = (-b - Math.sqrt(D) )/(2 * a)
    arr.push(x1, x2);
  }
  return arr;

}

console.log(solveEquation());


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  let totalPayment = (monthlyPayment * countMonths).toFixed(2);
  return Number(totalPayment);
}
console.log(calculateTotalMortgage());
