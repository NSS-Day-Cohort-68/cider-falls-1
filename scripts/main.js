import { GuestsList } from "./guestlist.js"
import { ServicesHTML } from './ServicesList.js'
import { AreaServicesHTML } from './ParkAreas.js'

const render = () => {
    const container = document.getElementById('container')

    container.innerHTML = `
    <div id='services-list'>${ServicesHTML()}</div>
    <div id='locations-list'>${AreaServicesHTML()}</div>
    <div id='guests-list'>${GuestsList()}</div>
`
}

render()
