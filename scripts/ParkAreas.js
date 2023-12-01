import { getParkAreas, getServices, getAreaServices } from "../database/database.js"

const parkAreas = getParkAreas()
const services = getServices()
const areaServices = getAreaServices()

//find the service for an areaService
const findService = (areaServices, allServices) => {
    let areaServService = null

    for (const service of allServices) {
        if (service.id === areaServices.parkId) {
            areaServService = service
        }
    }
    return areaServService
}

//find the park area for an areaService
const findParkArea = (areaService, allParkAreas) => {
    let areaServ = null

    for (const park of allParkAreas) {
        if (park.id === areaService.parkId) {
            areaServ = park
        }
    }
    return areaServ
}

export const AreaServicesHTML = () => {
    let html = `<section class="parkAreasCard">`

    for (const aservice of areaServices) {

        const area = findParkArea(aservice, parkAreas)
        const service = findService(aservice, services)

        html += `<h3>${area.location}</h3>
                <ul>`
        if (area.id === aservice.parkId && service.id === aservice.serviceId) {
            html += `<li class="services">
                        ${service.service}
                        </li>`
        }
    }

    html += "</ul></section>"

    return html
}
