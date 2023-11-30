import { GuestsList } from "./guestlist.js"

const render = () => {
    const container = document.getElementById('container')

    container.innerHTML = `
    <div id='services-list'></div>
    <div id='locations-list'></div>
    <div id='guests-list'>
    ${GuestsList()}
    </div>
`
}

render()
