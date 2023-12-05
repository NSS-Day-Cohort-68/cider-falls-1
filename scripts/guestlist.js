import { getGuests } from "../database/database.js";

const allGuests = getGuests();

export const GuestsList = () => {
  let guestsListHTML = "<section class='guests'><h2>Guests</h2><ul>";

  for (const guest of allGuests) {
    guestsListHTML += `
                        <li>${guest.firstName} ${guest.lastName}</li>`;
  }

  guestsListHTML += "</ul></section>";

  return guestsListHTML;
};
