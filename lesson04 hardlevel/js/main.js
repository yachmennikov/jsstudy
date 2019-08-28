'use strict';

function getAnything(thing) {
    if (typeof thing !== 'string') {
        alert('Введите корректные данные');   
    }

    thing = thing.trim();
    console.log(thing)
    if(thing.length > 30) {
        parseText(thing, 30)
    }
    console.log(parseText(thing, 30));
}

let parseText = function(text, limit){
    if (text.length > limit){
        for (let i = limit; i > 0; i--){
            if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
                return text.substring(0, i) + '...';
            }
        }
         return text.substring(0, limit) + '...';
    }
    else
        return text;
  };

getAnything('Введи значение');