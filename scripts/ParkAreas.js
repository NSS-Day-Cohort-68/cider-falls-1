import {
  getParkAreas,
  getServices,
  getAreaServices,
  getGuests,
} from "../database/database.js";

const parkAreas = getParkAreas();
const services = getServices();
const areaServices = getAreaServices();
const guests = getGuests();

// show the number of guests at each park area when the park area title is clicked
document.addEventListener("click", (clickEvent) => {
  const clickedEl = clickEvent.target;
  if (clickedEl.dataset.type === "location-title") {
    const parkAreaId = parseInt(clickedEl.dataset.id);
    let parkAreaName = "";
    for (const area of parkAreas) {
      if (area.id === parkAreaId) {
        parkAreaName = area.location;
      }
    }
    let guestCounter = 0;
    for (const guest of guests) {
      if (parkAreaId === guest.parkId) {
        guestCounter++;
      }
    }
    window.alert(`${parkAreaName} currently has ${guestCounter} guests.`);
  }
});

//pair correct areas to services
export const linkAreaServices = (areas, services, areaServices) => {
  let out = [];
  // loop through each areaService
  for (const pairing of areaServices) {
    // loop through each area
    for (const area of areas) {
      // if the area matches, loop through each service
      if (pairing.parkId === area.id) {
        for (const service of services) {
          // if the service matches, add the pairing to the output
          if (pairing.serviceId === service.id) {
            out.push({
              location: area.location,
              service: service.service,
            });
          }
        }
      }
    }
  }
  // returns an array of pairing objects
  return out;
};

export const AreaServicesHTML = () => {
  let html = `<section class='parkAreas'>`;
  const pairings = linkAreaServices(parkAreas, services, areaServices);

  for (const area of parkAreas) {
    html += `<div class='parkAreasCard'><h3 data-type="location-title" data-id="${area.id}">${area.location}</h3><ul>`;

    for (const pairing of pairings) {
      if (pairing.location === area.location) {
        html += `<li class='services'>
                ${pairing.service}
                </li>`;
      }
    }

    html += "</ul></div>";
  }

  html += "</section>";

  return html;
};
