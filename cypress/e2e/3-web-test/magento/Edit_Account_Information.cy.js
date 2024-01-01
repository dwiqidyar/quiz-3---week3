import loginPage from '../../../support/login_pages.js'
import EditAccount from '../../../support/Account_edit.js'
import dataJson from '../../../fixtures/asset.json'

const loginPages = new loginPage()
const edit =new EditAccount()

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// Contoh penggunaan
//const randomString = generateRandomString(10);

describe('Edit Account Information', () => {
  it('positive Edit Account Information', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains("Sign In").click()
    cy.reload(true)
    cy.get(loginPages.email).type(dataJson.email);
    cy.get(loginPages.password).type(dataJson.password);
    cy.get('button.action.login.primary#send2[type="submit"]').click();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.get(edit.first).clear();
    cy.get(edit.first).type(generateRandomString(10), { delay: 100 });
    cy.get(edit.last).clear();
    cy.get(edit.last).type(generateRandomString(10), { delay: 100 })
    cy.contains("Save").click()
    cy.get('.message-success > div').should('have.text','You saved the account information.')
    
  })

  it('Negative Edit Account Information', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains("Sign In").click()
    cy.reload(true)
    cy.get(loginPages.email).type(dataJson.email);
    cy.get(loginPages.password).type(dataJson.password);
    cy.get('button.action.login.primary#send2[type="submit"]').click();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.get(edit.first).clear();
    cy.get(edit.last).clear();
    cy.get(edit.last).type(generateRandomString(10), { delay: 100 })
    cy.contains("Save").click()
    cy.get('#firstname-error').should('have.text','This is a required field.')
    
  })
  it('Negative Edit Account Information', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains("Sign In").click()
    cy.reload(true)
    cy.get(loginPages.email).type(dataJson.email);
    cy.get(loginPages.password).type(dataJson.password);
    cy.get('button.action.login.primary#send2[type="submit"]').click();
    cy.wait(5000);
    cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/');
    cy.get(edit.first).clear();
    cy.get(edit.first).type(generateRandomString(10), { delay: 100 })
    cy.get(edit.last).clear();
    cy.contains("Save").click()
    cy.get('#lastname-error').should('have.text','This is a required field.')
    
  })


})
