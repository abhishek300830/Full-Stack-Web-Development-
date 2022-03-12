const ADJECTIVES = [
    'boundless',
    'slippy',
    'electronic',
    'dangerous',
    'slim',
    'purple',
    'boundless',

]
const OBJECTS = [
    'piano',
    'puddle',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function getRandomUsername() {

    let username = ADJECTIVES[Math.floor(Math.random() * 7)] + '-' + OBJECTS[Math.floor(Math.random() * 7)]
    return username;
}
module.exports = {
    getRandomUsername
}