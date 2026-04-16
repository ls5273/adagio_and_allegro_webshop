/**
 * Superclass for CheckoutController and ShoppingCartController.
 * Handles storing references to the model and view instances for subclasses.
 */


export class Controller {
    /**
     * Creates a Controller instance.
     * 
     * @param {Object} model - The model instance containing application data and logic.
     * @param {Object} view - The view instance responsible for rendering content.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}