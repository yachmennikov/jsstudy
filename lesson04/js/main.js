'use strict';

let money = prompt('Ваш ежемесячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 10000,
    income = 'рабство с НДС',
    period = 3;

    let showTypeOF = item => console.log(item, typeof item);

    showTypeOF(money);
    showTypeOF(income);
    showTypeOF(deposit);

let expenses = prompt('Введите обязательные расходы', 'еда'),
    expAmount = prompt('Сколько вам требуется средств?', 7000),
    expenses2 = prompt('Введите обязательные расходы', 'одежда'),
    expAmount2 = prompt('Сколько вам требуется средств?', 5000);

let getExpensesMonth = function () {
    return expAmount + expAmount2;
};

let getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};

let getTargetMonth = function () {
    return mission / getExpensesMonth();
}

let budgetDay = getAccumulatedMonth() / 30;

console.log('Цель будет достигнута за ' + Math.ceil( getTargetMonth() ) + ' месяца');

let getStatusIncome = function () {
    if (budgetDay < 0) {
        return ('Что то пошло не так');
    } else if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 880) {
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }
};

console.log( getStatusIncome () );

