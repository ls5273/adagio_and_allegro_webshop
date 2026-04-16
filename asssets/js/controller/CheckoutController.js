import {Controller} from "./Controller.js";

export class CheckoutController extends Controller {
    constructor(model, view) {
        super(model, view);

        this.view.createInputs(this.model.getInputData());

        // validate inputs on change
        this.view.inputs.forEach(input => {
            input.addEventListener("change", this.handleInputChange);
        });

        // handle form submission
        this.view.form.addEventListener("submit", this.handleFormSubmit);
    }


    /**
     * Handles input changes. Retrieves the input element that triggered the 
     * event and updates the model with the new value from the input element.
     * The model property corresponding to the input's name is updated with its 
     * value.
     * 
     * @param {Event} event - an object describing the event that has occurred
     * @returns {undefined}
     */
    handleInputChange = (event) => {
        const input = event.target;

        // validate first; if invalid, don't update model
        if (!this.view.isValid(input.name, input.value)) return;

        this.model[input.name] = input.value;
        this.model.store();
    }


    /**
     * Handles the form submission event.
     * 
     * This method performs validation on all input fields in the form. 
     * If any input is invalid, it prevents submission and alerts the user. 
     * If all inputs are valid, it allows the submission process to continue
     * (currently just shows a success alert).
     * 
     * @param {Event} event - The form submission event object.
     * @returns {void} Does not return a value; prevents default form submission.
     */
    handleFormSubmit = (event) => {
        event.preventDefault();

        // check all inputs
        let allValid = true;
        this.view.inputs.forEach(input => {
            if (!this.view.isValid(input.name, input.value)) {
                allValid = false;
            }
        });

        if (!allValid) {
            alert("Please fix errors before submitting!");
            return;
        }

        alert("Order placed successfully!");
    }
}
