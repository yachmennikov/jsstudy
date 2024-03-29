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
    allInputs = document.querySelectorAll('.data input[type = text]'),
    allInputsResult =document.querySelectorAll('.result input[type = text]');
   
 const AppData = function () {
    this.budget = 0,
    this.budgetDay = 0,
    this.budgetMonth = 0,
    this.incomeMonth = 0,
    this.income = {},
    this.addIncome = [],
    this.expenses = {},
    this.addExpenses = [],
    this.expensesMonth = 0,
    this.deposite = false,
    this.percentDeposite = 0,
    this.moneyDeposite = 0
 };

AppData.prototype.start = function () {
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
             item.setAttribute('disabled', 'true');
         });
     }
 };
   
AppData.prototype.showResult = function () {
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil( this.getTargetMonth() );
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('change', () => {
        incPeriodValue.value = _this.calcPeriod();
    }); 
};

AppData.prototype.addExpensesBlock = () => {
    let  cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelectorAll('input').forEach( (item) => {
        item.value = '';
    });

    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);

    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length > 2) {
        expensesPlus.style.display = 'none';
    };
    
};

AppData.prototype.getExpenses = function () {
    expensesItems.forEach( (item) => {
        let itemExpenses = item.querySelector('.expenses-title').value,
            cashExpenses = item.querySelector('.expenses-amount').value,
            _this = this;

            if (itemExpenses !== '' && cashExpenses !== '') {
                _this.expenses[itemExpenses] = cashExpenses;
            }
                _this.expensesMonth = +cashExpenses;
    })
};

AppData.prototype.addIncomeBlock = () => {
    let  cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelectorAll('input').forEach( (item) => {
        item.value = '';
    });

    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);

    incomeItems = document.querySelectorAll('.income-items');
        expensesPlus.style.display = 'none';

        if (incomeItems.length > 2) {
            incomePlus.style.display = 'none';
            
        };
        if (incomeItems.length > 1) {
            expensesPlus.style.display = 'block';
        };
       
};

AppData.prototype.getIncome = function () {
    incomeItems.forEach( (item) => {
        let itemIncome = item.querySelector('.income-title').value,
            cashIncome = item.querySelector('.income-amount').value,
            _this = this;

            if (itemIncome !== '' && cashIncome !== '') {
                _this.income[itemIncome] = cashIncome;
            }
            _this.incomeMonth = +cashIncome;
    })
};

AppData.prototype.getAddExpenses = function () {
    let addExpenses = additionalExpensesitem.value.split(','),
    _this = this;
    addExpenses.forEach( (item) => {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        }
    });
};

AppData.prototype.getAddIncome = function () {
    additionalIncomeItem.forEach( (item) => {
        let itemValue = item.value.trim(),
        _this = this;
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    })
};

AppData.prototype.getExpensesMonth = function () {
    for (let key in appData.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
};

AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function () {
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * +(periodSelect.value);
};

AppData.prototype.periodChoice = () => {
    let periodAmount = document.querySelector('.period-amount');
    periodAmount.textContent = +periodSelect.value;
};

AppData.prototype.reset = () => {

    start.style.display = 'block';
    cancel.style.display = 'none';
    if ( start.style.display = 'block') {
        allInputs.forEach( (item) => {
            item.value = '';
            item.removeAttribute('disabled', 'true');
        });
        allInputsResult.forEach( (item) => {
            item.value = '';
        });
    }
};

AppData.prototype.eventsListeners = function () {
  
    start.setAttribute('disabled', 'true');
    salaryAmount.addEventListener('input', () => {
        if (salaryAmount.value === '' || isNaN(salaryAmount.value) ) {
            start.setAttribute('disabled', 'true');
        } else {
            start.removeAttribute('disabled', 'true');
        };
    });

        start.addEventListener('click', this.start.bind(appData) );
        cancel.addEventListener('click', this.reset.bind(appData) );

        incomePlus.addEventListener('click', this.addIncomeBlock);
        expensesPlus.addEventListener('click', this.addExpensesBlock);
        periodSelect.addEventListener('input', this.periodChoice);    
};


const appData = new AppData();
appData.eventsListeners();















