'use strict';

let money = prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    needs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost1 = prompt('Во сколько это обойдется?'),
    needs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost2 = prompt('Во сколько это обойдется?'),
    budgetMonth = 0,
    mission = 10000;


// Выводим тип переменных
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));

// Условия бюджета на день
if (budgetDay >= 800) {
    alert('Высокий уровень дохода.');
} else if (300 <= budgetDay < 800) {
    alert('Средний уровень дохода.');
} else if (0 <= budgetDay < 300) {
   alert('Низкий уровень дохода');
} else if(budgetDay < 0) {
    alert('Что то пошло не так');
} else {
    alert('Введите корректные данные');
}

let  accumulatedMonth = 0,
     costs = 0,
     expectation = 0;



function  getExpensesMonth() {
    let  costs = +cost1 + (+cost2);
    return  costs;
}

function getAccumulatedMonth() {
    let accumulatedMonth = +money - costs;
    return accumulatedMonth;
}

function getTargetMonth () {
    let expectation = Math.floor(mission / accumulatedMonth);
    return expectation;
}

getExpensesMonth();
getAccumulatedMonth();
getTargetMonth();


