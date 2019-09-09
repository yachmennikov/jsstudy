'use strict';
let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositAmountInput = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    targetAmount = document.querySelector('.target-amount'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitleInput = document.querySelector('.income-title'),
    incomeItems = document.querySelectorAll('.income-items'),
    expensesTitleInput = document.querySelector('.expenses-title'),
    expensesAmountInput = document.querySelector('.expenses-amount'),
    additionalExpensesitem  = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incPeriodValue = document.querySelector('.result-income_period input');
   
   
   

let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    incomeMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    deposite: false,
    percentDeposite: 0,
    moneyDeposite: 0,
    start: function () {
       
      
       

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getIncome();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();

        start.style.display = 'none';
        cancel.style.display = 'block';
        if ( start.style.display = 'none') {
            let allInputs = document.querySelectorAll('.data input[type = text]');
            allInputs.forEach( (item) => {
                item.setAttribute('disabled', 'disabled');
                incomePlus.setAttribute('disabled', 'disabled');
                expensesPlus.setAttribute('disabled', 'disabled');
            });

        }
    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil( appData.getTargetMonth() );
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('change', () => {
            incPeriodValue.value = appData.calcPeriod();
        });



    },
    addExpensesBlock: function () {
        let  cloneExpensesItem = expensesItems[0].cloneNode(true);

        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

        expensesItems = document.querySelectorAll('.expenses-items');
        if (expensesItems.length > 2) {
            expensesPlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach( (item) => {
            let itemExpenses = item.querySelector('.expenses-title').value,
                cashExpenses = item.querySelector('.expenses-amount').value;

                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = cashExpenses;
                }
                appData.expensesMonth = +cashExpenses;
        })
    },
    addIncomeBlock: function () {
        let  cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');
            expensesPlus.style.display = 'none';

            if (incomeItems.length > 2) {
                incomePlus.style.display = 'none';
            }
    },
    getIncome: function () {
        incomeItems.forEach( (item) => {
            let itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;

                if (itemIncome !== '' && cashIncome !== '') {
                    appData.income[itemIncome] = cashIncome;
                }
                appData.incomeMonth = +cashIncome;
        })
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesitem.value.split(',');
        addExpenses.forEach( (item) => {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach( (item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        })
    },
   
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },
    periodChoice: function () {
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value;
    }
   
};

start.setAttribute('disabled', 'true');
salaryAmount.addEventListener('input', () => {
    if (salaryAmount.value === '' || isNaN(salaryAmount.value) ) {
        start.setAttribute('disabled', 'true');
    } else {
        start.removeAttribute('disabled', 'true');
    };
  
});

start.addEventListener('click', appData.start);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.periodChoice);


















// if (appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + Math.ceil( appData.getTargetMonth() ) + ' месяца');
// } else {
//     console.log('Цель не будет достигнута');
// };


// for (let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }
    









// asking: function () {

         
   

//     let addExpenses;
       
//     do {
//         addExpenses = prompt('Перечислите расходы через запятую');
//     } while (addExpenses === '' || addExpenses === null || isNaN(addExpenses) === false);

//     appData.addExpenses = addExpenses.toLowerCase().split(', ');
//     for (var i = 0; i < appData.addExpenses.length; i++) {
       
//         appData.addExpenses[i] = ' ' + appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substring(1);
//     };

//     appData.deposite = confirm('Есть ли у вас депозит в банке?');
//     if (appData.deposite === true) {
//         appData.getInfoDeposite();
//     }
  
// },
