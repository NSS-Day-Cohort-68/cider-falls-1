import {
  getParkAreas,
  getServices,
  getAreaServices,
} from "../database/database.js";

const parkAreas = getParkAreas();
const services = getServices();
const areaServices = getAreaServices();

//pair correct areas to services
const linkAreaServices = (areas, services, areaServices) => {
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
    html += `<div class='parkAreasCard'><h3>${area.location}</h3><ul>`;

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
