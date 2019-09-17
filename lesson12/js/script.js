window.addEventListener('DOMContentLoaded',  () => {
    'use strict';
    
        // timer
        const countTimer = (deadline) => {
    
          const timerHours = document.querySelector('#timer-hours'),
                timerMinutes = document.querySelector('#timer-minutes'),
                timerSeconds = document.querySelector('#timer-seconds');
    
                const getTimeRemaining = () => {
                    let dateStop = new Date(deadline).getTime(),
                        dateNow = new Date().getTime(),
                        timeRemaining = (dateStop - dateNow) / 1000,
                        seconds = Math.floor(timeRemaining % 60),
                        minutes = Math.floor( (timeRemaining / 60) % 60),
                        hours = Math.floor(timeRemaining / 60 / 60);
    
                        return {timeRemaining, hours, minutes, seconds}
                };
                   
                const countDown = () => {
                    let timer = getTimeRemaining();

                    const conditions = (item) => {
                        return item < 10 ? '0' + item : item;      
                    };

                    if (timer.timeRemaining < 0) {
                        clearInterval(updateClock);
                        timerHours.textContent = '00';
                        timerMinutes.textContent = '00';
                        timerSeconds.textContent = '00';
                    };
                        timerHours.textContent = conditions(timer.hours);
                        timerMinutes.textContent = conditions(timer.minutes);
                        timerSeconds.textContent = conditions(timer.seconds);
                };   
                setInterval(countDown, 1000);    
        };
        
        countTimer('19 september 2019');
});