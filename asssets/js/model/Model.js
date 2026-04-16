/**
 * Superclass for CheckoutModel and ShoppingCartModel.
 */


export class Model {
    /**
     * Stores the current model state in the browser's localStorage.
     * 
     * @returns {void}
     */
    store() {
        localStorage.setItem('Product', JSON.stringify(this));
    }
}