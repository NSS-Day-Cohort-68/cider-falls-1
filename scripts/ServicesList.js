// import { getServices } from './main.js'  <-- remove comment when database.js is available

// temporary services array to be used while waiting for access to the database:
const services = [
    {id: 1, service: 'Rafting'},
    {id: 2, service: 'Canoeing'},
    {id: 3, service: 'Fishing'},
    {id: 4, service: 'Hiking'},
    {id: 5, service: 'Picnicking'},
    {id: 6, service: 'Rock Climbing'},
    {id: 7, service: 'Lodging'},
    {id: 8, service: 'Parking'},
    {id: 9, service: 'Information'},
    {id: 10, service: 'Zip Lines'}
]

// function to provide the html string for the services component
// invoked in main.js within the render() function
export const ServicesHTML = () => {
    // const services = getServices()   <-- remove comment when database.js is available 
    let servicesHtml = '<h2>Park Services</h2><ul>'
    for (const service of services) {
        servicesHtml += `<li data-id="${service.id}">${service.service}</li>`
    }
    servicesHtml += '</ul>'

    return servicesHtml
}