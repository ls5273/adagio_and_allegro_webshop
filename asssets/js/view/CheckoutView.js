import {View} from "./View.js";

export class CheckoutView extends View {
    constructor(content) {
        super(content);
        this.inputs = [];
        this.form = document.querySelector("#order");
    }


    /**
     * Dynamically generates input fields inside the checkout form.
     *
     * @param {Object.<string, string>} data - Key-value pairs where the key is the input name
     *                                         and the value is the default input value.
     * @example
     * view.createInputs({
     *   name: "John Doe",
     *   email: "john@example.com",
     *   phone: "123-4567"
     * });
     */
    createInputs(data) {
        for (let property in data) {
            this.form.querySelector("#div-inputs").insertAdjacentHTML("beforeend", `
                <label>${property.charAt(0).toUpperCase() + property.slice(1)}: </label>
                <input type="text" name="${property}" value="${data[property].charAt(0).toUpperCase() + data[property].slice(1)}"/>
                <br /><span class="error-message" name="${property}"></span><br />
            `);
        }

        this.inputs = Array.from(this.form.querySelectorAll('input[type=text]'));
    }


    /**
     * Updates the visual state of an input and its associated error message.
     *
     * @param {HTMLInputElement} input - The input element to update.
     * @param {string} message - The error message to display if invalid.
     * @param {boolean} ok - Whether the input is valid.
     * @returns {boolean} - True if valid, false otherwise.
     */
    toggle(input, message, ok) {
    const errorSpan = document.querySelector(`span[name=${input.name}]`);

        if (input.classList.toggle('valid', ok)) {
            errorSpan.textContent = '';                    
            errorSpan.style.display = 'none';
        }
        if (input.classList.toggle('invalid', !ok)) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'inline-block';
            errorSpan.style.color = 'red';
            errorSpan.style.fontSize = '1rem';
        }
        return ok;
    }


    /**
     * Validates an input field's value based on its name.
     *
     * @param {string} name - The name of the input (e.g., "name", "phone", "email").
     * @param {string} value - The value to validate.
     * @returns {string} - An error message if invalid, or an empty string if valid.
     */
    validateInput(name, value) {
        switch(name) {
            case 'name':
                return /^[A-Za-z]+ [A-Za-z]+$/.test(value.trim()) ? '' : 'Enter your full name (first & last name).';
            case 'phone':
                return /^\d{3}-\d{4}-\d{3}$/.test(value.trim()) ? '' : 'Use format 123-4567-890.';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Enter a valid email address.';
            default:
                return '';
        }
    }


    /**
     * Validates a specific input field by name and value, updates its UI state,
     * and returns whether it is valid.
     *
     * @param {string} inputName - The name of the input field.
     * @param {string} inputValue - The value to validate.
     * @returns {boolean} - True if the input is valid, false otherwise.
     */
    isValid(inputName, inputValue) {
        const message = this.validateInput(inputName, inputValue);
        const ok = message === "";
        const input = this.inputs.find(inp => inp.name === inputName);
        this.toggle(input, message, ok);
        return ok;
    }
}

