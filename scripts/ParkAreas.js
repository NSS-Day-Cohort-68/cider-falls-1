import { getParkAreas, getServices, getAreaServices } from "../database/database.js"

const parkAreas = getParkAreas()
const services = getServices()
const areaServices = getAreaServices()

//find the service for an areaService
const findService = (areaServices, allServices) => {
    let areaServService = null

    for (const service of allServices) {
        if (service.id === areaServices.id) {
            areaServService = service
        }
    }
    return areaServService
}

//find the park area for an areaService
const findParkArea = (areaServices, allParkAreas) => {
    let areaServ = null

    for (const park of allParkAreas) {
        areaServ = park
    }
    return areaServ
}

export const AreaServicesHTML = () => {
    let html = `<section class="parkAreasCard">`

    for (const aservice of areaServices) {

        const area = findParkArea(aservice, parkAreas)
        const service = findService(aservice, services)

        html += `<h3>${area.name}</h3>
                <ul>`
        if (area.id === aservice.parkId && service.id === aservice.serviceId) {
            html = + `<li class="services">
                        ${service.name}
                        </li>`
        }
    }

    html += "</ul></section>"

    return html
}
