// utility function for generating a random integer from low to high
export const getRandom = (low, high) => {
    return Math.floor(Math.random() * ((high + 1) - low)) + low
}
