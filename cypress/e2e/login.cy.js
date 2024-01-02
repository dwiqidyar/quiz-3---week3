//  import login_page from "../support/login_page"
//  const loginPages = new loginPage()

  describe('Verify Login Functionality', () => {
   beforeEach ( () =>{
   cy.visit ('https://magento.softwaretestingboard.com')
   })
 // describe('Verify Login Functionality', () => {
    it('passes - Success Login', () => {
   // cy.visit('https://magento.softwaretestingboard.com');
    cy.contains("Sign In").click()
    cy.get('#email').type('jefyan@gmail.com'); 
    cy.get('#pass').type('Jefyan123');
    cy.get('button.action.login.primary#send2[type="submit"]').click(); 
     cy.get('.panel.wrapper > .panel').should('be.visible')
   })

  it ('Verify Failed login - Wrong Credentials', () => {
   //  cy.visit ('https://magento.softwaretestingboard.com')
     cy.contains("Sign In").click()
     cy.get('#email').type('jefyan@gmail.com'); 
     cy.get('#pass').type('Syaya123');
     cy.get('button.action.login.primary#send2[type="submit"]').click();
     cy.get('.message-error > div').should('have.text', 'Invalid Form Key. Please refresh the page.')
     //cy.get('.message-error > div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })
    })   
    
  // it.only('Verify login - customerLogin', () => {
  //    cy.customerLogin ('jefyan@gmail.com', 'Jefyan123')
  //    cy.get('.message-error > div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  //     })   

  // it.only('Verify Login - POM', () => {
  //    cy.get(loginPage.email).type('jefyan@gmail.com');
  //    cy.get(loginPage.pass).type('Jefyan123');
  //    cy.get('button.action.login.primary#send2[type="submit"]').click();
  //    //cy.get('.message-error > div').should('have.text', 'Invalid Form Key. Please refresh the page.')
  //   })   
