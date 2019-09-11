'use strict';

function DomElement (selector = '.', height = '100px', width = '100px', bg = '#555', fontSize = '20px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.newElement = function (text) {
    let element = document.createElement(this.selector === '.' ? 'div' : 'p');
    document.body.appendChild(element);
    element.style.cssText =  `
                            height: ${this.height};
                            width: ${this.width};
                            background-color: ${this.bg};
                            font-size: ${this.fontSize};
                            `;
    element.textContent = text;
};  
    
let someElement = new DomElement();
someElement.newElement('bitch nigga');
