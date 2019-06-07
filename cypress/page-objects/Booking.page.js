
const bookingDetails = {
    firstname: 'Homer',
    lastname: 'Simpson',
    totalprice: '600'
}

export default class Login {
    get firstNameInput() {
        return '#firstname'
    }
    get lastNameInput() {
        return '#lastname'
    }
    get bookingAmountField() {
        return '#totalprice'
    }
    get bookingCheckIn() {
        return '#checkin'
    }
    get bookingCheckOut() {
        return '#checkout'
    }

    /**
     * USER ACTIONS *************************************************************
     */
    newBooking() {
        return cy
            .get(this.firstNameInput)
            .type(bookingDetails.firstname)
            .get(this.lastNameInput)
            .type(bookingDetails.lastname)
            .get(this.bookingAmountField)
            .type(bookingDetails.totalprice)
    }
}