/**
 * Superclass for CheckoutView and ShoppingCartView.
 * Handles rendering static content into the DOM and initializing Materialize components.
 */


export class View {
    /**
     * Creates a View instance.
     * Calls renderContent and init methods to populate the UI and initialize components.
     *
     * @param {Object} content - Static content for the UI (labels, titles, descriptions).
     */
    constructor(content) {
        this.renderContent(content);
        this.init();
    }


    /**
     * Renders static content into the DOM.
     * 
     * @param {Object} content - Object containing labels, titles, descriptions, etc.
     * @returns {void}
     */
    renderContent(content) {
        // Top navbar
        if (document.querySelector("#nav1")) document.querySelector("#nav1").textContent = content.navAbout;
        if (document.querySelector("#nav2")) document.querySelector("#nav2").textContent = content.navCart;
        if (document.querySelector("#nav3")) document.querySelector("#nav3").textContent = content.navContact;
        if (document.querySelector("#nav4")) document.querySelector("#nav4").textContent = content.navOrder;
        if (document.querySelector("#nav5")) document.querySelector("#nav5").textContent = content.navContact;

        // Sidenav
        if (document.querySelector("#sidenav1")) document.querySelector("#sidenav1").textContent = content.navAbout;
        if (document.querySelector("#sidenav2")) document.querySelector("#sidenav2").textContent = content.navCart;
        if (document.querySelector("#sidenav3")) document.querySelector("#sidenav3").textContent = content.navContact;
        if (document.querySelector("#sidenav4")) document.querySelector("#sidenav4").textContent = content.navOrder;
        if (document.querySelector("#sidenav5")) document.querySelector("#sidenav5").textContent = content.navContact;

        // Hero
        if (document.querySelector("#hero-title1")) document.querySelector("#hero-title1").textContent = content.heroTitle1;
        if (document.querySelector("#hero-parag1")) document.querySelector("#hero-parag1").textContent = content.heroParag1;
        if (document.querySelector("#hero-title2")) document.querySelector("#hero-title2").textContent = content.heroTitle2;
        if (document.querySelector("#hero-parag2")) document.querySelector("#hero-parag2").textContent = content.heroParag2;

        // About Us
        if (document.querySelector("#about-title")) document.querySelector("#about-title").textContent = content.aboutTitle;
        if (document.querySelector("#about-text-1")) document.querySelector("#about-text-1").textContent = content.aboutText1;
        if (document.querySelector("#about-text-2")) document.querySelector("#about-text-2").textContent = content.aboutText2;

        // Shopping Cart
        if (document.querySelector("#cart-title")) document.querySelector("#cart-title").textContent = content.cartTitle;
        if (document.querySelector("#product-types")) document.querySelector("#product-types").textContent = content.productTypes;
        if (document.querySelector("#product-description")) document.querySelector("#product-description").textContent = content.productDescription;
        if (document.querySelector("#select-label")) document.querySelector("#select-label").textContent = content.selectLabel;
        if (document.querySelector("#select-description")) document.querySelector("#select-description").textContent = content.selectDescription;
        if (document.querySelector("#checkout-btn")) document.querySelector("#checkout-btn").textContent = content.checkoutBtn;

        // Your Order
        if (document.querySelector("#checkout-title")) document.querySelector("#checkout-title").textContent = content.checkoutTitle;
        if (document.querySelector("#order-btn")) document.querySelector("#order-btn").textContent = content.orderBtn;

        // Footer
        document.querySelector("#contact-title").textContent = content.contactTitle;
        document.querySelector("#contact-phone").textContent = content.contactPhone;
        document.querySelector("#contact-email").textContent = content.contactEmail;
        document.querySelector("#contact-address").textContent = content.contactAddress;
        document.querySelector("#footer-text").textContent = content.footerText;
    }


    /**
     * Initializes Materialize components.
     * 
     * @returns {undefined}
     */
    init() {
        const sidenavElems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenavElems);

        const parallaxElems = document.querySelectorAll(".parallax");
        M.Parallax.init(parallaxElems);

        const selectElems = document.querySelectorAll("select");
        M.FormSelect.init(selectElems);
    }
}