window.addEventListener('DOMContentLoaded', function () {
'use strict';

let hello = 'Добрый день, сегодня: ',
    today = new Date(),
    seconds = today.getSeconds(),
    minutes = today.getMinutes(),
    hours = today.getHours(),
    dayOfWeek = { weekday: 'long'},
    currentMoment = today.toLocaleDateString('ru-RU', dayOfWeek);
    
    
    let countDown = function (deadline) {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime();
            let timeRemaining = Math.ceil( (dateStop - dateNow) / 86400000);
            return timeRemaining;
    }

//    countDown('01 january 2020');

    let now = `Добрый день, сегодня ${currentMoment}, текущее время ${hours}:${minutes}:${seconds} PM 
    до нового года осталось ${countDown('01 january 2020')} дней`;
    document.write(now);


   
    

   
    
 

           















});