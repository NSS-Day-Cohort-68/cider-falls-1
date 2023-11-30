import { ServicesHTML } from './ServicesList.js'

const render = () => {
    const container = document.getElementById('container')

    container.innerHTML = `
    <div id='services-list'></div>
    ${ServicesHTML()}
    <div id='locations-list'></div>
    <div id='guests-list'></div>
`
}

render()
