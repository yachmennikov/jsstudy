'use strict';

let money,
    start = function () {
        do {
            money = prompt('Ваш ежемесячный доход?', 50000);
        }  while (isNaN(money) || money === '' || money === null); 
    };

    start();

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposite: false,
    mission: 50000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Перечислите расходы через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposite = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            let itemExpenses = prompt('Введите обязательнуую строку расходов', 'аренда жилья');
            let cashExpenses;
            do {
                cashExpenses = prompt('Во сколько это обойдется?', 5000);
            }   while (isNaN(cashExpenses) || cashExpenses === '' || 
                cashExpenses === null || cashExpenses === Infinity);

                appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return appData.mission / appData.budgetMonth;
    },
    getStatusIncome: function () {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    } 
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц:' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil( appData.getTargetMonth() ) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
};

console.log( appData.getStatusIncome() );



for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
    