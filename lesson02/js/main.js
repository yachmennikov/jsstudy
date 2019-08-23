const money = 30000,
      income = '10000',
      deposit = false,
      mission = 20000,
      period = 12;
let  addExpenses = 'Internet, Tequila, Girls, Journey';

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log(mission);
console.log(period);

addExpenses = addExpenses.toLowerCase().split(',');
console.log(addExpenses);

const budgetDay = money / 30;
console.log(budgetDay);
console.log(money % 30);



