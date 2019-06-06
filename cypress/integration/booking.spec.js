describe('Create Booking', () => {
    before(() => {
        cy.visit('http://hotel-test.equalexperts.io/')
        cy.url().should('include', 'equalexperts.io')   
        cy.title().should('equal', 'Hotel booking form')
    });
    
    it('should create booking with Valid Credentials', () => {
        cy.get('#firstname').scrollIntoView()
        cy.get('#firstname').type('Ken')
        cy.get('#lastname').type('Test1')
        cy.get('#totalprice').type('250')
        cy.get('#checkin').type('2019-07-10')
        cy.get('#checkout').type('2019-07-30')
        cy.get('#form').find("[type='button']").click()
        // cy.get('#bookings').should('include', 'Ken')
    })
})