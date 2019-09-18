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

        // burger menu
        const toggleMenu = () => {
            const btnMenu = document.querySelector('.menu'),
                  menu = document.querySelector('menu'),
                  closeBtn = document.querySelector('.close-btn'),
                  menuItems = menu.querySelectorAll('ul > li');

            const handlerMenu = () => {
                menu.classList.toggle('active-menu');
            };
                  btnMenu.addEventListener('click', handlerMenu);
                  closeBtn.addEventListener('click', handlerMenu);
                  menuItems.forEach( item => item.addEventListener('click', handlerMenu) );
        };
        toggleMenu();

       
        // popUp
        const togglePopUp = () => {
            const popup = document.querySelector('.popup'),
                  popupBtn = document.querySelectorAll('.popup-btn'),
                  popupClose = document.querySelector('.popup-close'),
                  popupContent = document.querySelector('.popup-content');
                  
                  popupBtn.forEach( item => item.addEventListener('click', () => { 
                      popup.style.display = 'block';
                      animate();
                 }) 
            );
                  popupClose.addEventListener('click', (event) => { 
                      event.stopPropagation();   
                      popup.style.display = 'none' } );
                  popup.addEventListener('click', () => { popup.style.display = 'none' } );
                  popupContent.addEventListener('click', (event) => { 
                      event.stopPropagation();  
                      popup.style.display = 'block' });

            // Animation
            let count = 0,
                interval;
            const animate = () => {
                if (window.innerWidth > 612) {
                    interval = requestAnimationFrame(animate);
                    count +=5;
                    if (count < 175) {
                        popupContent.style.top = count + 'px';
                    } else {
                        cancelAnimationFrame(interval);
                        count = 0;
                    }
                } else {
                    cancelAnimationFrame(interval);
                }
            };
        };
        togglePopUp();

        // Кусок кода который почемуто не работает
        // аналогичная ситуация с в меню
        // причем не важно есть ли у ссылки якорь типа (href="#service-block") или нет
        
        const scrollDown = () => {
            const scrollBtn = document.querySelector('main > a');

            scrollBtn.addEventListener('click', () => {
                window.scrollBy({ top: 5600, behavior: 'smooth' });
            })
        };
        scrollDown();
        
        
        
       
           
     

   




       
   
   

});