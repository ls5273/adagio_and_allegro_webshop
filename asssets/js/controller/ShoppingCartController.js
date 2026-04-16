import {Controller} from "./Controller.js";

/**
 * Controller for managing the shopping cart interactions.
 * 
 * This class acts as the mediator between the ShoppingCartModel and 
 * ShoppingCartView, handling user input from the view and updating 
 * the model accordingly, then re-rendering the view.
 */


export class ShoppingCartController extends Controller {
    /**
     * Creates an object representing the shopping cart controller.
     * 
     * @param {ShoppingCartModel} model - The model the controller interacts with.
     * @param {ShoppingCartView} view - The view the controller interacts with.
     * @returns {ShoppingCartController} - The object representing the controller.
     */
    constructor(model, view) {
        super(model, view);

         // Dynamically create selects for each property in the model
        this.model.getProperties().forEach((property) => {
            let options = this.model.getOptions(property);
            this.view.createSelect(property, options);
        });

        // Register change event for all dynamically created selects
        this.view.selects.forEach((select) => {
            select.addEventListener("change", this.handleInputChange);
        });
    }

    /**
     * Handles "change" events fired by the <select> fields.
     * On change, the model is updated to reflect the new values
     * The data is stored in localStorage.
     * The view renders the product.
     * 
     * @param {Event} event - the event to be processed 
     */
    handleInputChange = (event) => {
        let input = event.target;
        let property = input.id.replace("input-", "");
        this.model[property] = input.value;
        this.model.store();

        this.view.renderProduct(this.model.instrument, this.model.color, this.model.quantity);
        this.view.toggleCheckoutButton();
    }
}
