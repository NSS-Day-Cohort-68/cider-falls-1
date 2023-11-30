import { getGuests } from "./database.js"

const allGuests = getGuests()

export const GuestsList = () => {

    let guestsListHTML = "<ul>"

    for (const guest of allGuests) {
        guestsListHTML += `
                        <li>${guest.firstName} ${guest.lastName}</li>`
    }

    guestsListHTML += "</ul>"
    
    return guestsListHTML

}