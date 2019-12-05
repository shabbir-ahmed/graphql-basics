// Named export - has a name, have as many as needed

const message = 'Some Message from myModule.js'

const location = 'Sylhet'

const getGreeting = (name) => {
    return `Welcome to ${name}`
}

export {
    message,
    getGreeting, 
    location as
    default
}