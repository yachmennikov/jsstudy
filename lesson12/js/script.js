window.addEventListener('DOMContentLoaded', function () {
'use strict';

    // timer
    function countTimer(deadline) {

        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

            function getTimeRemaining () {
                let dateStop = new Date(deadline).getTime(),
                    dateNow = new Date().getTime(),
                    timeRemaining = (dateStop - dateNow) / 1000,
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor( (timeRemaining / 60) % 60),
                    hours = Math.floor(timeRemaining / 60 / 60);

                    return {timeRemaining, hours, minutes, seconds}
            };
           
            function updateClock () {
                let timer = getTimeRemaining();
                    if (timer.hours < 10) timer.hour = "0" + timer.hours;
                    if (timer.minutes < 10) timer.minutes  = "0" + timer.minutes;
                    if (timer.seconds < 10) timer.seconds  = "0" + timer.seconds;
                    timerHours.textContent = timer.hours;
                    timerMinutes.textContent = timer.minutes;
                    timerSeconds.textContent = timer.seconds;
                if(timer.timeRemaining > 0) {
                    setInterval(updateClock, 1000);
                   
                }  else if (timer.timeRemaining < 0) {
                    clearInterval(updateClock);
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                }; 
            };
            updateClock();
    };

    countTimer('17 september 2019');
   

   
   














});