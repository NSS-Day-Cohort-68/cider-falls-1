import { getRandom } from "../scripts/utils.js"

// function for generating guests with random data each time
const randomGuestsData = (n) => {
    const firstNames = ['Alex', 'Ethan', 'Olivia', 'Liam', 'Ava', 'Noah', 'Sophia', 'Jackson', 'Emma', 'Aiden', 'Isabella', 'Lucas', 'Claire', 'Mason', 'Harper', 'Oliver', 'Amelia', 'Elijah', 'Abigail', 'Logan', 'Grace', 'Emily', 'Aria', 'Caleb', 'Eric', 'Henry', 'Madison', 'Samuel', 'Lily', 'Dylan', 'Chloe', 'Hewson', 'Evelyn', 'Benjamin', 'Addison', 'Wyatt', 'Aubrey', 'Luke', 'Natalie', 'Jack', 'Zoey', 'Owen', 'Penelope', 'Isaac', 'Leah', 'Gabriel', 'Brooklyn', 'Anthony', 'Savannah', 'Julian']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Schulz', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Hanson', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'Heidel', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Mai', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Cooper', 'Bennett'];

    let out = []

    for (let i = 1; i <= n; i++) {
        out.push({
            id: i,
            firstName: firstNames[getRandom(0, (firstNames.length - 1))],
            lastName: lastNames[getRandom(0, (lastNames.length - 1))],
            parkId: getRandom(1, 6)
        })
    }

    return out
}

export const database = {
    parkAreas: [
        {
            id: 1,
            location: 'Chamfort River'
        },
        {
            id: 2,
            location: 'Lost Wolf Hiking Trail'
        },
        {
            id: 3,
            location: 'Lodge'
        },
        {
            id: 4,
            location: 'Gander River'
        },
        {
            id: 5,
            location: 'Campgrounds'
        },
        {
            id: 6,
            location: 'Pine Bluffs Trails'
        }
    ],
    services: [
        {
            id: 1,
            service: 'rafting'
        },
        {
            id: 2,
            service: 'canoeing'
        },
        {
            id: 3,
            service: 'fishing'
        },
        {
            id: 4,
            service: 'hiking'
        },
        {
            id: 5,
            service: 'picnicking'
        },
        {
            id: 6,
            service: 'rock climbing'
        },
        {
            id: 7,
            service: 'lodging'
        },
        {
            id: 8,
            service: 'parking'
        },
        {
            id: 9,
            service: 'information'
        },
        {
            id: 10,
            service: 'zip lines'
        }
    ],
    areaServices: [
        {
            parkId: 1,
            serviceId: 1
        },
        {
            parkId: 1,
            serviceId: 2
        },
        {
            parkId: 1,
            serviceId: 3
        },
        {
            parkId: 2,
            serviceId: 4
        },
        {
            parkId: 2,
            serviceId: 5
        },
        {
            parkId: 2,
            serviceId: 6
        },
        {
            parkId: 3,
            serviceId: 7
        },
        {
            parkId: 3,
            serviceId: 8
        },
        {
            parkId: 3,
            serviceId: 9
        },
        {
            parkId: 3,
            serviceId: 5
        },
        {
            parkId: 4,
            serviceId: 3
        },
        {
            parkId: 4,
            serviceId: 4
        },
        {
            parkId: 5,
            serviceId: 9
        },
        {
            parkId: 5,
            serviceId: 7
        },
        {
            parkId: 5,
            serviceId: 8
        },
        {
            parkId: 6,
            serviceId: 4
        },
        {
            parkId: 6,
            serviceId: 5
        },
        {
            parkId: 6,
            serviceId: 10
        }
    ],
    // adjust this number to get a different number of guests
    guests: randomGuestsData(20)
}
