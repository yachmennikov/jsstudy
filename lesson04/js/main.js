'use strict';
let ExpensesSum = prompt('Сколько вы тратите с каждой зарплаты?'),
    income = prompt('Введите ваш месячный доход'),
    target = prompt('Сколько стоит вещь вашей мечты');


function getExpensesMonth(taxes, meal, car, rent) {
    let ExpensesSum = taxes + meal + car + rent;
    return ExpensesSum;
}

function getAccumulatedMonth() {
    let accumulatedMonth = income - ExpensesSum;
    return accumulatedMonth;
}

function getTargetMonth() {
    let expectationTime = Math.ceil(target / ExpensesSum);
    return expectationTime;
}
