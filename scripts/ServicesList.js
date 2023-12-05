import { getServices, getParkAreas, getAreaServices } from '../database/database.js'
import { linkAreaServices } from './ParkAreas.js'


// function for getting a service object based on id
export const findServiceById = (serviceId) => {
    for (const service of getServices()) {
        if (serviceId === service.id) {
            return service
        }
    }
    return null
}

// click event handler
document.addEventListener('click', (event) => {
    const data = event.target.dataset

    if (data.type === 'service') {
        const pairings = linkAreaServices(getParkAreas(), getServices(), getAreaServices())
        const targetService = findServiceById(parseInt(data.id))
        let alert = ''

        for (const pairing of pairings) {
            if (targetService.service === pairing.service) {
                alert += `- ${pairing.location}
`
            }
        }

        window.alert(alert)
    }
})


// function to provide the html string for the services component
// invoked in main.js within the render() function
export const ServicesHTML = () => {

    const services = getServices()
    let servicesHtml = '<h2>Park Services</h2><ul>'
    for (const service of services) {
        servicesHtml += `
        <li
            class='services'
            data-type='service'
            data-id='${service.id}'
        >
        ${service.service}
        </li>`
    }
    servicesHtml += '</ul>'

    return servicesHtml
}
