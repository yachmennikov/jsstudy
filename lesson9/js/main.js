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
    incPeriodValue = document.querySelector('.result-income_period input'),
    allInputs = document.querySelectorAll('.data input[type = text]');
   
   
   

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

       this.budget = +salaryAmount.value;

       this.getExpenses();
       this.getExpensesMonth();
       this.getIncome();
       this.getBudget();
       this.getAddExpenses();
       this.getAddIncome();
       this.showResult();

        start.style.display = 'none';
        cancel.style.display = 'block';
        if ( start.style.display = 'none') {
            allInputs.forEach( (item) => {
                item.setAttribute('disabled', 'disabled');
            });

        }
    },
    showResult: function () {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil( this.getTargetMonth() );
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', () => {
            incPeriodValue.value = this.calcPeriod();
        });
    },
    addExpensesBlock: () => {
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
                    this.expenses[itemExpenses] = cashExpenses;
                }
                    this.expensesMonth = +cashExpenses;
        })
    },
    addIncomeBlock: () => {
        let  cloneIncomeItem = incomeItems[0].cloneNode(true);

        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

        incomeItems = document.querySelectorAll('.income-items');
            expensesPlus.style.display = 'none';

            if (incomeItems.length > 2) {
                incomePlus.style.display = 'none';
                
            };
            if (incomeItems.length > 1) {
                expensesPlus.style.display = 'block';
            };
    },
    getIncome: function () {
        incomeItems.forEach( (item) => {
            let itemIncome = item.querySelector('.income-title').value,
                cashIncome = item.querySelector('.income-amount').value;

                if (itemIncome !== '' && cashIncome !== '') {
                    this.income[itemIncome] = cashIncome;
                }
                this.incomeMonth = +cashIncome;
        })
    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesitem.value.split(',');
        addExpenses.forEach( (item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        })
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach( (item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        })
    },
   
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    },
    getBudget: function () {
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: () => {
        if (this.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (this.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (this.budgetDay > 0) {
            return ('Низкий уровень дохода');
        } else {
            return ('Что-то пошло не так');
        }
    },
    getInfoDeposite: function () {
        if(this.deposite) {
            do {
                this.percentDeposite = prompt('Какой годовой процент?', 10);
            } while (isNaN(this.percentDeposite) || this.percentDeposite === '' || 
            this.percentDeposite === null || this.percentDeposite === Infinity);
            do {
                this.moneyDeposite = prompt('Какая сумма заложена', 10000);
            } while (isNaN( this.moneyDeposite) ||  this.moneyDeposite === '' || 
            this.moneyDeposite === null ||  this.moneyDeposite === Infinity);
           
        }
    },
    calcPeriod: () => {
        return this.budgetMonth * periodSelect.value;
    },
    periodChoice: function () {
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent = periodSelect.value;
    },
    reset: () => {
        budgetMonthValue.value = '';
        budgetDayValue.value = '';
        expensesMonthValue.value = '';
        additionalExpensesValue.value = '';
        additionalIncomeValue.value = '';
        targetMonthValue.value = '';
        incomePeriodValue.value = '';

        start.style.display = 'block';
        cancel.style.display = 'none';
        if ( start.style.display = 'block') {
            allInputs.forEach( (item) => {
                item.value = '';
                item.setAttribute('disabled', 'disabled');
            });

        }
   
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

start.addEventListener('click', appData.start.bind(appData));
incomePlus.addEventListener('click', appData.addIncomeBlock);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.periodChoice);
cancel.addEventListener('click', appData.reset.bind(appData));

