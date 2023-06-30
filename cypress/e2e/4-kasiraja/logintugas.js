describe('Login Scenario', () => {
    beforeEach(() => {
      cy.visit('https://kasirdemo.belajarqa.com/')
    })
    it('Success Login', () => {
        cy.get('#email').type('dhimazpdt@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.chakra-button').click()
        cy.wait(100)
    })
    it('Failed Login - Wrong Password', () => {
        cy.get('#email').type('dhimazpdt@gmail.com')
        cy.get('#password').type('11111')
        cy.get('.chakra-button').click()
        cy.wait(100)
        cy.get('.chakra-alert')
    })
    it('Failed Login - Wrong Email', () => {
        cy.get('#email').type('dhimazpdt')
        cy.get('#password').type('12345')
        cy.get('.chakra-button').click()
        cy.wait(100)
        cy.get('.chakra-alert')
    })
    it('Success Login - New User', () => {
        cy.get('.css-4rvv7a > a').click()
        cy.get('#name').type('aman sentosa')
        cy.get('#email').type('lokalhouseid@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.css-1n8i4of').click()
        
    })
  })