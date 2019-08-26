'use strict';

let lang = confirm('Вы используете русский язык?'),
    lang2 = confirm('Вы используете русский язык?'),
    days = [
        [
        'понедельник', 
        'вторник', 
        'среда', 
        'четверг',
        'пятница',
        'суббота',
        'воскресение' 
        ],
        [
        'monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
        ]
    ];




if (lang == true) {
   for (let i = 0; i < days[0].length; i++) {
       console.log(days[0][i]);
    };
    } else {
    for (let i = 0; i < days[1].length; i++) {
        console.log(days[1][i]);
    }
};

console.log(' ');

switch (lang2) {
    case true :  for (let i = 0; i < days[0].length; i++) {
                 console.log(days[0][i]);
                 };
    break;
    default :   for (let i = 0; i < days[1].length; i++) {
                console.log(days[1][i]);
                };
    break;
};

console.log(' ');

console.log(days[0]);
console.log(days[1]);

let namePerson = prompt('Введите ваше имя');

namePerson == 'Артем' ? console.log('Директор') : console.log('Студент');
namePerson == 'Максим' ? console.log('преподаватель') : console.log('Студент');




