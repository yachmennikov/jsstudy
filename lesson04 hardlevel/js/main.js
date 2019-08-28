'use strict';

function getAnything(thing) {
    if (typeof thing !== 'string') {
        alert('Введите корректные данные');   
    }

    thing = thing.trim();
    console.log(thing)
    if(thing.length > 30) {
       thing = thing.substring(0, 29) + '...';
    }
    console.log(thing);
}


getAnything('Введи значение ddddddddddddddddddddddddddddddddd');