
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

    get buttonSave() {
        return '#form [type=button'
    }

    get buttonDelete() {
        return '#bookings .row:last-child [type=button]'
    }

    
}