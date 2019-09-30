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
            body = document.querySelector('body');
        
        
            btnMenu.addEventListener('click', () => {
                menu.classList.add('active-menu');
            });
        
            body.addEventListener(('click'), (event) => {
            let target = event.target;
        
            if(target.closest('menu') && menu.classList.contains('active-menu')) { 
                if(target.tagName !== 'MENU') {
                    if(target.tagName === 'A'){ 
                        menu.classList.remove('active-menu');
                    }
                }
            } else if (!target.closest('menu') && !target.closest('.menu')) {
                menu.classList.remove('active-menu');
            }
        
        });
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
                  dots = document.querySelector('.portfolio-dots'),
                  slider = document.querySelector('.portfolio-content');
                
                  

            let currentSlide = 0,
                interval;

            const prevSlide = (elem, index, strClass) => {
                elem[index].classList.remove(strClass);
                
            };

            const nextSlide = (elem, index, strClass) => {
                elem[index].classList.add(strClass);
            };

            const addDotes = () => {
                for (let i = 0; i < slide.length; i++) {
                    let dot = document.createElement('li');
                    dot.className = 'dot';
                    if (i === 0) {
                        dot.classList.add('dot-active');
                    }
                    dots.appendChild(dot);
                   
                }
               
            };
            addDotes();
            let allDotes = document.querySelectorAll('.dot');
           

            const replaySlider = () => {
                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                } else if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }
            };
           
            const autoPlay = () => {
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(allDotes, currentSlide, 'dot-active');
                currentSlide++;
                replaySlider();
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(allDotes, currentSlide, 'dot-active');
               
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
                prevSlide(allDotes, currentSlide, 'dot-active');
                if ( target.matches('#arrow-right') ) {
                    currentSlide++;
                    replaySlider();
                } else if ( target.matches('#arrow-left') ) {
                    currentSlide--;
                    replaySlider() 
                } 
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(allDotes, currentSlide, 'dot-active'); 
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

    // change image
    const changeImg = () => {
        let img = document.querySelectorAll('.command__photo');
            img.forEach( (item) =>  {
                let srcImg = item.src;
                item.addEventListener('mouseover', () => {
                    item.src = item.getAttribute('data-img');
                });
                item.addEventListener('mouseout', () => {
                    item.src = srcImg;
                });
            }); 
    };
    changeImg();
    
    // calculator
    const calc = (price = 100) => {
       const calcBlock = document.querySelector('.calc-block'),
             calcType = document.querySelector('.calc-type'),
             calcSquare = document.querySelector('.calc-square'),
             calcDay = document.querySelector('.calc-day'),
             calcCount = document.querySelector('.calc-count'),
             totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1,
                typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

                if (calcCount.value > 1) {
                    countValue += (calcCount.value - 1) / 10;
                };

                if (calcDay && calcDay.value < 5) {
                    dayValue *= 2;
                } else if (calcDay && calcDay.value < 10) {
                    dayValue *= 1.5;
                }

                if (typeValue && squareValue) {
                    total = price * typeValue * squareValue * countValue * dayValue;
                }

            totalValue.textContent = total;
        };
        
        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target === calcType || target === calcSquare ||
                target === calcDay || target === calcCount) {
                countSum();
            }
        })

    };
    calc();

    
    // send ajax form    
    const sendForm = () => { 
        const   errorMessage = 'Что-то пошло не так...',
                loadMessage = 'Загрузка...',
                successMessage = 'Спасибо, мы скоро с вами свяжемся',
                statusMessage = document.createElement('div');
                statusMessage.style.cssText = `font-size: 1em`;

                const validInputs = () => {
                    document.addEventListener('input', (event) => {
                            let item = event.target;
                            if(item.classList.contains('form-name')) { 
                                item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                            } else if (item.classList.contains('form-phone')){
                                item.value = item.value.replace(/[^0-9\+]/, '');
                            } else if (item.classList.contains('form-email')){
                                item.value = item.value.replace(/[^\w+@\w+.\w{2,3}]/g, '');
                            } else if (item.classList.contains('mess')){
                                item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                            } else if (item.classList.contains('top-form')){
                                item.value = item.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
                            } else {
                                return;
                            }  
                    }); 
                };
                validInputs();

                document.addEventListener('submit', (event) => {
                    event.preventDefault();
                    let target = event.target;

                  

                    if ( !target.matches('#form3') ) {
                        target.appendChild(statusMessage);
                  statusMessage.textContent = loadMessage;
                  const formData = new FormData(target);
                  let body = {};
                  formData.forEach( (val, key) => {
                      body[key] = val;
                  });
                  target.reset(); 
                  
                 postData(body)
                 .then( (response) => {
                     if (response.status !== 200) {
                         throw new Error('status is not equal to 200');
                     }
                     statusMessage.textContent = successMessage;
                 })
                 .catch( (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                 });
             
                   
                  }  else {
                    const formData = new FormData(target);
                    let body = {};
                    formData.forEach( (val, key) => {
                        body[key] = val;
                    });
                    target.reset();
                    const popup = document.querySelector('.popup');
                    popup.style.display = 'none';
                    postData(body).then( (response) => {
                        if (response.status !== 200) {
                            throw new Error('status is not equal to 200');
                        }
                        console.log('Success')
                    }).catch( (error) => {
                       console.error(error);
                    });
                  }
                });
        

                const postData = (body) => {
                    return fetch('./server.php', {
                            method: 'POST',
                            mode: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(body)
                        })
                    };   
        };  
       
    sendForm();

   




       
   
   

});