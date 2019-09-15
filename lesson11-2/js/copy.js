"use strict";
const start = document.getElementById('start'),
	cancel = document.getElementById('cancel'),
	plus1 = document.querySelector('.income_add'),
	plus2 = document.querySelector('.expenses_add'),
	periodAmount = document.querySelector('.period-amount'),
	depositBank = document.querySelector('.deposit-bank'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	budgetMonthValue = document.querySelector('.budget_month-value'),
	budgetDayValue = document.querySelector('.budget_day-value'),
	expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
	additionalExpensesValue = document.querySelector('.additional_expenses-value'),
	incomePeriodValue = document.querySelector('.income_period-value'),
	targetMonthValue = document.querySelector('.target_month-value'),
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositCheck = document.getElementById('deposit-check'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	depositСheck = document.querySelector('#deposit-check');

// Изменяемые переменные //
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	incomeItems = document.querySelectorAll('.income-items'),
	inputText = document.querySelectorAll('input[type="text"]'),
	checkbox = document.querySelectorAll('input[type="checkbox"]');
	
	


const AppData = function () {
	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
};

AppData.prototype.start = function () {
	this.budget = +salaryAmount.value;
	this.getExpenses();
	this.getIncome();
	this.changeBudget('addExpenses', true);
	this.changeBudget('addIncome', false);
	this.getInfoDeposit();
	this.getBudget();
    this.showResult();
	inputText.forEach((item) => item.setAttribute('disabled', 'true'));
	checkbox.forEach((item) => item.setAttribute('disabled', 'true'));
	depositBank.setAttribute('disabled', 'true');

	let incomeTitlesAll = document.querySelectorAll('.income-title'),
		expensesTitlesAll = document.querySelectorAll('.expenses-title'),
		incomeAmountAll = document.querySelectorAll('.income-amount'),
		expensesAmountAll = document.querySelectorAll('.expenses-amount');
	
	incomeTitlesAll.forEach( item => item.setAttribute('disabled', 'true') );
	expensesTitlesAll.forEach( item => item.setAttribute('disabled', 'true') );
	incomeAmountAll.forEach( item => item.setAttribute('disabled', 'true') );
	expensesAmountAll.forEach( item => item.setAttribute('disabled', 'true') );


	start.style.display = 'none';
	cancel.style.display = 'block';
};

AppData.prototype.showResult = function () {
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(', ');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = Math.ceil(this.getTargetMonth());
	incomePeriodValue.value = this.calcSavedMoney();
};


AppData.prototype.addCloneBlock = function (elemClone, elemButton, elemSelector) {
	let cloneExpensesItem = elemClone.cloneNode(true);

	elemClone.parentNode.insertBefore(cloneExpensesItem, elemButton);
	let elements = document.querySelectorAll(elemSelector);
	cloneExpensesItem.querySelectorAll('input').forEach((item) => {
		item.value = '';
	});
	if (elements.length === 3) {
		elemButton.style.display = 'none';
	}

};
AppData.prototype.changeBudget = function (place, expenses) {
	let textExpenses;

	if (expenses ) {
		textExpenses = additionalExpensesItem.value.split(', ');
	} else {
		textExpenses = additionalIncomeItem;
	}
	textExpenses.forEach((item) => {
		let itemValue = (expenses) ? item.trim() : item.value.trim();
		if (itemValue !== '') {
			this[place].push(itemValue);

		}
	});
};
AppData.prototype.getExpenses = function () {
	expensesItems = document.querySelectorAll('.expenses-items');
	expensesItems.forEach((item) => {
		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			this.expenses[itemExpenses] = cashExpenses;
		}
		this.expensesMonth += +cashExpenses;
	}, this);

};
AppData.prototype.getIncome = function () {
	incomeItems = document.querySelectorAll('.income-items');
	incomeItems.forEach((item) => {
		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			this.income[itemIncome] = cashIncome;
		}
		this.incomeMonth += +cashIncome;
	}, this);
};



AppData.prototype.getInfoDeposit = function () {

	if (this.deposit) {
		this.percentDeposit = depositPercent.value;
		this.moneyDeposit = depositAmount.value;
	}
};

AppData.prototype.calcSavedMoney = function () {

	return this.budgetMonth * periodSelect.value;
};

AppData.prototype.getStatusIncome = function () {

	if (this.budgetDay >= 800) {
		this.getStatusIncome = 'У Вас высокий уровень дохода';
	} else if (this.budgetDay >= 300 && this.budgetDay < 800) {
		this.getStatusIncome = 'У Вас cредний уровень дохода';
	} else if (this.budgetDay >= 0 && this.budgetDay < 300) {
		this.getStatusIncome = 'У Вас низкий уровень дохода';
	} else {
		this.getStatusIncome = 'В Вашей жизни что то пошло не так...';
	}

};

AppData.prototype.getTargetMonth = function () {
	return targetAmount.value / this.budget;
};

AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
	this.budgetDay = Math.floor(this.budget / 30);
};

AppData.prototype.reset = function () {

	cancel.style.display = 'none';
	start.style.display = 'block';

	inputText.forEach((item) => {
		item.removeAttribute('disabled', 'true');
		item.value = '';
	});

	checkbox.forEach((item) => {
		item.removeAttribute('disabled', 'true');
		item.checked = false;
	});
	depositBank.removeAttribute('disabled', 'true');
	depositBank.value = 0;
	budgetMonthValue.value = 0;
	budgetDayValue.value = 0;
	expensesMonthValue.value = 0;
	additionalExpensesValue.value = 'Наименования';
	additionalIncomeValue.value = 'Наименования';
	targetMonthValue.value = 'Срок';
	incomePeriodValue.value = 0;
	periodSelect.value = 1;
	periodAmount.textContent = periodSelect.value;
	
	
let incomeTitlesAll = document.querySelectorAll('.income-title'),
	expensesTitlesAll = document.querySelectorAll('.expenses-title'),
	incomeAmountAll = document.querySelectorAll('.income-amount'),
	expensesAmountAll = document.querySelectorAll('.expenses-amount');
	

	incomeTitlesAll.forEach( item => item.value = '');
	expensesTitlesAll.forEach( item => item.value = '');
	incomeAmountAll.forEach( item => item.value = '');
	expensesAmountAll.forEach( item => item.value = '');


	incomeTitlesAll.forEach( item => item.removeAttribute('disabled', 'true') );
	expensesTitlesAll.forEach( item => item.removeAttribute('disabled', 'true') );
	incomeAmountAll.forEach( item => item.removeAttribute('disabled', 'true') );
	expensesAmountAll.forEach( item => item.removeAttribute('disabled', 'true') );


	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = '';
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;


	start.setAttribute('disabled', 'true');

};
AppData.prototype.eventListener = function () {

	salaryAmount.addEventListener('input', () => {
		if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
			start.setAttribute('disabled', 'true');
		} else {
			start.removeAttribute('disabled', 'true');
		}
	});
	start.addEventListener('click', this.start.bind(this));
	cancel.addEventListener('click', this.reset.bind(this));
	plus1.addEventListener('click', this.addCloneBlock.bind(this, incomeItems[0], plus1, '.income-items'));
	plus2.addEventListener('click', this.addCloneBlock.bind(this, expensesItems[0], plus2, '.expenses-items'));
	periodSelect.addEventListener('input', () => {
		periodAmount.textContent = periodSelect.value;
		incomePeriodValue.value = this.budgetMonth * periodSelect.value;
	});
	depositCheck.addEventListener('change', () => {
		if (depositCheck.checked) {
			depositBank.style.display = 'inline-block';
			depositAmount.style.display = 'inline-block';
			appData.deposit = 'true';
			depositBank.addEventListener('change', () => {
				let selectIndex = this.options[this.selectedIndex].value;
				if (selectIndex === 'other') {
					depositPercent.style.display = 'inline-block';
					depositPercent.value = '';
				} else {
					depositPercent.style.display = 'none';
					depositPercent.value = selectIndex;
				}
				console.log(selectIndex);
			});
		} else {
			depositBank.style.display = 'none';
			depositAmount.style.display = 'none';
			depositAmount.value = '';
			appData.deposit = 'false';
		}
	});
};

const appData = new AppData();
appData.eventListener();


start.setAttribute('disabled', 'true');

