'use strict';
const start = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositAmountInput = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    additionalIncome = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    targetAmount = document.querySelector('.target-amount'),
    sumInput = document.querySelector('.salary-amount'),
    incomeTitleInput = document.querySelector('.income-title'),
    incomeAmountInput = document.querySelector('.income-amount'),
    expensesTitleInput = document.querySelector('.expenses-title'),
    expensesAmountInput = document.querySelector('.expenses-amount'),
    additionalExpensesInput = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select');
    
