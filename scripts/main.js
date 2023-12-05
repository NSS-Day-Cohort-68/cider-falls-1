import { GuestsList } from "./guestlist.js";
import { ServicesHTML } from "./ServicesList.js";
import { AreaServicesHTML } from "./ParkAreas.js";

const render = () => {
  const container = document.getElementById("container");
  const guestContainer = document.getElementById("guestContainer");

  container.innerHTML = `
    <div id='services-list'>${ServicesHTML()}</div>
    <div id='locations-list'><h2>Destinations</h2>${AreaServicesHTML()}</div>
    `;
  guestContainer.innerHTML = `<div id='guests-list'>${GuestsList()}</div>`;
};

render();
