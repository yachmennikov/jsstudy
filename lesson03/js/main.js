'use strict';

let money = prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');

 // Выводим список расходов в виде массива
console.log( addExpenses.split(',') );

// Выводим тип переменных
console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit);

let needs1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost1 = prompt('Во сколько это обойдется?'),
    needs2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    cost2 = prompt('Во сколько это обойдется?'),
    budgetMonth = +money - (+cost1),
    mission = 10000;

// Выводим бюджетные деньги за месяц
console.log(budgetMonth);

// выводим колличество месяцев для достижения цели
console.log(Math.ceil(mission / budgetMonth) );

// Выявляем и выводим бюджет на один день
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



// почему-то через switch не получилось


// switch (budgetDay) {
//     case budgetDay >= 800 : alert('Высокий уровень дохода.');
//     break;

//     case 300 <= budgetDay < 800 :  alert('Средний уровень дохода.');
//     break;

//     case 0 <= budgetDay < 300 : alert('Низкий уровень дохода');
//     break;

//     case budgetDay < 0 : alert('Что то пошло не так');
//     break;

//     default : alert('Введите корректные данные');
// }






