'use strict';

let money,
    start = function () {
        do {
            money = prompt('Ваш ежемесячный доход?', 50000);
        }  while (isNaN(money) || money === '' || money === null || money === Infinity); 
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
    percentDeposite: 0,
    moneyDeposite: 0,
    mission: 50000,
    period: 3,
    asking: function () {

         
        if (confirm('Есть ли у вас дополнительный заработок?') === true) {
            let itemIncome,
                cashIncome;
                do {
                    itemIncome = prompt('Какой у вас дополнительный заработок?', 'фриланс');
                } while (itemIncome === '' || itemIncome === null || isNaN(itemIncome) === false);
                do {
                    cashIncome = prompt('Сколько вы зарабатываете на этом', 10000);
                }  while (isNaN(cashIncome) || cashIncome === '' || 
                cashIncome === null || cashIncome === Infinity);
                appData.income[itemIncome] = +cashIncome;
               
        };

        let addExpenses;
           
        do {
            addExpenses = prompt('Перечислите расходы через запятую');
        } while (addExpenses === '' || addExpenses === null || isNaN(addExpenses) === false);

        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        for (var i = 0; i < appData.addExpenses.length; i++) {
           
            appData.addExpenses[i] = ' ' + appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substring(1);
        };

        appData.deposite = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposite === true) {
            appData.getInfoDeposite();
        }
        for (let i = 0; i < 2; i++) {
            let itemExpenses,
                cashExpenses;
            do {
                itemExpenses = prompt('Введите обязательнуую строку расходов', 'аренда жилья');
            } while (itemExpenses === '' || itemExpenses === null || isNaN(itemExpenses) === false);
            
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
    },
    getInfoDeposite: function () {
        if(appData.deposite) {
            do {
            appData.percentDeposite = prompt('Какой годовой процент?', 10);
            } while (isNaN(appData.percentDeposite) || appData.percentDeposite === '' || 
            appData.percentDeposite === null || appData.percentDeposite === Infinity);
            do {
             appData.moneyDeposite = prompt('Какая сумма заложена', 10000);
            } while (isNaN( appData.moneyDeposite) ||  appData.moneyDeposite === '' || 
            appData.moneyDeposite === null ||  appData.moneyDeposite === Infinity);
           
        }
    },
    calcSaveMoney: function () {
        return appData.budgetMonth * appData.period;
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
    