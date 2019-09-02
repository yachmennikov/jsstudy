'use strict';
const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];

for (let i = 0; i < week.length; i++) {
    document.write(week[i] + '<br/>');
};

let boy = {
    cap: true,
    girlfriend: true,
    cash: 2000,
    like: 'football'
}

for (let key in boy) {
    console.log(boy[key]);
}

week.forEach( () => (
    console.log(week)
));