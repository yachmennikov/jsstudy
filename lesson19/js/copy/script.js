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

                  timerHours.textContent = conditions(timer.hours);
                  timerMinutes.textContent = conditions(timer.minutes);
                  timerSeconds.textContent = conditions(timer.seconds);

                  if (timer.timeRemaining < 0) {
                      clearInterval(stopDeadline);
                      timerHours.textContent = '00';
                      timerMinutes.textContent = '00';
                      timerSeconds.textContent = '00';
                  };
                    
              };  
              const stopDeadline = setInterval(countDown, 1000);  
      };
      
      countTimer('21 september 2019');

        // burger menu
        const toggleMenu = () => {
            const btnMenu = document.querySelector('.menu'),
                  menu = document.querySelector('menu'),
                  closeBtn = document.querySelector('.close-btn'),
                  menuItems = menu.querySelectorAll('ul > li');
                  
                //  

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

        // Tabs
        const tabs = () => {
            const tabHeader = document.querySelector('.service-header'),
                  tab = tabHeader.querySelectorAll('.service-header-tab'),
                  tabContent = document.querySelectorAll('.service-tab');

            const toggleTabContent = (index) => {
                for (let i = 0; i < tabContent.length; i++) {
                    if (index === i) {
                        tab[i].classList.add('active');
                        tabContent[i].classList.remove('d-none');
                    } else {
                        tab[i].classList.remove('active');
                        tabContent[i].classList.add('d-none');
                    }
                }
            };
                  tabHeader.addEventListener('click', (event) => {
                    let target = event.target;
                        target = target.closest('.service-header-tab');

                        if (target) {
                            tab.forEach( (item, i) => {
                                if (item === target) {
                                    toggleTabContent(i);
                                }
                            });
                        }
                  });
        };
        tabs();

        // Slider
        const slider = () => {
            const slide = document.querySelectorAll('.portfolio-item'),
                  btn = document.querySelectorAll('.portfolio-btn'),
                  dot = document.querySelectorAll('.dot'),
                  slider = document.querySelector('.portfolio-content');

            let currentSlide = 0,
                interval;

            const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
                
            };

            const nextSlide = (elem, index, strClass) => {
                elem[index].classList.add(strClass);
            };

            const replaySlider = () => {
                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                } else if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }
            }

            const autoPlay = () => {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');
                currentSlide++;
                replaySlider();
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');    
            };

            const startSlider = (time = 5000) => {
                interval = setInterval(autoPlay, time);
            };

            const stopSlider = () => {
                clearInterval(interval)
            };

            slider.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.target;
               
               if (!target.matches('.portfolio-btn, .dot')) {
                   return;
               };

                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');

                if ( target.matches('#arrow-right') ) {
                    currentSlide++;
                    replaySlider();
                } else if ( target.matches('#arrow-left') ) {
                    currentSlide--;
                    replaySlider();
                } else if ( target.matches('.dot') ) {
                    dot.forEach( (elem, index) => {
                        if (elem === target) {
                            currentSlide = index;
                        }
                    })
                };
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');    
            });

            slider.addEventListener('mouseover', (event) => {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                    stopSlider();
                }
            });
            slider.addEventListener('mouseout', (event) => {
                if(event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                    startSlider();
                }
            });

            startSlider(5000);
        };

        slider();

       
        
        
        
       
           
     

   




       
   
   

});