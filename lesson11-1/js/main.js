'use strict';
let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    depositBank = document.querySelector('.deposit-bank'),
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
    this.percentDeposit = 0,
    this.moneyDeposit = 0
 };

AppData.prototype.start = function () {
    this.budget = +salaryAmount.value;
    this.getAdd('addExpenses',true );
    this.getAdd('addIncome', false);
    this.getExpenses();
    this.getExpensesMonth();
    this.getInfoDeposite();
    this.getIncome();
    this.getBudget();
   
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

AppData.prototype.onAddbuttonClick = function(e){
    let parent = e.target.parentNode;
    const cloneItems = parent.children[1].cloneNode(true);
    parent.insertBefore(cloneItems,e.target);
    cloneItems.querySelectorAll('input').forEach(function (item) {
      item.value = '';
    });
    if(parent.children.length === 5){
      e.target.style.display = 'none';
    } 
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

AppData.prototype.getAdd = function (place, expenses) {
    let textExpenses;
    if (expenses) {
        textExpenses = additionalExpensesValue.value.split(', ');
    } else {
        textExpenses = additionalIncomeValue;
    }
    textExpenses.forEach( (item) => {
    let itemValue = (expenses) ? item.trim() : item.value.trim();
    if (itemValue === '') {
        this[place].push(itemValue);
    }
    });
};



AppData.prototype.getExpensesMonth = function () {
    for (let key in appData.expenses) {
        this.expensesMonth += +this.expenses[key];
    }
};

AppData.prototype.getBudget = function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + 
    (this.moneyDeposit * this.percentDeposit) / 12;
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

AppData.prototype.getInfoDeposite = function () {
    if(this.deposite) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
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

        incomePlus.addEventListener('click', this.onAddbuttonClick);
        expensesPlus.addEventListener('click', this.onAddbuttonClick);
        periodSelect.addEventListener('input', this.periodChoice);    

        depositCheck.addEventListener('change', () => {
            if (depositCheck.checked) {
               depositBank.style.display = 'inline-block';
               depositAmount.style.display = 'inline-block';
               this.deposite = true;
               depositBank.addEventListener('change', function () {
                    let selectIndex = this.options[this.selectedIndex].value;
                    if (selectIndex === 'other') {
                        depositPercent.style.display = 'inline-block';
                        depositPercent.removeAttribute('disabled', 'true');
                        depositPercent.value = '';
                    } else {
                        depositPercent.style.display = 'none';
                        depositPercent.value = selectIndex;
                    }
               });
            } else {
                depositBank.style.display = 'none';
                depositAmount.style.display = 'none';
                depositAmount.value = '';
                this.deposite = false;
            }
        })
};






const appData = new AppData();
appData.eventsListeners();















