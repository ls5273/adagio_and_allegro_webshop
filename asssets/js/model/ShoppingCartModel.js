import {Model} from "./Model.js";

/**
 * Represents the data model for a shopping cart item.
 * 
 * This class stores the current selections made by the user for a product,
 * including instrument type, color, and quantity.
 */


export class ShoppingCartModel extends Model {
    #selects = null;

    /**
    * Creates an instance of ShoppingCartModel.
    * 
    * Initializes properties based on the provided selects object.
    * The "quantity" property defaults to "1".
    * All other properties default to "undefined".
    * 
    * @param {Object<string, string[]>} selects - Object mapping property names to available options.
    */
    constructor(selects) {
        super();
        
        this.#selects = selects;
        let properties = Object.keys(this.#selects);
        properties.forEach((property) => {
            if (property === "quantity") {
                this[property] = "1"; 
            }
            else {
                this[property] = "undefined"; 
            }
        });
    }


    /**
     * Retrieves the property names of the model.
     * 
     * @returns {string[]} Array of property names.
     */
    getProperties() {
        return Object.keys(this);
    }


    /**
     * Retrieves the current values of the model properties.
     * 
     * @returns {Array<string>} Array of property values.
     */
    getValues() {
        return Object.values(this);
    }


    /**
     * Retrieves the available options for a given property.
     * 
     * @param {string} name - The property name (instrument, color, quantity).
     * @returns {string[]} Array of available options for the specified property.
     */
    getOptions(name) {
        return this.#selects[name];
    }
}