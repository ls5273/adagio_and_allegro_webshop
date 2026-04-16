ADAGIO & ALLEGRO WEBSHOP

Overview:
- Adagio & Allegro is a dynamic, front-end e-commerce web application for a musical instrument store. It provides users with a seamless shopping experience where they can browse instruments, configure their order (type, color, quantity), and proceed through a validated checkout flow. The application is built with a strong focus on scalable software architecture and modern web standards.

Key Features:
- Custom MVC Architecture: The codebase is strictly organized using the Model-View-Controller design pattern via ES6 modules. This cleanly separates data handling, UI rendering, and user input logic.
- Dynamic Localization (i18n): Features built-in multi-language support (English, Croatian, Italian) by dynamically importing JS content modules to populate the UI based on the user's region.
- State Persistence: Utilizes the browser's localStorage to save the user's shopping cart selections, seamlessly passing data between the main product page and the checkout page.
- Interactive Shopping Cart: Automatically updates the displayed product image and toggles the checkout button state in real-time based on the user's dropdown selections.
- Regex Form Validation: The checkout form features robust client-side validation using Regular Expressions to ensure names, phone numbers, and emails are formatted correctly before allowing submission.
- ES6 Compatibility Checking: Employs a custom Modernizr build to verify if the user's browser supports modern JavaScript features. If not, it safely redirects legacy browsers to a fallback page.
- Responsive UI Framework: Styled using Materialize CSS to deliver a modern, mobile-responsive interface complete with interactive elements like side navigation and parallax scrolling.

Tech Stack:
- Frontend Logic: Vanilla JavaScript (ES6 Modules) implementing a strict MVC design pattern.
- Markup & Styling: Semantic HTML5, custom CSS3, and the Materialize CSS framework for rapid UI development.
- Tools & Libraries: Modernizr for browser feature detection and jQuery (as a lightweight dependency for Materialize components).
