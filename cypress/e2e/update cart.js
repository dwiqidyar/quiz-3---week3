describe('checkout', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains("Sign In").click()
    cy.get('#email').type('hirgosnating@gmail.com'); 
    cy.get('#pass').type('Ridwan123');
    cy.get('button.action.login.primary#send2[type="submit"]').click();

    cy.get('.minicart-wrapper .action.showcart').click();
    cy.get('button.action.primary.checkout#top-cart-btn-checkout').click;
    cy.get('#cart-555900-qty').type(2)
  })
})