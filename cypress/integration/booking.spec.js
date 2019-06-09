
import Booking from '../page-objects/Booking.page.js'

const booking = new Booking ()

describe('Create Booking', () => {
    before(() => {
        cy.visit('http://hotel-test.equalexperts.io/')
        cy.url().should('include', 'equalexperts.io')   
    });
    
    it('should create booking with Valid Credentials', () => {
        cy.get(booking.firstNameInput).scrollIntoView()
        cy.get(booking.firstNameInput).type('Homer')
        cy.get(booking.lastNameInput).type('Simpson')
        cy.get(booking.bookingAmountField).type('800')
        cy.get(booking.bookingCheckIn).type('2019-07-10')
        cy.get(booking.bookingCheckOut).type('2019-07-30')
        cy.get(booking.buttonSave).click()
        cy.get('#bookings .row:last-child p').contains( 'Homer')
    })

    it('should delete a booking', () => {
        cy.get(booking.buttonDelete).click()
    })
})