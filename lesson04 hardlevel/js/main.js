'use strict';

function getAnything(anyThing) {
    if (typeof anyThing !== 'string') {
        alert('Введи корректные данные');
        break;
    }

    anyThing.trim();

    if(anyThing.length > 30) {
        anyThing.substring(0, 29);
    }

}