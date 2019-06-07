
import Booking from '../page-objects/Booking.page.js'

const booking = new Booking ()

describe('Create Booking', () => {
    before(() => {
        cy.visit('http://hotel-test.equalexperts.io/')
        cy.url().should('include', 'equalexperts.io')   
        cy.title().should('equal', 'Hotel booking form')
    });
    
    it('should create booking with Valid Credentials', () => {
        cy.get(booking.firstNameInput).scrollIntoView()
        cy.get(booking.newBooking)

        cy.get(booking.bookingCheckIn).type('2019-07-10')
        cy.get(booking.bookingCheckOut).type('2019-07-30')
        cy.get('#form').find("[type='button']").click()
        // cy.get('#bookings').should('include', 'Ken')
    })
})