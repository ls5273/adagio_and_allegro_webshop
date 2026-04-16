/**
 * Main application class responsible for initializing 
 * the correct MVC components based on the current page.
 */

class App {
    constructor() {
        /**
         * Creates a new instance of the App.
         * Automatically determines the current page
         * and loads the corresponding MVC structure.
         */
        const page = window.location.pathname.split('/').pop();
        this.importMVC(page);
    }


    /**
     * Dynamically imports and initializes the correct 
     * MVC components depending on the current page.
     * 
     * @async
     * @param {string} page - The current page filename 
     * @returns {Promise<void>} Resolves when the MVC modules are imported and initialized.
     */
    async importMVC(page) {
        const {content} = await import("../data/content.en.js"); 

        switch(page) {
            case 'index.html':
                const {ShoppingCartController} = await import("./controller/ShoppingCartController.js"); 
                const {ShoppingCartModel} = await import("./model/ShoppingCartModel.js"); 
                const {ShoppingCartView} = await import("./view/ShoppingCartView.js"); 
                const {selects} = await import("../data/selects.en.js"); 

                new ShoppingCartController(new ShoppingCartModel(selects), new ShoppingCartView(content));
                break;


            case 'checkout.html':
                const {CheckoutController} = await import("./controller/CheckoutController.js"); 
                const {CheckoutModel} = await import("./model/CheckoutModel.js"); 
                const {CheckoutView} = await import("./view/CheckoutView.js"); 

                new CheckoutController(new CheckoutModel(), new CheckoutView(content));
                break;
        }
    }
}


// Initialize the application
const app = new App();