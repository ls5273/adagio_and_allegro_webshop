import {View} from "./View.js";

/**
 * Represents the view for the shopping cart.
 * 
 * This class handles all interactions with the DOM elements related to 
 * the shopping cart UI, including select inputs and the product image.
 */


export class ShoppingCartView extends View {
    /**
     * Creates an instance of ShoppingCartView.
     * 
     * @param {Object} content - Static content for the UI (labels, titles, descriptions).
     */
    constructor(content) {
        super(content);
        
        this.productImg = document.querySelector("#product-img img"); 
        this.selects = [];
        this.checkoutButton = document.querySelector("#checkout-btn");
    }


    /**
     * Dynamically creates a select element for a given property.
     * 
     * @param {String} name - property name (instrument, color, quantity)
     * @param {Array} options - array of strings for select options
     * @returns {HTMLSelectElement} the created select element
     */
    createSelect(name, options) {
        let selectsDiv = document.querySelector("#div-selects");

        // Insert the select wrapper HTML
        selectsDiv.insertAdjacentHTML("beforeend", `
            <div class="input-field">
                <select id="input-${name}">
                    <option value="undefined" selected disabled>${name.charAt(0).toUpperCase() + name.slice(1)}</option>
                </select>
            </div>`);

        let select = document.querySelector(`#input-${name}`);

        // Add options dynamically
        options.forEach(option => {
            const optionEl = document.createElement("option");
            optionEl.value = option;
            optionEl.textContent = option.charAt(0).toUpperCase() + option.slice(1);
            select.appendChild(optionEl);
        });

        M.FormSelect.init(select); //initialize Materialize select
        this.selects.push(select);

        return select;
    }


    /**
     * Renders the product image based on the model data.
     * 
     * @param {String} instrument - The selected instrument.
     * @param {String} color - The selected color.
     * @param {String|Number} quantity - The selected quantity.
     */
    renderProduct(instrument, color, quantity) {
        let imgSrc = `asssets/images/${instrument.toLowerCase()}-${color.toLowerCase()}-${quantity}.png`;
        this.productImg.src = imgSrc;
        this.productImg.alt = `${quantity} × ${color} ${instrument}`;
    }

    
    /**
     * Toggles the checkout button.
     * Disables it if any select has a value of "undefined", otherwise enables it.
     * 
     * @returns {void} This method updates the DOM state, but does not return a value.
     */
    toggleCheckoutButton() {
        const hasUndefined = this.selects.some(select => select.value === "undefined");
        this.checkoutButton.disabled = hasUndefined;
    }
}
