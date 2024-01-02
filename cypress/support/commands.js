// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
 Cypress.Commands.add('customerLogin', (email, pass) => { 
   // cy.contains("Sign In").click() //klik sigin button untuk mengarah ke page customer login
    cy.get('#email').type('jefyan@gmail.com'); //input email
    cy.get('#pass').type('Jefyan123');   //input password
    cy.get('button.action.login.primary#send2[type="submit"]').click(); //klik login button
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })