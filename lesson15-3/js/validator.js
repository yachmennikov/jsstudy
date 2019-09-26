class Validator {
    constructor( {selector, pattern, method}) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method - method;
    }
    init() {
        this.applyStyle();
        const elementsForm = [...this.form.elements].filter( item => 
            retuen item.tagName.toLowerCase() !== 'button') &&
            item.type !== 'button';
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Введите корректные данные';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
        if ( elem.nextElementSubling.classList.contains('validator-error') ) {
            elem.nextElementSubling.remove();
        }
    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green
            }
            input.error {
                border: 2px solid red
            }
            validator-error {
                font-size: 14px;
                color: red
            }
        `;
        document.head.appendChild(style);
    }
}