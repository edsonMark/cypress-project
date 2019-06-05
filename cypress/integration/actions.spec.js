describe('Action Test', () => {
    before(() => {
        //runs once before all tests in the block
    });

    after(() => {
        //runs after all test in the block
    });

    beforeEach(() => {
        //runs before each test in the block
        cy.visit('https://devexpress.github.io/testcafe/example/')
    });
    
    afterEach(() => {
        //runs after each test in the block
    });

    it('Submite dev name', () => {
        cy.get('#developer-name').type('Name')
        cy.get('#submit-button').scrollIntoView()
        cy.get('#submit-button').click()

        cy.get('.result-content').should('be.visible')
        cy.url().should('include', "thank-you")
    });
});