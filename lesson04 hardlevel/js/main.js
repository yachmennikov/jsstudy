'use strict';

function getAnything(anyThing) {
    if (anyThing !== 'string') {
        alert('Введи корректные данные');
    }

    anyThing.trim();

    if(anyThing.length > 30) {
        anyThing.substring(0, 29);
    }

}