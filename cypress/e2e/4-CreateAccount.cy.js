describe('Edit Account Information', () => {
    it('positive Edit Account Information', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.wait(19000);
        cy.get('#firstname').type("Dyar")
        cy.get('#lastname').type("Dwiqi")
        cy.get('#email_address').type("dwiqi.dyar2020@gmail.com")
        cy.get('#password').type("Dyar123123@")
        cy.get('#password-confirmation').type("Dyar123123@")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.wait(100000);




    })
    it('negative Edit Account Information', () => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > :nth-child(3) > a').click()
        cy.wait(10000);
        cy.get('#firstname').type("Dyar")
        cy.get('#lastname').type("Dwiqi")
        cy.get('#email_address').type("dwiqi.dyar2020@gmail.com")
        cy.get('#password').type("Dyar123123@")
        cy.get('#password-confirmation').type("Dyar123123@")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-error > div').shouid('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')





    })
})