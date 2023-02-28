'use strict'

let money = 40000;
let income = 'Фриланс'
let addExpenses = 'Интернет, Такси, Кино'
let deposit = true
let mission = 500000
let period = 12

alert('hello world!');

console.log('hello world!');

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);
console.log(`Период равен ${period} месяцев, цель накопить ${mission}`);
console.log(addExpenses.split(' , '))
console.log(addExpenses.toLowerCase());

let budgetDay = money / 30
console.log(Math.round(budgetDay));

money = prompt('Ваш месячный доход?', 40000)



