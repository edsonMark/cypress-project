
import Booking from '../page-objects/Booking.page.js'

const booking = new Booking ()

describe('Create Booking', () => {
    before(() => {
        cy.visit('http://hotel-test.equalexperts.io/')
        cy.url().should('include', 'equalexperts.io')   
    });
    
    it('should create booking with Valid Credentials', () => {
        // cy.ge(t(booking.firstNameInput).scrollIntoView()
        cy.scrollTo('bottom')
        cy.get(booking.firstNameInput).type('Homer')
        cy.get(booking.lastNameInput).type('Simpson')
        cy.get(booking.bookingAmountField).type('600')
        cy.get(booking.bookingCheckIn).type('2019-07-10')
        cy.get(booking.bookingCheckOut).type('2019-07-30')
        cy.get('#form').find("[type='button']").click()
    })

    it('should delete a booking', () => {
    })
})