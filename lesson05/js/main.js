'use strict';

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 10000,
    income = 'рабство с НДС',
    period = 3;

    let start = function () {
        do {
            money = prompt('Ваш ежемесячный доход?', 50000);
        }  while (isNaN(money) || money === '' || money === null); 
    };

    start();
 

    let showTypeOF = item => console.log(item, typeof item);

    showTypeOF(money);
    showTypeOF(income);
    showTypeOF(deposit);

let expenses,
    expenses2;
   
  
    let getExpensesMonth = function () {
            let sum = 0,
                sum2 = 0
            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    expenses = prompt('Введите обязательную статью расходов', 'аренда жилья');
                    do {
                        sum = prompt('Сколько вам требуется средств?', 7000);
                    }  while (isNaN(sum) || sum === '' || sum === null || sum === Infinity);  
                };
                if (i === 1) {
                    expenses2 = prompt('Введите обязательную статью расходов', 'питание');
                    do {
                        sum2 = prompt('Сколько вам требуется средств?', 7000);
                    }  while (isNaN(sum) || sum === '' || sum === null || sum === Infinity);  
                };
               
            }
            return +sum + (+sum2);
        };

   

let expensesAmount = getExpensesMonth();
console.log(expensesAmount);



let getAccumulatedMonth = function () {
    return money - expensesAmount;
};

let getTargetMonth = function () {
   let targetMonth = mission / expensesAmount;
   if (targetMonth > 0) {
        return ('Цель будет достигнута за ' + Math.ceil(targetMonth) + ' месяца'); 
   }
        return ('Цель не будет достигнута');
    
};



let budgetDay = getAccumulatedMonth() / 30;

console.log( getTargetMonth() );

let getStatusIncome = function () {
    if (budgetDay <= 0) {
        return ('Что то пошло не так');
    } else if (budgetDay < 300) {
        return ('Низкий уровень дохода');
    } else if (budgetDay <= 800) {
        return ('Средний уровень дохода');
    } else {
        return ('Высокий уровень дохода');
    }
};

console.log( getStatusIncome () );















 // let start = function () {
    //     money = prompt('Ваш ежемесячный доход?', 50000);
    //     while ( isNaN(money) || money === '' || money === null) {
    //         money = prompt('Ваш ежемесячный доход?', 50000);
    //         console.log(money);
    //     }
    // };


    // let getExpensesMonth = function () {
    //     let sum = 0;
    //     for (let i = 0; i < 2; i++) {
    //         if (i === 0) {
    //             expenses = prompt('Введите обязательную статью расходов', 'аренда жилья');
    //         };
    //         if (i === 1) {
    //             expenses2 = prompt('Введите обязательную статью расходов', 'питание');
    //         };
    //         sum += +prompt('Сколько вам требуется средств?', 7000);
    //     }
    //     return sum;
    // };