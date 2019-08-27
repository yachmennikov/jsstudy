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
       console.log(days[0]);
    } else {
        console.log(days[1]);
};

console.log(' ');

switch (lang2) {
    case true :  console.log(days[0]);            
    break;
    default :    console.log(days[1]);          
    break;
};

console.log(' ');

console.log(days[0]);
console.log(days[1]);

let namePerson = prompt('Введите ваше имя');

namePerson == 'Артем' ? console.log('Директор') 
              : namePerson == 'Максим' ? console.log('преподаватель') 
              : console.log('студент');




