'use strict';
let   start = document.getElementById('start'),
        btnIncAdd = document.getElementsByTagName('button')[0],
        btnExpAdd = document.getElementsByTagName('button')[1],
        checkBox = document.querySelector('#deposit-check'),
        addIncItem = document.querySelector('.additional_income-item'),
        budgetDayValue = document.querySelector('.result-budget_day input'),
        expensesMonthValue = document.querySelector('.result-expenses_month input'),
        addIncomeValue = document.querySelector('.result-additional_income input'),
        addExpValue = document.querySelector('.result-additional_expenses input'),
        incPeriodValue = document.querySelector('.result-income_period input'),
        targetMonthValue = document.querySelector('.result-target_month input'),
        salaryAmount = document.querySelector('.salary-amount'),
        expensesItems = document.querySelectorAll('.expenses-items'),
        addExpItem = document.querySelector('.additional_expenses-item'),
        targetAmount = document.querySelector('.target-amount'),
        periodSelect = document.querySelector('.period-select'),
        periodAmount = document.querySelector('.reriod-amount'),
        budgetMonthValue = document.querySelector('.result-budget_month input'),
        incomeItems = document.querySelectorAll('.income-items');
        
    

    


let appData = {
budget: 0,
budgetDay: 0,
budgetMonth: 0,
income: {},
incomeMonth: 0,
addIncome: [],
expenses: {},
addExpenses: [],
expensesMonth: 0,
deposite: false,
percentDeposite: 0,
moneyDeposite: 0,
addExpenses: 0,
check: function () {
    if (salaryAmount.value !== '')  {
        start.removeAttribute('disabled');
    }
},
start: function () {
    if (salaryAmount.value === '') {
        start.setAttribute('disabled', 'true');
        return;
    }
    let allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach( (item) => {
        item.setAttribute('disabled', 'disabled');
    });
    btnExpAdd.setAttribute('disabled', 'disabled');
    btnIncAdd.setAttribute('disabled', 'disabled');
    start.style.display = 'none';

    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.getInfoDeposit();
    appData.getStatusIncome();
    appData.showResult();
},
showResult: () => {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    addExpValue.value = appData.addExpenses.join(', ');
    addIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = Math.ceil( appData.getTargetMonth() );
    incPeriodValue.value = appData.calcPeriod();
    periodSelect.addEventListener('change', () => {
        incPeriodValue.value = appData.calcPeriod();
    });

},
addExpensesBlock: () => {
    let CloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(CloneExpensesItem, btnExpAdd);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
        btnExpAdd.style.display = 'none';
    }

},
getExpenses: () => {
        incomeItems.forEach( (item) => {
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }

        });
},
addIncomeBlock: () => {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnIncAdd);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
        btnIncAdd.style.display = 'none';
    }
},
getIncome: () => {
    incomeItems.forEach( (item) => {
        let itemIncome = item.querySelector('.income-title').value,
            cashIncome = item.querySelector('.income-amount').value;
        
        if (itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
        }
    });
    for (let key in appData.income) {
        appData.incomeMonth += appData.income[key];
    }
},
getAddExpenses: () => {
    let addExpenses = addExpItem.value.split(',');
    addExpenses.forEach( (item) => {
        item = item.trim();
        if (item !== '') {
            appData.addExpenses.push(item);
        }
    });

},
getAddIncome: () => {
    addIncItem.forEach( (item) => {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            appData.addIncome.push(itemValue);
        }
    });
},
getExpensesMonth: () => {
    for ( let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key];
    }
},
getBudget: () => {
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
},
getTargetMonth: () => {
    return targetMonthValue / appData.budgetMonth;
},
getStatusIncome: () => {
    if (appData.budgetDay >= 800) {
        return ('Высокий уровень дохода');
    } else if (appData.budgetDay > 300) {
        return ('Средний уровень дохода');
    } else if (appData.budgetDay > 0) {
        return ('Низкий уровень дохода');
    } else {
        return ('Что-то пошло не так');
    }
},
getInfoDeposit: () => {
    if (appData.deposit) {
        do {
            appData.percentDeposite = prompt('Какой у вас годовой процент', '13');
        } while (isNaN(appData.percentDeposite) || appData.percentDeposite === '' || appData.percentDeposite === ' ' ||
        appData.percentDeposite === null);
    }
},

calcPeriod: () => {
    return appData.budgetMonth * periodSelect.value;
}
};


























start.addEventListener('click', appData.start);
btnExpAdd.addEventListener('click', appData.addExpensesBlock);
btnIncAdd.addEventListener('click', appData.addIncomeBlock);
salaryAmount.addEventListener('keyup', appData.check);



periodSelect.addEventListener('change', () => {
    periodAmount.innerHTML = periodSelect.value;
});

let addExp = [];
for (let i = 0; i < appData.addExpenses.length; i++) {
    let element = appData.addExpenses[i].trim();
    element = element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    addExp.push(element);
}








    
