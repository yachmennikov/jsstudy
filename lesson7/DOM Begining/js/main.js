'use strict';

let ul = document.querySelectorAll('ul'),
    li = document.querySelectorAll('li'),
    books = document.querySelector('.books'),
    booksList = document.querySelectorAll('.book');
console.log(ul);
console.log(li, booksList);

ul[0].insertBefore(li[6], li[4]);
ul[0].insertBefore(li[8], li[2]);
ul[0].insertBefore(li[8], li[4]);
ul[0].insertBefore(li[2], li[10]);

ul[5].insertBefore(li[55], li[49]);
ul[5].insertBefore(li[48], li[52]);
ul[5].insertBefore(li[51], li[54]);


books.insertBefore(booksList[1], booksList[0]);
books.insertBefore(booksList[5], booksList[2]);
books.insertBefore(booksList[4], booksList[5]);
books.insertBefore(booksList[3], booksList[5]);


document.body.style.backgroundImage = 'url(./image/adv.jpg)';
let title = document.querySelectorAll('.book h2 a');
// title[4].textContent = 'Книга 3. this и Прототипы Объектов';


let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
ul[2].appendChild(newLi);
ul[2].insertBefore(li[26], li[25]);

let adv = document.querySelector('.adv');
adv.style.display = 'none';


